import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Search from "../components/Search";

export const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});

  const apiUrl = import.meta.env.VITE_API_URL;

  // Fetch all categories and their items
  useEffect(() => {
    const fetchCategoriesWithItems = async () => {
      try {
        const categoriesResponse = await fetch(`${apiUrl}/category`);
        if (!categoriesResponse.ok) {
          throw new Error("Failed to fetch categories");
        }

        const categories = await categoriesResponse.json();

        const categoriesWithItems = await Promise.all(
          categories.map(async (category) => {
            const itemsResponse = await fetch(
              `${apiUrl}/category/${category._id}/items`
            );
            if (!itemsResponse.ok) {
              throw new Error(
                `Failed to fetch items for category ${category.name}`
              );
            }
            const populatedCategory = await itemsResponse.json();
            return populatedCategory;
          })
        );

        setCategories(categoriesWithItems);
        setFilteredCategories(categoriesWithItems);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchCategoriesWithItems();
  }, [apiUrl]);

  // Handle search input change
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);

    if (!keyword.trim()) {
      setFilteredCategories(categories);
      return;
    }

    const filtered = categories
      .map((category) => {
        const filteredItems = category.items.filter((item) =>
          item.name.toLowerCase().includes(keyword.toLowerCase())
        );

        return filteredItems.length > 0
          ? { ...category, items: filteredItems }
          : null;
      })
      .filter(Boolean);

    setFilteredCategories(filtered);
  };

  // Toggle the expanded state of a category
  const toggleCategory = (categoryId) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [categoryId]: !prevState[categoryId],
    }));
  };

  const handleCardClick = (item) => {
    setModalContent(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  if (isLoading) {
    return <div className="text-white text-center mt-20">Loading menu...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-20">
        Error fetching menu: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Menu Content */}
      <div className="container mx-auto px-4 mt-8 flex-grow">
        {filteredCategories.length === 0 ? (
          <div className="text-white text-center mt-10">No results found</div>
        ) : (
          filteredCategories.map((category) => {
            const isExpanded = expandedCategories[category._id];
            const visibleItems = isExpanded
              ? category.items // Show all items if expanded
              : category.items.slice(0, 4); // Show only 4 items if collapsed

            return (
              <div key={category._id} className="mb-12">
                <h1 className="text-2xl font-bold mb-6 text-white">
                  {category.name}
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
                  {visibleItems.map((item) => (
                    <Card
                      key={item._id}
                      img={item.photo}
                      title={item.name}
                      description={item.description}
                      price={`$${item.price}`}
                      onClick={() => handleCardClick(item)}
                    />
                  ))}
                </div>
                {category.items.length > 4 && (
                  <div className="flex justify-center mt-4">
                    <button
                      className="bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
                      onClick={() => toggleCategory(category._id)}
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      <div
        className="sticky bottom-0 bg-black z-50 w-full"
        style={{ height: "100px" }}
      >
        <div className="container mx-auto flex items-center justify-center h-full">
          <Search
            value={searchKeyword}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 text-sm sm:text-base md:text-lg"
          />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        img={modalContent.photo}
        title={modalContent.name}
        description={modalContent.description}
        price={`$${modalContent.price}`}
      />
    </div>
  );
};
