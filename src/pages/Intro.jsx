import React from "react";

const Intro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-4">Introduction to Learnify</h1>
        <p className="text-xl text-white">Discover the platform that transforms learning into an engaging experience.</p>
      </header>
      <main className="w-full max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">What is Learnify?</h2>
          <p className="text-lg mb-4">Learnify is an innovative platform designed to make learning interactive and fun. Our courses are crafted by experts and are tailored to meet the needs of learners of all levels.</p>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">Our mission is to provide high-quality education accessible to everyone, everywhere. Join us on this journey to knowledge and personal growth.</p>
        </div>
      </main>
      <footer className="mt-8 text-white">
        <p>&copy; 2023 Learnify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Intro;