import { SITE } from "../data/site.config";
import { SOCIALS } from "../data/socials";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-zinc-900 text-zinc-200 mt-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <div className="text-sm">&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
        <div className="flex gap-4">
          {SOCIALS.map((s) => {
            const Icon = s.icon === "FaGithub" ? FaGithub : s.icon === "FaLinkedin" ? FaLinkedin : FaTwitter;
            return (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-400 transition-colors">
                <Icon />
              </a>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          <Link href="#about" className="hover:text-green-400">About</Link>
          <Link href="#skills" className="hover:text-green-400">Skills</Link>
          <Link href="#projects" className="hover:text-green-400">Projects</Link>
          <Link href="#experience" className="hover:text-green-400">Experience</Link>
          <Link href="#contact" className="hover:text-green-400">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
