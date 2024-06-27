import React from "react";

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-green-500 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-4">Why Choose Us?</h1>
        <p className="text-xl text-white">Discover the reasons why Learnify is the best choice for your learning journey.</p>
      </header>
      <main className="w-full max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Advantages</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>High-Quality Content</li>
            <li>Experienced Instructors</li>
            <li>Flexible Learning Options</li>
            <li>Community Support</li>
          </ul>
        </div>
      </main>
      <footer className="mt-8 text-white">
        <p>&copy; 2023 Learnify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WhyUs;