"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { CYBERSECURITY_PROJECTS } from "../data/cybersecurityProjects";
import { CYBERSECURITY_TOOLS } from "../data/cybersecurityTools";

export default function CyberSecurityProjects() {
  return (
    <SectionWrapper id="cybersecurity" className="py-16 sm:py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-green-700 dark:text-green-400">
        Cybersecurity Projects
      </h2>

      <div className="grid gap-5 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {CYBERSECURITY_PROJECTS.map((project) => (
          <motion.article
            key={project.title}
            className="bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col hover:shadow-2xl transition-shadow"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-300 mb-2">
              {project.category}
            </p>
            <h3 className="text-xl font-bold mb-2 text-green-700 dark:text-green-400">{project.title}</h3>
            <p className="text-zinc-700 dark:text-zinc-200 mb-4 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              {project.github && (
                <Link href={project.github} target="_blank" className="text-zinc-700 dark:text-zinc-200 hover:underline font-semibold">
                  GitHub
                </Link>
              )}
              {project.report && (
                <Link href={project.report} target="_blank" className="text-green-600 hover:underline font-semibold">
                  Case Study
                </Link>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-14 mb-6 text-center text-green-700 dark:text-green-400">
        Cybersecurity Tools
      </h3>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {CYBERSECURITY_TOOLS.map((tool) => (
          <div key={tool.name} className="bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow p-4 sm:p-5">
            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">{tool.name}</h4>
            <p className="text-sm text-zinc-700 dark:text-zinc-200">{tool.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
