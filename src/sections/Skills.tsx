import SectionWrapper from "../components/SectionWrapper";
import { SKILLS } from "../data/skills";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiTailwindcss, SiDjango, SiFramer, SiMongodb, SiPostgresql, SiFigma, SiPython, SiJavascript, SiMysql, SiPostman, SiSupabase, SiFirebase, SiCloudflare 
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import type React from "react";

const ICONS: Record<string, React.ReactElement> = {
  react: <SiReact className="text-sky-500" />,
  nextdotjs: <SiNextdotjs className="text-black dark:text-white" />,
  nodedotjs: <SiNodedotjs className="text-green-700" />,
  typescript: <SiTypescript className="text-blue-600" />,
  javascript: <SiJavascript className="text-yellow-400" />,
  python: <SiPython className="text-blue-400" />,
  tailwindcss: <SiTailwindcss className="text-cyan-400" />,
  django: <SiDjango className="text-green-900" />,
  framer: <SiFramer className="text-pink-500" />,
  mongodb: <SiMongodb className="text-green-600" />,
  postgresql: <SiPostgresql className="text-blue-800" />,
  sql: <FaDatabase className="text-indigo-500" />,
  restapi: <SiPostman className="text-orange-500" />,
  supabase: <SiSupabase className="text-emerald-500" />,
  firebase: <SiFirebase className="text-amber-500" />,
  cloudflare: <SiCloudflare className="text-orange-600" />,
  figma: <SiFigma className="text-pink-400" />,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-16 sm:py-24 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-green-700 dark:text-green-400">Skills & Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-lg p-4 sm:p-6 group transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
              {ICONS[skill.icon]}
            </div>
            <div className="font-semibold text-zinc-800 dark:text-zinc-100 mb-1">{skill.name}</div>
            <div className="w-full bg-green-100 dark:bg-green-900/40 rounded-full h-2 mt-1">
              <div className="bg-green-500 h-2 rounded-full transition-all" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
