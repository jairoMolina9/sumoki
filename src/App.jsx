import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Modal from "./components/Modal";
import cardData from "./data.json";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleCardClick = (item) => {
    setModalContent(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />

      <div className="w-full max-w-screen-lg px-4 mt-24">
        {Object.entries(cardData).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h1 className="text-2xl font-bold mb-6 underline ">{category}</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
              {items.map((item) => (
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
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        img={modalContent.img}
        title={modalContent.title}
        description={modalContent.description}
        price={modalContent.price}
      />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
