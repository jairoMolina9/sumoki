import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router
import data from "../data.json"; // Adjust the path if necessary

const Manage = () => {
  const [categories, setCategories] = useState(data); // Load data.json
  const navigate = useNavigate();

  const handleEdit = (category, dishId) => {
    // Navigate to the Update page with dish ID and category
    navigate(`/update`, { state: { category, dishId } });
  };

  const handleCreate = () => {
    // Navigate to the Create page
    navigate(`/create`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Dishes</h1>

        {/* Create Button */}
        <div className="mb-6">
          <button
            onClick={handleCreate}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            Create New Dish
          </button>
        </div>

        {/* Categories */}
        {Object.keys(categories).map((category) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories[category].map((dish) => (
                <div
                  key={dish.id}
                  className="bg-gray-50 border rounded-lg overflow-hidden shadow hover:shadow-lg"
                >
                  <img
                    src={dish.img}
                    alt={dish.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {dish.title}
                    </h3>
                    <p className="text-sm text-gray-600">{dish.description}</p>
                    <p className="text-sm font-medium text-gray-800">
                      {dish.price}
                    </p>
                  </div>
                  <div className="flex justify-between px-4 pb-4">
                    <button
                      onClick={() => handleEdit(category, dish.id)}
                      className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manage;
