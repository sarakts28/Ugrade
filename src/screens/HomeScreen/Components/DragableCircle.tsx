import type React from "react";
import { useState, useRef, useEffect } from "react";

interface OvalItem {
  id: string;
  label: string;
  x: number;
  y: number;
  isInContainer: boolean;
}

export default function DraggableOvals() {
  const [ovals, setOvals] = useState<OvalItem[]>([
    { id: "business", label: "Business", x: 180, y: 280, isInContainer: false },
    { id: "data", label: "Data", x: 80, y: 270, isInContainer: false },
    { id: "growth", label: "Growth", x: 320, y: 260, isInContainer: false },
    { id: "product", label: "Product", x: 240, y: 380, isInContainer: false },
    { id: "tech", label: "Tech", x: 120, y: 380, isInContainer: false },
  ]);

  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({
    width: 604,
    height: 755,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  // Update container size on resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    const oval = ovals.find((o) => o.id === id);
    if (!oval) return;

    setDraggedItem(id);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    // Prevent text selection during drag
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedItem || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - containerRect.left - dragOffset.x;
    const newY = e.clientY - containerRect.top - dragOffset.y;

    // Constrain to container bounds with oval dimensions (approx 80x40)
    const ovalWidth = 80;
    const ovalHeight = 40;
    const maxX = containerRect.width - ovalWidth;
    const maxY = containerRect.height - ovalHeight;

    const constrainedX = Math.max(0, Math.min(newX, maxX));
    const constrainedY = Math.max(0, Math.min(newY, maxY));

    setOvals((prev) =>
      prev.map((oval) =>
        oval.id === draggedItem
          ? { ...oval, x: constrainedX, y: constrainedY }
          : oval
      )
    );
  };

  const handleMouseUp = () => {
    if (!draggedItem || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const oval = ovals.find((o) => o.id === draggedItem);
    if (!oval) return;

    // Responsive drop zone - positioned under the text
    const dropZone = {
      x: containerRect.width * 0.1, // 10% from left
      y: containerRect.height * 0.4, // 40% from top (under text)
      width: containerRect.width * 0.8, // 80% of container width
      height: containerRect.height * 0.25, // 25% of container height
    };

    const isInDropZone =
      oval.x >= dropZone.x &&
      oval.x <= dropZone.x + dropZone.width &&
      oval.y >= dropZone.y &&
      oval.y <= dropZone.y + dropZone.height;

    setOvals((prev) =>
      prev.map((oval) =>
        oval.id === draggedItem
          ? { ...oval, isInContainer: isInDropZone }
          : oval
      )
    );

    setDraggedItem(null);
  };

  // Calculate responsive positions based on container size
  const getResponsivePosition = (oval: OvalItem) => {
    const originalWidth = 604;
    const originalHeight = 755;

    // Scale positions proportionally to current container size
    const scaleX = containerSize.width / originalWidth;
    const scaleY = containerSize.height / originalHeight;

    return {
      x: oval.x * scaleX,
      y: oval.y * scaleY,
    };
  };

  return (
    <div
      ref={containerRef}
      className="relative rounded-[20px] overflow-hidden w-full max-w-[604px] h-[360px] mt-4 md:mt-0"
      style={{ backgroundColor: "#0A2628" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setDraggedItem(null)}
    >
      {/* Background circles - responsive sizing */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 604 755"
        className="absolute inset-0"
        style={{ opacity: 0.06 }}
        preserveAspectRatio="xMidYMid meet"
      >
        {[620, 570, 520, 470, 420, 370, 320, 270, 220, 170].map((radius) => (
          <circle
            key={radius}
            cx="302"
            cy="377"
            r={radius}
            stroke="white"
            strokeWidth="1.6"
            fill="none"
          />
        ))}
      </svg>

      {/* Header text */}
      <div className="absolute top-8 left-6 right-6">
        <p className="text-white text-lg font-sans text-justify leading-[22px] md:leading-normal">
          From zero to standout - learn what top companies need in product,
          growth, business, tech, data & more. UGRAD gives you the skills,
          guidance, and support to rise
        </p>
      </div>

      {/* Draggable ovals */}
      {ovals.map((oval) => {
        const position = getResponsivePosition(oval);
        return (
          <div
            key={oval.id}
            className={`absolute bg-primary-secondaryGreen text-white px-4 py-2 rounded-full border-2 text-sm font-medium cursor-grab select-none transition-all duration-200 ${
              oval.isInContainer
                ? "bg-white/20 border-white/60 text-white"
                : "bg-transparen hover:border-white/60 hover:text-white"
            } ${
              draggedItem === oval.id ? "cursor-grabbing scale-105 z-10" : ""
            }`}
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              minWidth: "fit-content",
              transform: draggedItem === oval.id ? "scale(1.05)" : "none",
              willChange: "transform", // Improve animation performance
            }}
            onMouseDown={(e) => handleMouseDown(e, oval.id)}
          >
            {oval.label}
          </div>
        );
      })}
    </div>
  );
}
