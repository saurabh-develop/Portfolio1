import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { TracingBeam } from "./components/ui/TracingBeam";
import Navbar from "./components/Navbar";
import MyStack from "./components/MyStack";
import CursorFollower from "./components/CursorFollower";

function App() {
  return (
    <div className="scroll-smooth scroll-pt-20 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <CursorFollower />
      <TracingBeam>
        <Home />
        <About />
        <Project />
        <MyStack />
        <Contact />
      </TracingBeam>
    </div>
  );
}

export default App;
