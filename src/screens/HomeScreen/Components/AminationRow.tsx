import { useEffect, useRef, type ReactNode } from "react";

interface RunningRowProps {
  children: ReactNode;
  speed?: "slow" | "medium" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

const RunningRow = ({
  children,
  speed = "medium",
  direction = "left",
  pauseOnHover = false,
  className = "",
}: RunningRowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const content = contentRef.current;
    const contentWidth = content.scrollWidth;

    // Duplicate content for seamless looping
    content.innerHTML += content.innerHTML;

    const speedValues = {
      slow: 40,
      medium: 60,
      fast: 80,
    };

    let animationFrameId: number;
    let position = 0;

    const animate = () => {
      position += (direction === "left" ? -1 : 1) * (speedValues[speed] / 60);

      if (direction === "left" && position <= -contentWidth / 2) {
        position = 0;
      } else if (direction === "right" && position >= 0) {
        position = -contentWidth / 2;
      }

      content.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, direction]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
    >
      <div
        ref={contentRef}
        className={`flex items-center whitespace-nowrap ${
          pauseOnHover ? "hover:animation-pause" : ""
        }`}
      >
        {children}
        {/* Invisible duplicate for spacing */}
        <div className="opacity-0">{children}</div>
      </div>
    </div>
  );
};

export default RunningRow;
