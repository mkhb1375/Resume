import { useEffect, useState } from "react";

interface ProgressBarProps {
  duration: number;
  selectedIdx: number;
  idx: number;
}
export default function ProgressBar({
  duration,
  selectedIdx,
  idx,
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    let startTime: number | undefined;
    let elapsedTime: number = 0;

    if (selectedIdx === idx) {
      startTime = Date.now();
      interval = setInterval(() => {
        elapsedTime = Date.now() - (startTime || 0);
        setProgress((elapsedTime / duration) * 100);

        if (elapsedTime >= duration) {
          clearInterval(interval);
        }
      }, 50);
    }
    return () => {
      clearInterval(interval);
    };
  }, [selectedIdx, idx, duration]);

  useEffect(() => {
    setProgress(0);
  }, [selectedIdx]);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
