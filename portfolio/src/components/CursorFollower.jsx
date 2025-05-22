import React, { useEffect, useState } from "react";

function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-50 pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 32}px, ${position.y - 32}px)`,
        }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-30 blur-2xl animate-pulse"></div>
        <div className="absolute top-1 left-1 w-14 h-14 rounded-full bg-cyan-400 opacity-40 blur-xl mix-blend-screen"></div>
      </div>
    </>
  );
}

export default CursorFollower;
