"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  words: string[];
  className?: string;
  highlightColor?: string;
}

export default function TypingText({ words, className = "", highlightColor = "#16A34A" }: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === words.length) return;
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1200);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words]);

  useEffect(() => {
    const blinkTimeout = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span style={{ color: highlightColor }}>{words[index].substring(0, subIndex)}</span>
      <span className={blink ? "opacity-100" : "opacity-0"}>|</span>
    </motion.span>
  );
}
