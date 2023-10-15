"use client";
import { useState } from "react";
import "./page.css"

export default function page()  {
    const [backgroundColor, setBackgroundColor] = useState("green");
  
    const handleMouseMove = (event) => {
      const green = Math.floor((event.clientX / window.innerWidth) * 256);
      setBackgroundColor(`rgb(0, ${green}, 0)`);
    };
  return (
    <div
        style={{ backgroundColor }}
        className="container"
        onMouseMove={handleMouseMove}
      >
      </div>
  )
}


