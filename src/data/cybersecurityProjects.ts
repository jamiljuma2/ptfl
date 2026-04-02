export type CybersecurityProject = {
  title: string;
  category: string;
  description: string;
  tools: string[];
  github?: string;
  report?: string;
};

export const CYBERSECURITY_PROJECTS: CybersecurityProject[] = [
  {
    title: "Network Vulnerability Assessment Lab",
    category: "Vulnerability Assessment",
    description:
      "Performed a controlled internal network scan, prioritized findings by CVSS score, and documented remediation steps.",
    tools: ["Nmap", "Nessus", "OpenVAS", "Wireshark"],
    github: "https://github.com/jamiljuma2",
  },
  {
    title: "Web Application Penetration Testing",
    category: "Web Security",
    description:
      "Executed OWASP-based testing against a sandbox app to identify SQLi, XSS, and authentication weaknesses.",
    tools: ["Burp Suite", "OWASP ZAP", "Postman", "SQLMap"],
    github: "https://github.com/jamiljuma2",
  },
  {
    title: "SIEM Detection and Incident Triage",
    category: "Blue Team",
    description:
      "Built detection rules, investigated suspicious events, and produced incident timelines with containment recommendations.",
    tools: ["Wazuh", "Elastic SIEM", "Sysmon", "Kibana"],
    github: "https://github.com/jamiljuma2",
  },
];
