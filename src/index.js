import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

function MessageThread() {
  const [message, setMessage] = useState("");
  const latestMessage = useRef("");

  const showMessage = () => {
    console.log("message", message);
    alert("You said: " + latestMessage.current);
  };

  const handleSendClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    latestMessage.current = e.target.value;
  };

  return (
    <>
      <input value={message} onChange={handleMessageChange} />
      <button onClick={handleSendClick}>Send</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MessageThread />, rootElement);
