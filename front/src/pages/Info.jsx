import React from "react";

const Info = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Main Content */}
      <div className="p-8">
        {/* Restaurant Details */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sumoki Yakitori - Bar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Contact Details</h3>
              <p>
                <strong>Phone:</strong> +1(905)944-9556
              </p>
              <p>
                <strong>Email:</strong> sumokicorp@gmail.com
              </p>
              <p>
                <strong>Address:</strong> 9-18 Fred Varley Drive, Unionville,
                Ontario L3R 1S3, Canada
              </p>
            </div>
            {/* Opening Hours */}
            <div className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Business Hours</h3>
              <ul>
                <li>Monday: Closed</li>
                <li>Tuesday - Friday: 05:00 PM - 11:00 PM</li>
                <li>Saturday - Sunday: 12:00 PM - 11:00 PM</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Google Maps Embed */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Find Us Here</h2>
          <div className="bg-white shadow p-4 rounded-lg">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.5567982229386!2d-79.31507412381201!3d43.865014071092794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d5ca01a1ac55%3A0xa9c427c4a189500!2s18%20Fred%20Varley%20Dr%20Unit%209%2C%20Unionville%2C%20ON%20L3R%201S3%2C%20Canada!5e0!3m2!1sen!2sus!4v1732588281674!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Gallery</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <img
              src="https://images.pexels.com/photos/5779238/pexels-photo-5779238.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dish 1"
              className="rounded-lg shadow w-[300px] h-[300px] object-cover"
            />
            <img
              src="https://images.pexels.com/photos/6569037/pexels-photo-6569037.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dish 2"
              className="rounded-lg shadow w-[300px] h-[300px] object-cover"
            />
            <img
              src="https://images.pexels.com/photos/29487601/pexels-photo-29487601/free-photo-of-traditional-japanese-bamboo-water-fountain-feature.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dish 3"
              className="rounded-lg shadow w-[300px] h-[300px] object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Info;
