export type CybersecurityProject = {
  title: string;
  category: string;
  description: string;
  tools: string[];
  github?: string;
  report?: string;
  demo?: string;
};

export const CYBERSECURITY_PROJECTS: CybersecurityProject[] = [
  {
    title: "Web Application Penetration Testing",
    category: "Web Security",
    description:
      "Executed OWASP-based testing against a sandbox app to identify SQLi, XSS, and authentication weaknesses.",
    tools: ["Burp Suite", "OWASP ZAP", "Postman", "SQLMap"],
    github: "https://github.com/jamiljuma2",
    demo: "https://pentest-lab-client.vercel.app",
  },
  {
    title: "Burpsite- Web Security Testing Tool",
    category: "Web Security",
    description:
      "A comprehensive web application security testing tool that performs automated vulnerability scanning, manual testing, and generates detailed security reports.",
    tools: ["Burp Suite", "Web Scanning", "Vulnerability Detection", "Security Reporting"],
    github: "https://github.com/jamiljuma2",
    demo: "https://burpsite.vercel.app",
  },
  {
    title: "Phishguard",
    category: "Threat Detection",
    description:
      "Detects phishing emails, URLs, and SMS messages to protect users from social engineering attacks.",
    tools: ["Machine Learning", "NLP", "Email Security", "URL Analysis"],
    demo: "https://phishguard-ochre.vercel.app",
  },
];
