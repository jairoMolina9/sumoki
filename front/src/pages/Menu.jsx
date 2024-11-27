import React, { useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import cardData from "../data.json";
import Search from "../components/Search";

export const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});

  const handleCardClick = (item) => {
    setModalContent(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  const toggleCategory = (category) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-black">
      <Search />

      <div className="w-full max-w-screen-lg px-4 mt-24">
        {Object.entries(cardData).map(([category, items]) => {
          const isExpanded = expandedCategories[category];
          const visibleItems = isExpanded ? items : items.slice(0, 4);

          return (
            <div key={category} className="mb-12">
              <h1 className="text-2xl font-bold mb-6 underline text-white">
                {category}
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center ">
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
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        img={modalContent.img}
        title={modalContent.title}
        description={modalContent.description}
        price={modalContent.price}
      />
    </div>
  );
};
