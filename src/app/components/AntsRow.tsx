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
  const [touchedAnts, setTouchedAnts] = useState<Set<number>>(new Set());

  const handleClick = (i: number) => {
    setTouchedAnts(prev => {
      const newSet = new Set(prev);
      newSet.add(i);
      return newSet;
    });

    // Remover la clase de salto después de la animación
    setTimeout(() => {
      setTouchedAnts(prev => {
        const newSet = new Set(prev);
        newSet.delete(i);
        return newSet;
      });
    }, 1000); // Duración de la animación
  };

  return (
    <div className={`ant-container ${position}`}>
      {Array.from({ length: count }).map((_, i) => {
          const wasTouched = touchedAnts.has(i);
          const onTouchClass = wasTouched ? 'on-touch' : '';
          return (
            <div
              key={i}
              className={`ant-emoji-wrapper ${direction}`}
              style={{
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${7 + (i % 3)}s`,
              }}
            >
              <span
                className={`ant-emoji ${onTouchClass}`}
                onClick={() => handleClick(i)}
              >🐜</span>
            </div>
          )
        }
      )}
    </div>
  );
}

export default AntsRow