import React from "react";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-2 gap-2 md:gap-4 p-2">
        <div>
          <img
            className="h-auto w-full rounded-lg"
            src="https://images.pexels.com/photos/3421920/pexels-photo-3421920.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery image"
          />
        </div>
        <div>
          <img
            className="h-auto w-full rounded-lg"
            src="https://images.pexels.com/photos/7508611/pexels-photo-7508611.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery image"
          />
        </div>
        <div>
          <img
            className="h-auto w-full rounded-lg"
            src="https://images.pexels.com/photos/941193/pexels-photo-941193.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery image"
          />
        </div>
        <div>
          <img
            className="h-auto w-full rounded-lg"
            src="https://images.pexels.com/photos/20344623/pexels-photo-20344623/free-photo-of-top-view-of-soup.png?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
