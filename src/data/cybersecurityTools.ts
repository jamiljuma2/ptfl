export type CybersecurityTool = {
  name: string;
  description: string;
};

export const CYBERSECURITY_TOOLS: CybersecurityTool[] = [
  { name: "Kali Linux", description: "A security-focused Linux distro with preinstalled penetration testing tools." },
  { name: "Wireshark", description: "Captures and analyzes network traffic packets in real time." },
  { name: "ClamAV", description: "An open-source antivirus engine for malware scanning and detection." },
  { name: "Bitwarden", description: "A secure password manager for storing and sharing credentials safely." },
  { name: "Nmap", description: "Scans networks to discover hosts, open ports, and running services." },
  { name: "Burp Suite", description: "Tests web application security with proxy, scanner, and attack tools." },
  { name: "Metasploit Framework", description: "Builds and runs exploit modules for vulnerability validation." },
  { name: "OSSEC", description: "Host-based intrusion detection with log monitoring and file integrity checks." },
  { name: "Wazuh", description: "A security monitoring platform for threat detection and compliance visibility." },
  { name: "OpenVAS", description: "Performs vulnerability scans to find and prioritize security weaknesses." },
  { name: "Nikto", description: "Scans web servers for outdated software and risky configurations." },
  { name: "Aircrack-ng", description: "Audits wireless network security and tests Wi-Fi password strength." },
];
