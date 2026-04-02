
"use client";
import SectionWrapper from "../components/SectionWrapper";
import { PROJECTS } from "../data/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="py-16 sm:py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-green-700 dark:text-green-400">Projects Portfolio</h2>
      <div className="grid gap-5 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            className="bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-shadow"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-4 sm:p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-green-700 dark:text-green-400">{project.title}</h3>
              <p className="text-zinc-700 dark:text-zinc-200 mb-3 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech: string) => (
                  <span key={tech} className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-auto">
                <Link href={project.demo} target="_blank" className="text-green-600 hover:underline font-semibold">Live Demo</Link>
                <Link href={project.github} target="_blank" className="text-zinc-700 dark:text-zinc-200 hover:underline font-semibold">GitHub</Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
