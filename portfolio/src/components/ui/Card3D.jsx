"use client";
import React, { useRef } from "react";

const Card3DLayered = (props) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const content = contentRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y - height / 2) / height) * -15;
    const rotateY = ((x - width / 2) / width) * 15;

    // Rotate the card
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // Parallax text (opposite lighter motion)
    content.style.transform = `translateX(${
      (x - width / 2) / 15
    }px) translateY(${(y - height / 2) / 15}px)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    contentRef.current.style.transform = "translateX(0px) translateY(0px)";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-[300px] h-[400px] transition-transform duration-300 ease-out relative bg-gradient-to-br from-white/10 via-[#8f00ff]/70 to-[#8f00ff] text-white rounded-3xl p-6 shadow-xl border border-white/10 hover:border-white/20"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          ref={contentRef}
          className="relative z-10 text-white transition-transform duration-200 ease-out"
        >
          <h2 className="text-2xl font-bold mb-2">
            {props.heading || "3D Parallax Card"}
          </h2>
          <p className="text-sm text-white/80 line-clamp-3 break-words overflow-hidden">
            {props.description ||
              "This is a 3D parallax card effect. Move your mouse to see the effect! This paragraph is intentionally long to demonstrate how overflow and wrapping is handled."}
          </p>
          <div className="mt-4 w-full h-48 rounded-lg overflow-hidden shadow-lg">
            <img
              src={props.image || "profileImage.png"}
              alt="Card Image"
              className="w-full h-full object-fit"
              style={{ transform: "translateZ(50px)" }}
            />
          </div>
          <div className="mt-4">
            <a
              href={props.link}
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>

        {/* Optional background shapes for depth */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-2xl" />
      </div>
    </div>
  );
};

export default Card3DLayered;
