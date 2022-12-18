import React from "react";
import "./Marquee.css";

function Marquee({ text, length }) {
  return text?.length > length ? (
    <div className="scroll-container">
      <div className="scroll-text">
        {text} <span> &#160;|| &#160;</span>
      </div>
      <div className="scroll-text-2">
        {text} <span> &#160;|| &#160;</span>
      </div>
    </div>
  ) : (
    <div>{text}</div>
  );
}

export default Marquee;
