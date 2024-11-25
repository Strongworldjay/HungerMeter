import { useState } from "react";
import "./App.css";

function App() {
  const [percentage, setPercentage] = useState(50); // Default tracker percentage

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value >= 0 && value <= 100) {
      setPercentage(value);
    }
  };

  const handleChangePercentage = (value) => {
    setPercentage((prev) => {
      const newPercentage = prev + value;
      return Math.max(0, Math.min(100, newPercentage)); // Clamp between 0 and 100
    });
  };

  const getFillColor = () => {
    if (percentage === 100) return ""; // No color needed if showing an image
    if (percentage <= 20) return "red";
    if (percentage <= 50) return "yellow";
    if (percentage <= 70) return "yellowgreen";
    if (percentage <= 85) return "darkgreen";
    return "lime"; // Bright green for 86-99
  };

  return (
    <div className="app-container">
      <h1>Hunger Meter</h1>
      <div className="tracker-container">
        {percentage === 100 ? (
          <img src="/smiley.png" alt="Smiley" className="tracker-smiley" />
        ) : (
          <div className="tracker-bar">
            <div
              className="tracker-fill"
              style={{
                width: `${percentage}%`,
                backgroundColor: getFillColor(),
              }}
            ></div>
          </div>
        )}
        <p className="tracker-label">{percentage}% Full</p>
        <input
          type="number"
          value={percentage}
          onChange={handleInputChange}
          min="0"
          max="100"
          className="tracker-input"
          placeholder="Enter percentage (0-100)"
        />
        <div className="tracker-buttons">
          {/* Positive Buttons */}
          <div className="positive-buttons">
            <button onClick={() => handleChangePercentage(1)}>Tiny (+1%)</button>
            <button onClick={() => handleChangePercentage(3)}>Small (+3%)</button>
            <button onClick={() => handleChangePercentage(10)}>Medium (+10%)</button>
            <button onClick={() => handleChangePercentage(15)}>Large (+15%)</button>
            <button onClick={() => handleChangePercentage(25)}>Huge (+25%)</button>
            <button onClick={() => handleChangePercentage(90)}>Gargantuan (+90%)</button>
          </div>
          {/* Negative Buttons */}
          <div className="negative-buttons">
            <button onClick={() => handleChangePercentage(-20)}>Stabilize (-20%)</button>
            <button onClick={() => handleChangePercentage(-2)}>Attack (-2%)</button>
            <button onClick={() => handleChangePercentage(-5)}>Long Rest (-5%)</button>
            <button onClick={() => handleChangePercentage(-10)}>Empower (-10%)</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
