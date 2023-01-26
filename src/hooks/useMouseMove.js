import React, { useEffect, useState } from 'react';

export default function useMouseMove() {
  const [isMoving, setIsMoving] = useState(true);

  const handleMouseMove = () => {
    setIsMoving(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMoving(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isMoving]);

  return { handleMouseMove, isMoving };
}
