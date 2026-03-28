import SectionWrapper from "../components/SectionWrapper";
import { EXPERIENCE } from "../data/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="py-24 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-green-700 dark:text-green-400">Experience & Timeline</h2>
      <div className="relative border-l-4 border-green-200 dark:border-green-800 ml-4">
        {EXPERIENCE.map((item, idx) => (
          <div key={item.title + idx} className="mb-12 ml-6 relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-zinc-900 shadow-lg" />
            <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow p-6">
              <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-1">{item.title}</h3>
              <div className="text-sm text-zinc-500 mb-2">{item.company} &bull; {item.period}</div>
              <p className="text-zinc-700 dark:text-zinc-200">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
