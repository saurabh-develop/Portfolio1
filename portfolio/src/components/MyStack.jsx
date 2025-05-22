import React from "react";

const stack = [
  { name: "HTML", logo: "html.svg" },
  { name: "CSS", logo: "css3.svg" },
  { name: "JavaScript", logo: "js.gif" },
  { name: "TypeScript", logo: "ts.svg" },
  { name: "ReactJS", logo: "react.gif" },
  { name: "Tailwind CSS", logo: "tailwind.png" },
  { name: "NodeJS", logo: "node.svg" },
  { name: "ExpressJS", logo: "express.png" },
  { name: "MongoDB", logo: "mongo.png" },
  { name: "Git", logo: "git.png" },
  { name: "GitHub", logo: "github.png" },
  { name: "Postman", logo: "postman.png" },
  { name: "Java", logo: "java.gif" },
  { name: "Linux", logo: "linux.gif" },
];

const TechStack = () => {
  return (
    <section
      className="w-full text-white flex flex-col justify-center items-center px-4 mb-40 scroll-mt-28 mb-30"
      id="stack"
    >
      {/* Header */}
      <div className="text-center mb-16 z-10">
        <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">
          I constantly try to improve
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
          My Tech Stack
        </h2>
      </div>

      {/* Tech Grid */}
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl z-10">
        {stack.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-4 py-2 rounded-full bg-zinc-900 text-lg font-medium border border-zinc-700 hover:scale-105 hover:border-cyan-400 transition-all duration-300 shadow-sm"
          >
            <img src={item.logo} alt={item.name} className="w-6 h-6" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Optional glowing background */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500 blur-[120px] opacity-20 rounded-full top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
    </section>
  );
};

export default TechStack;
