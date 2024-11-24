import React from "react";

function Modal({ isOpen, onClose, img, title, description, price }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-zinc-900 rounded-lg shadow-lg p-6 w-80 sm:w-96">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 focus:outline-none text-2xl"
          onClick={onClose}
          aria-label="Close Modal"
        >
          ✖
        </button>
        {/* Content Wrapper */}
        <div className="flex flex-col items-center mt-6">
          {" "}
          {/* Added margin-top to push the image down */}
          <div className="overflow-hidden bg-gray-100 w-full h-64 flex items-center justify-center mb-4 rounded-lg">
            <img src={img} alt={title} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
          <p className="text-white text-sm mb-4">{description}</p>
          <p className="text-xl font-bold text-white">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
