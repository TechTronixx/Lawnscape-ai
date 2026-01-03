import { useState, useRef, useEffect, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
}

export const ComparisonSlider = ({
  beforeImage,
  afterImage,
}: ComparisonSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const clientX =
        "touches" in event ? event.touches[0].clientX : event.clientX;

      const position =
        ((clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.min(100, Math.max(0, position)));
    },
    [isDragging]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-2xl overflow-hidden cursor-crosshair border border-black/5 shadow-2xl select-none bg-black/5"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
      />

      {/* Before image */}
      <div
        className="absolute inset-0 bg-cover bg-center border-r border-white/50"
        style={{
          backgroundImage: `url(${beforeImage})`,
          width: `${sliderPosition}%`,
        }}
      />

      <div className="absolute top-6 left-6 z-20">
        <span className="bg-black/80 backdrop-blur-md text-white px-3 py-1 text-[10px] tracking-widest uppercase font-mono rounded-full">
          Original Condition
        </span>
      </div>
      <div className="absolute top-6 right-6 z-20">
        <span className="bg-white/90 backdrop-blur-md text-black px-3 py-1 text-[10px] tracking-widest uppercase font-mono rounded-full shadow-sm">
          Proposed Design
        </span>
      </div>

      <div
        className="absolute inset-0 z-10 cursor-ew-resize touch-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div
          className="absolute top-0 bottom-0 w-px bg-white/80 shadow-[0_0_20px_rgba(0,0,0,0.2)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform">
            <MoveHorizontal className="w-4 h-4 text-black/80" />
          </div>
        </div>
      </div>
    </div>
  );
};
