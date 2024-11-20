import React from "react";

function Modal({ isOpen, onClose, img, title, description, price }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-80 sm:w-96">
        {/* Exit Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 focus:outline-none text-xl"
          onClick={onClose}
          aria-label="Close Modal"
        >
          ✖
        </button>
        <div className="flex flex-col items-center">
          <div className="overflow-hidden bg-gray-100 w-full h-64 flex items-center justify-center mb-4">
            <img src={img} alt={title} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-500 text-sm mb-4">{description}</p>
          <p className="text-xl font-bold">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
