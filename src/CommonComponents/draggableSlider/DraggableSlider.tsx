// components/DraggableSlider.tsx
import { useRef, useEffect, useState } from "react";

interface DraggableSliderProps {
  children: React.ReactNode;
  className?: string;
}

export default function DraggableSlider({
  children,
  className = "",
}: DraggableSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [needsScroll, setNeedsScroll] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        const hasOverflow =
          containerRef.current.scrollWidth > containerRef.current.clientWidth;
        setNeedsScroll(hasOverflow);
      }
    };

    checkOverflow();
    const resizeObserver = new ResizeObserver(checkOverflow);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [children]);

  useEffect(() => {
    if (!needsScroll) return;

    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return;
      e.preventDefault();
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      containerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [needsScroll]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current || !needsScroll) return;
    isDragging.current = true;
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      className={`flex overflow-x-hidden ${
        needsScroll ? "cursor-grab" : ""
      } ${className}`}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {children}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
