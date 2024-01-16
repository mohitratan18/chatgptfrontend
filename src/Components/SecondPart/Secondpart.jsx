import { React, useState } from "react";
import "../SecondPart/Secondpart.css";
import send from "../assets/send.png";
import ailogo from "../assets/ChatGPT-Logo.jpg";
import humanlogo from "../assets/human.jpg";
const Secondpart = () => {
  const url = "https://chatgpt-backend-jbbu.onrender.com/answer";
  const [message, setmessage] = useState("");
  const [chat, setchat] = useState([]);
  const handlechange = (e) => {
    setmessage(e.target.value);
  };
  const handleclick = async (e) => {
    e.preventDefault()
    try {
      setchat((prev) => {
        return [
          ...prev,
          {
            message: message,
            flag: true,
          },
        ];
      });
      var NewMsg = message;
      setmessage("");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: NewMsg,
        }),
      });
      // console.log(await response.json());
      const msg = await response.json();
      console.log(msg);

      setchat((prev) => {
        return [
          ...prev,
          {
            message: msg.message,
            flag: false,
          },
        ];
      });
    } catch (error) {}
  };
  return (
    <div className="p2-main">
      <div className="p2-container">
        <div className="p2-messages-box">
          {chat.map((chat) => {
            return (
              <div className={!chat.flag ? "p2-chatgpt" : "p2-ourmessage"}>
                <img
                  className="p2-logo"
                  src={!chat.flag ? ailogo : humanlogo}
                  alt=""
                />
                <span>{chat.message}</span>
              </div>
            );
          })}
        </div>
          <form className="p2-chatbox-box" onSubmit={handleclick}>
            <input
              type="text"
              className="p2-chatbox"
              placeholder="Message.."
              onChange={handlechange}
              value={message}
            />
            <button type="submit" className="p2-btn" >
              <img src={send} className="p2-sendbtn" alt="" />
            </button>
          </form>
      </div>
    </div>
  );
};

export default Secondpart;
