"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible ? (
    <button
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-400 animate-bounce"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  ) : null;
}
