// components/DraggableSlider.tsx
import { useRef, useEffect } from "react";

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

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
      if (containerRef.current) {
        containerRef.current.classList.remove("cursor-grabbing");
      }
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
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    containerRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      className={`overflow-x-auto scrollbar-hide cursor-grab select-none ${className}`}
    >
      {children}
    </div>
  );
}
