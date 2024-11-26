import React from "react";

const Careers = () => {
  return (
    <>
      {/* Team Section */}
      <section className="bg-gray-900 py-8">
        <h1 className="text-white text-3xl font-bold text-center mb-10">
          Work Opportunities
        </h1>
        {/* <div className="container mx-auto flex justify-center space-x-4">
          <div className="rounded-full overflow-hidden w-36 h-36 shadow-lg">
            <img
              src="https://images.pexels.com/photos/26733057/pexels-photo-26733057/free-photo-of-cooks-standing-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team Member 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-full overflow-hidden w-36 h-36 shadow-lg">
            <img
              src="https://images.pexels.com/photos/6549194/pexels-photo-6549194.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team Member 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="rounded-full overflow-hidden w-36 h-36 shadow-lg">
            <img
              src="https://images.pexels.com/photos/15646691/pexels-photo-15646691/free-photo-of-men-cooking-on-restaurant-kitchen.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team Member 3"
              className="object-cover w-full h-full"
            />
          </div>
        </div> */}
        <div className="gallery flex flex-wrap">
          <div className="gallery-item w-full md:w-1/3 p-2">
            <img
              src="https://images.pexels.com/photos/26733057/pexels-photo-26733057/free-photo-of-cooks-standing-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Photo 1"
              className="gallery-image w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="gallery-item w-full md:w-1/3 p-2">
            <img
              src="https://images.pexels.com/photos/6549194/pexels-photo-6549194.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Photo 2"
              className="gallery-image w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="gallery-item w-full md:w-1/3 p-2">
            <img
              src="https://images.pexels.com/photos/15646691/pexels-photo-15646691/free-photo-of-men-cooking-on-restaurant-kitchen.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Photo 3"
              className="gallery-image w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white">We're Hiring!</h2>
          <p className="text-lg mt-4 text-gray-300">
            If you're interested in one of our open positions, start by applying
            here and attaching your resume. You can also send us your resume to:
          </p>
          <a
            href="mailto:careers@example.com"
            className="text-blue-400 font-medium hover:underline mt-2 block"
          >
            sumokicorp@gmail.com
          </a>
        </div>
      </section>
    </>
  );
};

export default Careers;
