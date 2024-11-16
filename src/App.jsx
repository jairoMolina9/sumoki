import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Yogurt from "./assets/yogurt.jpeg";
import Pancake from "./assets/pancake.jpeg";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />

      {/* Main content container with additional top margin */}
      <div className="w-full max-w-screen-lg px-4 mt-24 flex justify-center">
        {/* Centered grid container */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card img={Yogurt} />
          <Card img={Pancake} />
          <Card img={Yogurt} />
          <Card img={Pancake} />
          <Card img={Yogurt} />
          <Card img={Pancake} />
          <Card img={Yogurt} />
          <Card img={Pancake} />
          <Card img={Yogurt} />
          <Card img={Pancake} />
          <Card img={Yogurt} />
          <Card img={Pancake} />
          {/* Add more <Card /> components as needed */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
