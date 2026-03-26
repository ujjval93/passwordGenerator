import React from "react";

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1677350838685-025510e78403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is driven by passionate developers who turn ideas into seamless, interactive experiences.
            </h2>
            <p className="mt-6 text-gray-600">
              React development is driven by passionate minds. Developers who
              turn ideas into interactive reality. Every component reflects
              creativity and logic. That’s the power of a React developer.
            </p>
            <p className="mt-4 text-gray-600">
              React is more than code — it’s creativity in action. Built by
              developers who love solving problems. From small components to big
              experiences. They shape the modern web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
