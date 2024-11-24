import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Modal from "./components/Modal";
import cardData from "./data.json";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = useQueryClient(); // Initialize QueryClient

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});

  const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category
  const [newCategoryName, setNewCategoryName] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

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

  // Create new category
  const createCategory = async (newCategory) => {
    const response = await fetch(`${apiUrl}/category`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCategory),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      throw new Error(errorData.error || "Failed to create category");
    }
    return response.json();
  };

  const mutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["fetchCategories"]);
    },
  });

  const handleCreateCategory = () => {
    if (!newCategoryName.trim()) return;

    mutation.mutate(
      { name: newCategoryName },
      {
        onError: (error) => {
          console.error("Error creating category:", error.message);
        },
        onSuccess: () => {
          setNewCategoryName(""); // Clear input on success
          queryClient.invalidateQueries(["fetchCategories"]); // Refetch categories
        },
      }
    );
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  //
  //   const handleCardClick = (item) => {
  //     setModalContent(item);
  //     setIsModalOpen(true);
  //   };

  //   const closeModal = () => {
  //     setIsModalOpen(false);
  //     setModalContent({});
  //   };

  //   const toggleCategory = (category) => {
  //     setExpandedCategories((prevState) => ({
  //       ...prevState,
  //       [category]: !prevState[category],
  //     }));
  //   };

  return (
    <div>
      <h1>Dropdown Example</h1>
      {/* Create Category Form */}
      <div>
        <input 
          style={{background: "gray"}}
          type="text"
          placeholder="Enter category name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <button style={{background: "blue"}} onClick={handleCreateCategory} disabled={mutation.isLoading}>
          {mutation.isLoading ? "Creating..." : "Add Category"}
        </button>
        {mutation.isError && (
          <p style={{ color: "red" }}>
            Error creating category:{" "}
            {mutation.error?.message || "Unknown error"}
          </p>
        )}
          {mutation.isSuccess && (
    <p style={{ color: "green" }}>Category created successfully!</p>
  )}
      </div>

      <select style={{background: "orange"}}
        onChange={(e) => {
          const categoryId = e.target.value;
          const category = categories.find((cat) => cat._id === categoryId);
          setSelectedCategory(category);
        }}
      >
        <option value="">-- Select a Category --</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <div>
          <h2>Items in {selectedCategory.name}</h2>
          <ul>
            {selectedCategory.items.map((item) => (
              <li key={item._id || `item-${Math.random()}`}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* <div className="w-full max-w-screen-lg px-4 mt-24">
        {Object.entries(cardData).map(([category, items]) => {
          const isExpanded = expandedCategories[category];
          const visibleItems = isExpanded ? items : items.slice(0, 4);

          return (
            <div key={category} className="mb-12">
              <h1 className="text-2xl font-bold mb-6 underline">{category}</h1>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
                {visibleItems.map((item) => (
                  <Card
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    onClick={() => handleCardClick(item)}
                  />
                ))}
              </div>
              {items.length > 4 && (
                <div className="flex justify-center mt-4">
                  <button
                    className="text-blue-500 underline"
                    onClick={() => toggleCategory(category)}
                  >
                    {isExpanded ? "Show Less" : "Load More"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div> */}
      {/* 
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        img={modalContent.img}
        title={modalContent.title}
        description={modalContent.description}
        price={modalContent.price}
      /> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
