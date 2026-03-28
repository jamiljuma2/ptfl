"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

interface AnimatedTextProps {
  text: string;
  highlight?: boolean;
  className?: string;
}

export default function AnimatedText({ text, highlight = false, className = "" }: AnimatedTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={clsx(
        "inline-block font-bold relative",
        highlight && "text-green-600 dark:text-green-400 animate-glow",
        className
      )}
    >
      {text}
      {highlight && (
        <span
          className="absolute inset-0 blur-md opacity-60 pointer-events-none bg-gradient-to-r from-green-400/40 to-green-600/40 rounded-lg animate-gradient-glow"
          aria-hidden="true"
        />
      )}
    </motion.span>
  );
}
