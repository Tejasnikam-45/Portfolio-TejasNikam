import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundGlow({ className = "" }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1200], [0, 140]);
  const y2 = useTransform(scrollY, [0, 1200], [0, -180]);
  const y3 = useTransform(scrollY, [0, 1200], [0, 100]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden -z-10 ${className}`}>
      <motion.div style={{ y: y1 }} className="absolute top-[-10%] left-[-10%] w-[32rem] h-[32rem]">
        <div
          className="w-full h-full rounded-full blur-3xl opacity-30 animate-blob"
          style={{ background: "var(--color-accent)" }}
        />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute top-[20%] right-[-10%] w-[28rem] h-[28rem]">
        <div
          className="w-full h-full rounded-full blur-3xl opacity-20 animate-blob"
          style={{ background: "var(--color-accent-2)", animationDelay: "4s" }}
        />
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute bottom-[-15%] left-[20%] w-[26rem] h-[26rem]">
        <div
          className="w-full h-full rounded-full blur-3xl opacity-20 animate-blob"
          style={{ background: "var(--color-accent-3)", animationDelay: "8s" }}
        />
      </motion.div>

      <div className="absolute inset-0 noise-bg opacity-40" />
    </div>
  );
}
