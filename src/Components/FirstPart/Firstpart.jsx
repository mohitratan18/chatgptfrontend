import React from "react";
import "../FirstPart/firstpart.css";
import logo from "../assets/ChatGPT-Logo.jpg";
import linkedin from "../assets/linkedin.png";
const Firstpart = () => {
  const handleclick = () => {
    console.log("clicked");
    window.location.reload();
  };
  return (
    <div className="container">
      <div className="logo-container">
        <img className="logo" src={logo} alt="" />
        <div className="heading">CHATGPT</div>
      </div>
      <div className="newchat-container">
        <div className="newchat-box" onClick={handleclick}>
          New Chat
        </div>
        <div className="newchat-box">
          <a href="https://openai.com/blog/introducing-chatgpt-and-whisper-apis"
          style={{
            "textDecoration": "none",
            "color":"white"
            
          }}>
            ChatGPT API
          </a>
        </div>
      </div>
      <div className="items">
        <div className="footer-1">Made by Mohit</div>
        <div className="footer-2">
          <img src={linkedin} alt="" className="socialmedia" />
        </div>
      </div>
    </div>
  );
};

export default Firstpart;
