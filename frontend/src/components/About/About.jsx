import React from 'react'

const About = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 flex items-center justify-center px-4">
      <div className="backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.3)] rounded-xl max-w-3xl w-full p-10 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our Student Performance Prediction platform leverages machine learning to analyze key academic and personal indicators 
          that influence student success. We aim to provide educational institutions with data-driven insights 
          to better support students, identify potential challenges early, and promote academic excellence. 
          Accuracy, accessibility, and responsible AI usage are at the core of what we do.
        </p>
      </div>
    </div>
  );
};

export default About;
