import { useState, useEffect } from "react";

export default function Progress({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
