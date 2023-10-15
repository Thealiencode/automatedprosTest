"use client"

import { useEffect, useRef, useState } from "react";
import "./index.css";

export const CurrentTimeDisplay = () => {
  const [clickCount, setClickCount] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const renderCount = useRef(0);

  console.log("click count: ", clickCount)

  const handleClick = () => {
    setClickCount(clickCount + 1);
    setCurrentTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="container">
      <button className="button" onClick={handleClick}>Show Current Time</button>
      {currentTime && 
      
      <p className="time">{currentTime}</p>
      }
      <p>Component Renders: {renderCount.current}</p>
    </div>
  );
};
