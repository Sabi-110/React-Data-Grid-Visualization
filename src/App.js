import React, { useRef, useEffect } from "react";

const GRID_ROWS = 100;  // number of rows
const GRID_COLS = 100;  // number of columns
const CELL_SIZE = 30;   // size of each cell (px)

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Canvas size
    canvas.width = GRID_COLS * CELL_SIZE;
    canvas.height = GRID_ROWS * CELL_SIZE;

    // Draw grid
    for (let i = 0; i < GRID_ROWS; i++) {
      for (let j = 0; j < GRID_COLS; j++) {
        const x = j * CELL_SIZE;
        const y = i * CELL_SIZE;

        // Alternate cell colors for clarity
        ctx.fillStyle = (i + j) % 2 === 0 ? "#e6f0ff" : "#ffffff";
        ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);

        // Draw borders
        ctx.strokeStyle = "#ccc";
        ctx.strokeRect(x, y, CELL_SIZE, CELL_SIZE);
      }
    }

    // Example dataset rendering
    ctx.fillStyle = "#333";
    ctx.font = "12px Arial";
    ctx.fillText("Hello!", 10, 20);
    ctx.fillText("Grid Visualization", 10, 40);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Data Grid Visualization</h2>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default App;
