import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum Vitae — academic background, research experience, and technical skills of Raghav Chandna.",
};

const education = [
  {
    institution: "University of the Witwatersrand",
    degree: "Research — School of Physics",
    years: "2024 – Present",
    details: [
      "Research at iThemba LABS on spatio-temporal modeling and transfer learning",
      "3 IEEE conference publications (ICECET, IMITEC, ACDSA)",
      "Focus: GNNs, Transfer Learning, Multi-Agent RL for environmental monitoring",
    ],
  },
];

const experience = [
  {
    role: "AI / ML Researcher",
    company: "iThemba LABS & University of the Witwatersrand",
    location: "Johannesburg, South Africa",
    years: "2024 – Present",
    details: [
      "Developed GNN-LSTM transfer learning framework achieving 52.7% computation time reduction for air quality forecasting",
      "Built SARIMA-LSTM pipeline for time-series forecasting with cross-domain transfer from Wi-Fi to environmental sensor data",
      "Co-authored SCMARL framework for scalable multi-agent RL in wireless sensor networks (up to 1000 nodes)",
      "Published 3 papers at IEEE conferences (ICECET Paris, IMITEC Pretoria, ACDSA Antalya)",
      "Collaborating with researchers on physics-inspired ML for environmental monitoring systems",
    ],
  },
];

const publications = [
  {
    title: "Transfer Learning from Wi-Fi AP Data to Air Quality Monitoring: A Spatial-Temporal Graph-Based Approach",
    venue: "ICECET 2025, Paris",
    doi: "10.1109/ICECET63943.2025.11472283",
  },
  {
    title: "Efficient Transfer Learning for Time-Series Forecasting Using Wi-Fi Data",
    venue: "IMITEC 2025, Pretoria",
    doi: "10.1109/IMITEC67386.2025.11410454",
  },
  {
    title: "SCMARL: Scalable RL Framework for Wireless Sensor Networks",
    venue: "ACDSA 2025, Antalya",
    doi: "10.1109/ACDSA65407.2025.11166147",
  },
];

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "C++", "JavaScript/TypeScript", "SQL", "MATLAB"],
  },
  {
    category: "ML / DL Frameworks",
    skills: ["PyTorch", "TensorFlow", "DGL", "PyG", "scikit-learn", "torchdiffeq"],
  },
  {
    category: "Research Areas",
    skills: [
      "Graph Neural Networks",
      "Transfer Learning",
      "Spatio-Temporal Modeling",
      "Reinforcement Learning",
      "Time-Series Forecasting",
      "Wireless Sensor Networks",
    ],
  },
  {
    category: "Tools & Infrastructure",
    skills: ["Docker", "Git", "W&B", "Hydra", "FastAPI", "PostgreSQL", "Linux"],
  },
];

export default function CV() {
  return (
    <section className="animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Curriculum Vitae
          </h1>
          <p className="text-neutral-400">
            Academic background, research experience, and technical skills.
          </p>
        </div>
        <Link
          href="/cv.pdf"
          target="_blank"
          className="btn-accent flex-shrink-0 self-start"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Download PDF
        </Link>
      </div>

      {/* ===== Education ===== */}
      <div className="mb-12 animate-fade-in-1">
        <h2 className="text-xl font-semibold text-neutral-200 mb-6">
          Education &amp; Research
        </h2>
        <div className="timeline">
          {education.map((edu) => (
            <div key={edu.institution} className="timeline-item">
              <div className="timeline-dot" />
              <div className="glass-card ml-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-base font-semibold text-neutral-100">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-neutral-300">{edu.degree}</p>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 flex-shrink-0">
                    {edu.years}
                  </span>
                </div>
                <ul className="space-y-1">
                  {edu.details.map((d) => (
                    <li
                      key={d}
                      className="text-sm text-neutral-400 flex items-start gap-2"
                    >
                      <span className="text-neutral-600 mt-1.5">•</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider" />

      {/* ===== Experience ===== */}
      <div className="mb-12 animate-fade-in-2">
        <h2 className="text-xl font-semibold text-neutral-200 mb-6">
          Experience
        </h2>
        <div className="timeline">
          {experience.map((exp) => (
            <div key={exp.role + exp.company} className="timeline-item">
              <div className="timeline-dot" />
              <div className="glass-card ml-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-base font-semibold text-neutral-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-neutral-300">{exp.company}</p>
                    <p className="text-xs text-neutral-500">{exp.location}</p>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 flex-shrink-0">
                    {exp.years}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {exp.details.map((d) => (
                    <li
                      key={d}
                      className="text-sm text-neutral-400 flex items-start gap-2"
                    >
                      <span className="text-neutral-600 mt-1.5">•</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider" />

      {/* ===== Publications ===== */}
      <div className="mb-12 animate-fade-in-3">
        <h2 className="text-xl font-semibold text-neutral-200 mb-6">
          Publications
        </h2>
        <div className="space-y-3">
          {publications.map((pub) => (
            <Link
              key={pub.doi}
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card block group"
              style={{ textDecoration: "none" }}
            >
              <h3 className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors mb-1">
                {pub.title}
              </h3>
              <p className="text-xs text-neutral-500">
                {pub.venue} · DOI: {pub.doi}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="section-divider" />

      {/* ===== Skills ===== */}
      <div className="animate-fade-in-4">
        <h2 className="text-xl font-semibold text-neutral-200 mb-6">
          Technical Skills
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="glass-card">
              <h3 className="text-sm font-semibold text-neutral-300 mb-3 uppercase tracking-wider">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}