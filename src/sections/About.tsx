import SectionWrapper from "../components/SectionWrapper";
import { ABOUT } from "../data/about";
import { SITE } from "../data/site.config";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <SectionWrapper id="about" className="py-16 sm:py-24 bg-white/80 dark:bg-zinc-900/80 backdrop-blur rounded-3xl shadow-lg max-w-4xl mx-auto mt-12">
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 px-4 sm:px-6">
        <div className="flex-shrink-0">
          <Image
            src={ABOUT.profile}
            alt={SITE.name + " profile"}
            width={180}
            height={180}
            className="rounded-full shadow-lg object-cover object-top border-4 border-green-500 w-32 h-32 sm:w-44 sm:h-44"
            priority
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-400">About Me</h2>
          <p className="text-lg mb-4 text-zinc-700 dark:text-zinc-200">{ABOUT.summary}</p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
            {ABOUT.skills.map((skill) => (
              <span key={skill} className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium shadow">
                {skill}
              </span>
            ))}
          </div>
          <Link href="/cv.pdf" download className="inline-block mt-2 px-6 py-2 rounded-full bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-all">
            Download CV
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
