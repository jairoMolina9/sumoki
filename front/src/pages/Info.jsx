import React from "react";

const Info = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Main Content */}
      <div className="p-8">
        {/* Restaurant Details */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Restaurant Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Contact Details</h3>
              <p>
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p>
                <strong>Email:</strong> contact@alwok.com
              </p>
              <p>
                <strong>Address:</strong> 123 Foodie Lane, Culinary City, FL
              </p>
            </div>
            {/* Opening Hours */}
            <div className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Opening Hours</h3>
              <ul>
                <li>Monday - Friday: 10:00 AM - 9:00 PM</li>
                <li>Saturday: 11:00 AM - 10:00 PM</li>
                <li>Sunday: 11:00 AM - 8:00 PM</li>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093623!2d-122.41941608468104!3d37.77492957975965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ca39d9fd%3A0xdbff5bfb30f36d4c!2sAlWok!5e0!3m2!1sen!2sus!4v1691186353785!5m2!1sen!2sus"
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
