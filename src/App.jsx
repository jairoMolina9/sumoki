import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Yogurt from "./assets/yogurt.jpeg";
import Pancake from "./assets/pancake.jpeg";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <div className="w-full max-w-screen-lg md:w-11/12 lg:w-3/4 xl:w-2/3 px-4">
        <Navbar />

        {/* Responsive grid for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          <Card img={Yogurt} />
          <Card img={Pancake} />
          <Card img={Yogurt} />
          <Card img={Pancake} />
          {/* Add more <Card /> components as needed */}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
