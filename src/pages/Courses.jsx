import React from "react";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-red-500 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-4">Our Courses</h1>
        <p className="text-xl text-white">Explore a variety of courses designed to help you achieve your learning goals.</p>
      </header>
      <main className="w-full max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Featured Courses</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Course 1: Introduction to Programming</li>
            <li>Course 2: Advanced Web Development</li>
            <li>Course 3: Data Science and Machine Learning</li>
            <li>Course 4: Digital Marketing Strategies</li>
          </ul>
        </div>
      </main>
      <footer className="mt-8 text-white">
        <p>&copy; 2023 Learnify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Courses;