import { useState, useEffect } from 'react';

export const progressme = (): { value: number; success: boolean; onComplete: () => void } => {
  const [value, setValue] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);

  const onComplete = () => {
    setSuccess(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((val) => val + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return { value, success, onComplete };
};
