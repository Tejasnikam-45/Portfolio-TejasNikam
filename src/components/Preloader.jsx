import { AnimatePresence, motion } from "framer-motion";

export default function Preloader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "var(--color-bg)" }}
        >
          <motion.div className="relative flex flex-col items-center gap-4">
            <motion.span
              initial={{ opacity: 0, scale: 0.6, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-[var(--font-display)] text-5xl sm:text-6xl font-bold text-gradient"
            >
              TN
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="h-[2px] w-24 origin-left"
              style={{ background: "linear-gradient(90deg, var(--color-accent-2), var(--color-accent))" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
