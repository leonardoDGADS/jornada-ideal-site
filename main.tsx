import { useEffect, useRef } from 'react';

export default function BirdFollower() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Calculate angle + 45 degrees offset as per original code
      const angle = Math.atan2(dy, dx) * 180 / Math.PI + 45;
      
      containerRef.current.style.transform = `rotate(${angle}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full flex justify-center items-center transition-transform duration-150 ease-out drop-shadow-[0_15px_15px_rgba(0,0,0,0.1)]"
      style={{ maxWidth: '300px', aspectRatio: '1/1' }}
    >
      <svg 
        viewBox="0 0 427 350" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto -rotate-45"
      >
        <g className="bird-asa">
          <path d="M129.733 176.733C120.533 186.067 108.667 209.267 105.867 223.4C104.667 229.133 104 234.067 104.4 234.467C105.6 235.667 127.067 232.2 135.6 229.4C140.667 227.667 146.8 224.333 151.467 220.467C158 215.267 159.467 213 162.4 205.133L165.733 195.933L155.867 186.867C150.4 181.8 143.867 175.933 141.2 173.667L136.4 169.8L129.733 176.733Z" fill="#333"/>
        </g>
        <path d="M284.8 19.8C248.133 26.4666 206.667 49.8 179.6 79L170.8 88.6L152.933 87.6666C132 86.4666 125.333 88.0666 116.133 95.8C107.867 102.867 95.0667 121.8 87.2 138.467L80.2667 153.267L89.7333 154.2C95.0667 154.6 107.467 155.4 117.333 155.8L135.333 156.733L142.667 163.667C146.667 167.4 159.333 179.133 170.667 189.667L191.333 208.733L192 231.133C192.4 243.4 193.067 253.8 193.467 254.2C194.4 255.133 221.333 245.8 229.333 241.667C245.733 233.4 249.867 226.333 252.267 201.933C253.6 187.933 254.133 185.667 256.533 184.6C262.933 181.667 282.267 165.933 293.733 154.467C300.4 147.667 309.867 136.733 314.4 130.2C325.2 115.133 336.4 92.2 339.867 78.3333C343.6 63.5333 346.667 30.8666 345.067 24.3333C343.867 19.6666 343.333 19.2666 337.733 18.4666C327.2 17 295.733 17.8 284.8 19.8ZM262.667 93C266.8 95.1333 270.667 99.8 270.667 102.6C270.667 103.533 268.667 105.533 266.4 107C257.6 112.333 243.467 109.133 239.733 100.867C238.267 97.6666 238.533 97 241.733 94.2C246.133 90.3333 256.533 89.8 262.667 93Z" fill="black"/>
      </svg>
    </div>
  );
}
