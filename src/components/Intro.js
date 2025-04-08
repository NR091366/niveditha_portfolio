import React from "react";
import "./Intro.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Intro() {
  return (
    <>
      <div class="chat-container">
        <div class="chat-bubble user">Hello!</div>

        <div class="chat-bubble bot delay1">
          Hi there, I'm <strong style ={{fontSize : "20px"}}>Niveditha Prasad R</strong>.
        </div>
        <div class="chat-bubble bot delay2">Nice to meet you!</div>
        <div class="chat-bubble bot delay3">
          May I know what you're good at?
        </div>

        <div class="chat-bubble user delay4">
          I enjoy solving complex problems and building intuitive UIs.
        </div>

        <div class="chat-bubble bot delay5">
          That's awesome! What are your core technical skills?
        </div>

        <div class="chat-bubble user delay6">
          React.js, TypeScript, Node.js, MongoDB, and some AI/ML
          integrations.
        </div>

        <div class="chat-bubble bot delay7">
          Impressive stack! Looks like you're all set to build intelligent and
          scalable applications.
        </div>
      </div>
    </>
  );
}

export default Intro;
