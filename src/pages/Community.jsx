import React from "react";

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-blue-500 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-4">Join Our Community</h1>
        <p className="text-xl text-white">Be a part of a vibrant community of learners and educators.</p>
      </header>
      <main className="w-full max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Community Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Networking Opportunities</li>
            <li>Peer Support</li>
            <li>Exclusive Events</li>
            <li>Collaborative Learning</li>
          </ul>
        </div>
      </main>
      <footer className="mt-8 text-white">
        <p>&copy; 2023 Learnify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Community;