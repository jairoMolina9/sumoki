import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../data.json"; // Import your data.json file

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, dishId } = location.state; // Access passed state from Manage component
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    img: "",
  });

  // Fetch the dish data based on category and dishId
  useEffect(() => {
    const categoryData = data[category];
    const dish = categoryData.find((dish) => dish.id === dishId);

    if (dish) {
      setFormData({
        title: dish.title,
        description: dish.description,
        price: dish.price.replace("$", ""), // Remove $ sign if included
        img: dish.img,
      });
    }
  }, [category, dishId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update logic: Send updated data to the server or handle locally
    console.log("Updated Data Submitted:", formData);
    navigate("/manage"); // Redirect back to Manage page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Update Dish</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Dish Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter dish name"
            />
          </div>

          {/* Description Field */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter a description..."
              rows={4}
            />
          </div>

          {/* Price Field */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter dish price"
            />
          </div>

          {/* Image Field */}
          <div>
            <label
              htmlFor="img"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              id="img"
              name="img"
              value={formData.img}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter image URL"
            />
            {formData.img && (
              <img
                src={formData.img}
                alt="Preview"
                className="mt-4 w-full h-40 object-cover rounded-md"
              />
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Update Dish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
