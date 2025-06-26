"use client"
import { useState } from "react";

type VerticalPosition = 'top' | 'bottom';
type HorizonalDirection = 'left-to-right' | 'right-to-left';
interface AntRowProps {
  position: VerticalPosition;
  direction: HorizonalDirection;
  count: number;
};

const AntsRow = ({ position = "bottom", direction = "right-to-left", count = 5 }: AntRowProps) => {
  const [antClicksCount, setAntClicksCount] = useState<Map<number, number>>(new Map());

  const handleClick = (i: number) => {
    setAntClicksCount(prev => {
      const newMap = new Map(prev);
      const currentClicksCount = newMap.get(i) ?? 1;
      const nextClicksCount = currentClicksCount + 1
      newMap.set(i, nextClicksCount);
      return newMap;
    });
  };

  return (
    <div className={`ant-container ${position}`}>
      {Array.from({ length: count }).map((_, i) => {
          const fontSize = 1 + (antClicksCount.get(i) || 1) * 0.1;
          return (
            <div key={i} className={`ant-emoji ${direction}`} style={{
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${7 + (i % 3)}s`,
              fontSize: `${fontSize}em`,
              transition: 'font-size 0.3s ease',
            }} onClick={() => handleClick(i)}
            >🐜</div>
          )
        }
      )}
    </div>
  );
}

export default AntsRow