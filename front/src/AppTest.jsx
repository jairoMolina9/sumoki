import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = useQueryClient();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [showItemForm, setShowItemForm] = useState(false); // Toggle form visibility
  const [itemDetails, setItemDetails] = useState({
    name: "",
    price: "",
    description: "",
  });

  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  // Fetch Categories
  const fetchCategories = async () => {
    const response = await fetch(`${apiUrl}/category`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["fetchCategories"],
    queryFn: fetchCategories,
  });

  // Mutation: Create New Category
  const createCategory = async (newCategory) => {
    const response = await fetch(`${apiUrl}/category`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCategory),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to create category");
    }
    return response.json();
  };

  const categoryMutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["fetchCategories"]);
      setNewCategoryName(""); // Clear input on success
    },
  });

  // Mutation: Add Item to Category
  const addItemToCategory = async (item) => {
    const response = await fetch(
      `${apiUrl}/category/${item.categoryId}/items`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to add item");
    }
    return response.json();
  };

  const itemMutation = useMutation({
    mutationFn: addItemToCategory,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["fetchCategories"]);
      setSelectedCategory((prev) => ({
        ...prev,
        items: [...(prev.items || []), ...data],
      }));
      setItemDetails({ name: "", price: "", description: "" }); // Reset form
      setShowItemForm(false); // Hide form after success
      setSuccessMessageVisible(true); // Show success message
    },
  });

  const handleCreateCategory = () => {
    if (!newCategoryName.trim()) return;

    categoryMutation.mutate({ name: newCategoryName });
  };

  const handleAddItem = () => {
    if (!itemDetails.name.trim() || !itemDetails.price.trim()) {
      alert("Name and price are required!");
      return;
    }

    const items = [
      {
        name: itemDetails.name,
        price: Number(itemDetails.price),
        description: itemDetails.description,
      },
    ];

    itemMutation.mutate(
      {
        items,
        categoryId: selectedCategory._id,
      },
      {
        onSuccess: async () => {
          // Fetch the updated category with populated items
          const response = await fetch(
            `${apiUrl}/category/${selectedCategory._id}/items`
          );
          const updatedCategory = await response.json();

          setSelectedCategory(updatedCategory); // Update state with the populated category
          setItemDetails({ name: "", price: "", description: "" }); // Reset form
        },
      }
    );
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Category and Item Management</h1>

      {/* Create Category */}
      <div>
        <input
          type="text"
          placeholder="Enter category name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <button
          onClick={handleCreateCategory}
          disabled={categoryMutation.isLoading}
        >
          {categoryMutation.isLoading ? "Creating..." : "Add Category"}
        </button>
        {categoryMutation.isError && (
          <p style={{ color: "red" }}>
            Error creating category:{" "}
            {categoryMutation.error?.message || "Unknown error"}
          </p>
        )}
        {categoryMutation.isSuccess && (
          <p style={{ color: "green" }}>Category created successfully!</p>
        )}
      </div>

      {/* Category Dropdown */}
      <select
        onChange={async (e) => {
          const categoryId = e.target.value;

          if (!categoryId) {
            setSelectedCategory(null);
            setSuccessMessageVisible(false); // Hide success message
            return;
          }

          try {
            // Fetch the selected category with populated items
            const response = await fetch(
              `${apiUrl}/category/${categoryId}/items`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch category details");
            }

            const category = await response.json(); // This should include populated items
            setSelectedCategory(category); // Update state with the populated category
            setShowItemForm(false); // Reset form visibility on category change
            setSuccessMessageVisible(false); // Hide success message
          } catch (error) {
            console.error("Error fetching selected category:", error);
          }
        }}
      >
        <option value="">-- Select a Category --</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>

      {/* Add Item Button */}
      {selectedCategory && (
        <button onClick={() => setShowItemForm(true)}>Add Item</button>
      )}

      {/* Form for Adding Item */}
      {showItemForm && (
        <div>
          <h2>Adding Item to: {selectedCategory.name}</h2>
          <input
            type="text"
            placeholder="Name"
            value={itemDetails.name}
            onChange={(e) =>
              setItemDetails({ ...itemDetails, name: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            value={itemDetails.price}
            onChange={(e) =>
              setItemDetails({ ...itemDetails, price: e.target.value })
            }
          />
          <textarea
            placeholder="Description"
            value={itemDetails.description}
            onChange={(e) =>
              setItemDetails({ ...itemDetails, description: e.target.value })
            }
          ></textarea>
          <button onClick={handleAddItem} disabled={itemMutation.isLoading}>
            {itemMutation.isLoading ? "Adding Item..." : "Submit Item"}
          </button>
        </div>
      )}
      {itemMutation.isError && (
        <p style={{ color: "red" }}>
          Error adding item: {itemMutation.error?.message || "Unknown error"}
        </p>
      )}
      {successMessageVisible && (
        <p style={{ color: "green" }}>Item added successfully!</p>
      )}

      {/* Display Category Items */}
      {selectedCategory && (
        <div>
          <h2>Items in {selectedCategory.name}</h2>
          {selectedCategory.items && selectedCategory.items.length > 0 ? (
            <ul>
              {selectedCategory.items.map((item) => (
                <li key={item._id}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>Category empty</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
