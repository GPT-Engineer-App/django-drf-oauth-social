import React from "react";

const Instructors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-500 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-4">Meet Our Instructors</h1>
        <p className="text-xl text-white">Learn from the best in the industry. Our instructors are experts in their fields.</p>
      </header>
      <main className="w-full max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Expert Instructors</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Instructor 1: John Doe - Programming</li>
            <li>Instructor 2: Jane Smith - Web Development</li>
            <li>Instructor 3: Michael Johnson - Data Science</li>
            <li>Instructor 4: Emily Davis - Digital Marketing</li>
          </ul>
        </div>
      </main>
      <footer className="mt-8 text-white">
        <p>&copy; 2023 Learnify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Instructors;