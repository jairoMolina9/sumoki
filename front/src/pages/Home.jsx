import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-0">
        {/* Row 1: Left taller, right shorter */}
        <div>
          <img
            className="h-[400px] w-full object-cover"
            src="https://images.pexels.com/photos/3421920/pexels-photo-3421920.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery image"
          />
        </div>
        <div>
          <img
            className="h-[400px] w-full object-cover"
            src="https://images.pexels.com/photos/7508611/pexels-photo-7508611.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery image"
          />
        </div>

        {/* Row 2: Right taller, left shorter */}
        <div>
          <img
            className="h-[400px] w-full object-cover"
            src="https://images.pexels.com/photos/941193/pexels-photo-941193.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery image"
          />
        </div>
        <div>
          <img
            className="h-[400px] w-full object-cover"
            src="https://images.pexels.com/photos/20344623/pexels-photo-20344623/free-photo-of-top-view-of-soup.png?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery image"
          />
        </div>

        {/* Row 3: Repeat the pattern */}
        <div>
          <img
            className="h-[400px] w-full object-cover"
            src="https://images.pexels.com/photos/5761694/pexels-photo-5761694.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery image"
          />
        </div>
        <div>
          <img
            className="h-[400px] w-full object-cover"
            src="https://images.pexels.com/photos/15641522/pexels-photo-15641522/free-photo-of-people-eating-in-a-small-japanese-restaurant.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
