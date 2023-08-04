import { useEffect, useState } from "react";
const Countdown = () => {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return <span className="countdown">{counter}</span>;
};
export default Countdown;
