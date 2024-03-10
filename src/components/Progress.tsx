import * as React from "react";
import { ReactNode } from "react";
import { useState,  useEffect } from "react";

import '../progress.css';

interface ProgressBarProps {
  value?: number;
  onComplete?: () => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value = 0, onComplete = () => {} }) => {
  const [per, setPer] = useState<number>(value);

  useEffect(() => {
    setPer(Math.min(100, Math.max(value, 0)));
    if (value >= 100) {
      onComplete();
    }
  }, [value, onComplete]);

  return (
    <div className='progress'>
      <span style={{ color: per > 49 ? "white" : "black" }}>{per}%</span>
      <div style={{ transform: `scaleX(${per / 100})`, transformOrigin: "left" }} />
    </div>
  );
};
