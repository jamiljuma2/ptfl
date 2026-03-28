import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function GradientBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-green-500/30 via-transparent to-green-900/40 blur-2xl animate-gradient-move"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
