import SectionWrapper from "../components/SectionWrapper";
import { SERVICES } from "../data/services";
import { GlobeAltIcon, SparklesIcon, CodeBracketIcon, LightBulbIcon } from "@heroicons/react/24/outline";

const ICONS: Record<string, JSX.Element> = {
  GlobeAltIcon: <GlobeAltIcon className="w-8 h-8 text-green-600" />,
  SparklesIcon: <SparklesIcon className="w-8 h-8 text-green-600" />,
  CodeBracketIcon: <CodeBracketIcon className="w-8 h-8 text-green-600" />,
  LightBulbIcon: <LightBulbIcon className="w-8 h-8 text-green-600" />,
};

export default function Services() {
  return (
    <SectionWrapper id="services" className="py-24 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-green-700 dark:text-green-400">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {SERVICES.map((service) => (
          <div key={service.title} className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-lg p-8 group hover:shadow-2xl transition-shadow">
            <div className="mb-4">{ICONS[service.icon]}</div>
            <div className="font-bold text-lg mb-2 text-green-700 dark:text-green-400">{service.title}</div>
            <div className="text-zinc-700 dark:text-zinc-200 text-center">{service.description}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
