import React, { useState, useEffect } from "react";

const awarenessMessages = [
  {
    title: "Predict Academic Success with AI",
    description:
      "Use our intelligent prediction tool to estimate your academic performance based on key factors like CGPA, department, and more.",
    button: "Start Prediction",
  },
  {
    title: "Boost Your Academic Awareness",
    description:
      "Understanding your academic profile helps you identify areas of improvement and take proactive steps for success.",
    button: "Learn How It Works",
  },
  {
    title: "Empowering Students with Insights",
    description:
      "We provide data-driven insights to help students, mentors, and institutions support better educational outcomes.",
    button: "Explore Features",
  },
  {
    title: "Secure and Easy-to-Use Tool",
    description:
      "Login or register to access our prediction tool. Your data is secure and the process is fast and simple.",
    button: "Login or Register Now",
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === awarenessMessages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const { title, description, button } = awarenessMessages[currentIndex];

  return (
    <div className="py-30 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 flex flex-col justify-center items-center px-6 transition-all duration-700">
      <div className="backdrop-blur-md rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] max-w-3xl w-full p-10 text-center transition-all duration-700">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-blue-800 mb-8">{description}</p>
        <button className="px-6 py-3 text-blue-800 hover:text-blue-700 text-blue rounded-2xl shadow-md transition">
          {button}
        </button>
      </div>
    </div>
  );
}

export default Home;
