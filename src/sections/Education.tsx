import SectionWrapper from "../components/SectionWrapper";

const EDUCATION = [
  {
    degree: "BSc Computer Science",
    institution: "University of Embu",
    period: "2023 - Present",
    description: "Currently pursuing a degree in Computer Science, specializing in software engineering and UI/UX design."
  },
  // Add more education entries here if needed
];

export default function Education() {
  return (
    <SectionWrapper id="education" className="py-24 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-green-700 dark:text-green-400">Education</h2>
      <div className="relative border-l-4 border-green-200 dark:border-green-800 ml-3 sm:ml-4">
        {EDUCATION.map((item, idx) => (
          <div key={item.degree + idx} className="mb-12 ml-4 sm:ml-6 relative">
            <div className="absolute -left-5 sm:-left-6 top-1 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-zinc-900 shadow-lg" />
            <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow p-6">
              <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-1">{item.degree}</h3>
              <div className="text-sm text-zinc-500 mb-2">{item.institution} &bull; {item.period}</div>
              <p className="text-zinc-700 dark:text-zinc-200">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
