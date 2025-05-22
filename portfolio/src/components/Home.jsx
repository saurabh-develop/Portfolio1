import React from "react";

const Home = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen px-10 py-12 gap-30"
      id="home"
    >
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4 leading-snug">
          Hi!
          <br />
          I'm <span className="text-blue-600">Saurabh</span>
          <br />
          A Frontend Developer
          <br />
          <span className="text-xl text-gray-600 dark:text-gray-400">
            Welcome to my portfolio!
          </span>
        </h2>
        <p className="text-gray-500 dark:text-gray-300 text-lg">
          I create beautiful and functional web applications.
        </p>
        <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
          <a
            href="https://leetcode.com/u/SaurabhKhare/"
            className="flex items-center hover:text-pink-400 hover:drop-shadow-[0_0_6px_pink] transition-all duration-300"
          >
            <img src="leetcode.png" alt="LeetCode" className="w-9 h-9" />
          </a>
          <a
            href="https://www.linkedin.com/in/saurabh-khare5025/"
            className="flex items-center hover:text-pink-400 hover:drop-shadow-[0_0_6px_pink] transition-all duration-300"
          >
            <img src="linkedin.png" alt="LinkedIn" className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/saurabh-develop"
            className="flex items-center hover:text-pink-400 hover:drop-shadow-[0_0_6px_pink] transition-all duration-300"
          >
            <img src="github.png" alt="GitHub" className="w-10 h-10" />
          </a>
        </div>
      </div>

      <div className="md:w-1/2 w-full px-2 flex justify-center">
        <img src="profileImage.png" />
      </div>
    </div>
  );
};
 
export default Home;
