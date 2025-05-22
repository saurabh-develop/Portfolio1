import React from "react";

const About = () => {
  return (
    <section className="text-white min-h-screen px-6 md:px-20 py-20" id="about">
      <div className="max-w-6xl mx-auto space-y-16">
        <h1 className="text-4xl md:text-6xl font-light leading-tight md:leading-snug tracking-tight">
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </h1>
        <div>
          <p className="text-gray-400 text-sm border-b border-gray-700 pb-2 mb-6">
            This is me.
          </p>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Hi, I'm Saurabh.</h2>
            </div>
            <div className="md:w-1/2 space-y-4 text-gray-300">
              <p>
                I'm a frontend web developer dedicated to turning ideas into
                creative solutions. I specialize in creating seamless and
                intuitive user experiences.
              </p>
              <p>
                My approach focuses on creating scalable, high-performing
                solutions tailored to both user needs and business objectives.
                By prioritizing performance, accessibility, and responsiveness,
                I strive to deliver experiences that not only engage users but
                also drive tangible results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
