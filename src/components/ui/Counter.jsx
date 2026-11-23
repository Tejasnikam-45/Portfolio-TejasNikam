import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({ value, prefix = "", suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 24, stiffness: 90 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => setDisplay(latest));
    return () => unsub();
  }, [spring]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
