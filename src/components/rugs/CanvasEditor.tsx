"use client";
import React, { useRef, useState } from "react";

const CanvasEditor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState("brush");
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [redoStack, setRedoStack] = useState<ImageData[]>([]);
  
  const saveState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    setHistory([...history, ctx.getImageData(0, 0, canvas.width, canvas.height)]);
    setRedoStack([]);
  };

  const undo = () => {
    if (history.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const prevState = history.pop();
    setRedoStack([...redoStack, ctx.getImageData(0, 0, canvas.width, canvas.height)]);
    setHistory([...history]);
    if (prevState) ctx.putImageData(prevState, 0, 0);
  };

  const redo = () => {
    if (redoStack.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const nextState = redoStack.pop();
    setHistory([...history, ctx.getImageData(0, 0, canvas.width, canvas.height)]);
    setRedoStack([...redoStack]);
    if (nextState) ctx.putImageData(nextState, 0, 0);
  };

  const startDrawing = (e: React.MouseEvent) => {
    saveState();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;
    setDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setStartPos({ x: offsetX, y: offsetY });
    if (tool === "brush" || tool === "eraser") {
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    }
  };

  const draw = (e: React.MouseEvent) => {
    if (!drawing || !ctxRef.current) return;
    const ctx = ctxRef.current;
    const { offsetX, offsetY } = e.nativeEvent;
    ctx.strokeStyle = tool === "eraser" ? "#FFFFFF" : color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";

    if (tool === "brush" || tool === "eraser") {
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    }
  };

  const stopDrawing = (e: React.MouseEvent) => {
    if (!drawing || !ctxRef.current || !startPos) return;
    setDrawing(false);
    const ctx = ctxRef.current;
    const { offsetX, offsetY } = e.nativeEvent;

    if (tool === "rectangle") {
      ctx.strokeRect(startPos.x, startPos.y, offsetX - startPos.x, offsetY - startPos.y);
    }

    if (tool === "circle") {
      const radius = Math.sqrt(Math.pow(offsetX - startPos.x, 2) + Math.pow(offsetY - startPos.y, 2));
      ctx.beginPath();
      ctx.arc(startPos.x, startPos.y, radius, 0, Math.PI * 2);
      ctx.stroke();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-4 p-2 border rounded-lg shadow-md bg-gray-100">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 cursor-pointer"
        />
        <input
          type="range"
          min="1"
          max="20"
          value={brushSize}
          onChange={(e) => setBrushSize(Number(e.target.value))}
          className="w-24"
        />
        <select
          value={tool}
          onChange={(e) => setTool(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="brush">Brush</option>
          <option value="rectangle">Rectangle</option>
          <option value="circle">Circle</option>
          <option value="eraser">Eraser</option>
        </select>
        <button onClick={undo} className="p-2 border rounded bg-blue-500 text-white">Undo</button>
        <button onClick={redo} className="p-2 border rounded bg-green-500 text-white">Redo</button>
      </div>
      <canvas
        ref={canvasRef}
        width={500}
        height={400}
        className="border shadow-md bg-white"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      ></canvas>
    </div>
  );
};

export default CanvasEditor;