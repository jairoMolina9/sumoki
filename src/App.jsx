import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import cardData from "./data.json"; // Import the JSON data

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />

      {/* Main content container */}
      <div className="w-full max-w-screen-lg px-4 mt-24">
        {/* Loop through categories */}
        {Object.entries(cardData).map(([category, items]) => (
          <div key={category} className="mb-12">
            {/* Display category title */}
            <h1 className="text-2xl font-bold mb-6 ">{category}</h1>

            {/* Grid container for cards */}
            {/* Grid container for cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
              {items.map((item) => (
                <Card
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
