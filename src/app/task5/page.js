"use client";
import "./page.css";
import { useState } from "react";

const Page = () => {
  function findPairs(arr, targetValue) {
    const result = [];
    const seen = new Set();

    for (let num of arr) {
      const complement = targetValue - num;

      if (seen.has(complement) && !seen.has(num)) {
        result.push([num, complement]);
        seen.add(num);
      }

      seen.add(num);
    }

    return result;
  }
  
  const [inputNumbers, setInputNumbers] = useState("");
  const [targetValue, setTargetValue] = useState("");

  const pairs = findPairs(
    inputNumbers.split(",").map(Number),
    Number(targetValue)
  );

  return (
    <div className="container">
      <input
        className="input"
        placeholder="Input numbers"
        onChange={(e) => setInputNumbers(e.target.value)}
      />
      <br />
      {inputNumbers.split(",").length < 10 && (
        <p>Enter at least 10 numbers to find pairs.</p>
      )}

      {inputNumbers.split(",").length >= 10 && (
        <div>
          <label htmlFor="targetInput">Target Value:</label>
          <input
            type="number"
            id="targetInput"
            value={targetValue}
            onChange={(e) => setTargetValue(e.target.value)}
          />
        </div>
      )}

      {inputNumbers.split(",").length >= 10 && pairs.length > 0 && (
        <div>
          <p>Pairs:</p>
          <ul>
            {pairs.map((pair, index) => (
              <li key={index}>{`[${pair.join(", ")}]`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Page;
