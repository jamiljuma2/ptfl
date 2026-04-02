"use client";
import AnimatedText from "../components/AnimatedText";
import TypingText from "../components/TypingText";
import GradientBackground from "../components/GradientBackground";
import { SITE } from "../data/site.config";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const roles = ["Software Developer", "UI/UX Designer", "Freelancer"];

export default function Hero() {
  return (
    <GradientBackground>
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-20 sm:py-24 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/profile.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I&apos;m <AnimatedText text={SITE.name} highlight className="inline-block" />
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl font-medium mb-6">
            <TypingText words={roles} className="font-mono text-green-600 dark:text-green-400" />
          </div>
          <div className="flex w-full max-w-md gap-2 sm:gap-4 justify-between mx-auto mt-8">
            <Link
              href="#contact"
              className="flex-1 rounded-full px-3 py-2.5 text-sm sm:px-7 sm:py-3 sm:text-base bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-400 text-center whitespace-nowrap"
            >
              Hire Me
            </Link>
            <Link
              href="#projects"
              className="flex-1 rounded-full px-3 py-2.5 text-sm sm:px-7 sm:py-3 sm:text-base bg-white/80 dark:bg-zinc-900/80 text-green-700 dark:text-green-400 font-semibold shadow-lg hover:bg-green-50 dark:hover:bg-zinc-800 transition-all border border-green-200 dark:border-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 text-center whitespace-nowrap"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
        {/* Add animated particles or shapes here if desired */}
      </section>
    </GradientBackground>
  );
}
