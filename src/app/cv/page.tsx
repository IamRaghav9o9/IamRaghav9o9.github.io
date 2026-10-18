import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum Vitae — academic background, professional experience, publications, and technical skills of Raghav Chandna.",
};

const education = [
  {
    institution: "University of Delhi",
    degree: "B.Sc. (Hons) Physics",
    location: "New Delhi, India",
    years: "July 2024",
    honors: "First Division · Thesis Grade: A+ (Excellent)",
    thesis: "Thesis: Optical Switches: An Application of Optomechanics",
    details: [
      "Formulated the Hamiltonian of a cavity–mirror optomechanical system using creation and annihilation operators.",
      "Applied Heisenberg equations of motion to derive a nonlinear cubic relation in photon number.",
      "Analysed optical bistability and decay-rate reduction using an improved mirror design.",
    ],
  },
];

const experience = [
  {
    role: "AI Developer",
    company: "South Africa Consortium for Air Quality Management (SACAQM)",
    institution: "University of the Witwatersrand",
    location: "Johannesburg, South Africa",
    years: "Sept 2024 – Present",
    details: [
      "Develop spatio-temporal forecasting workflows for Wi-Fi access-point activity and air-quality sensor data using Graph Neural Networks (GraphSAGE) and Recurrent Neural Networks (LSTM).",
      "Build GraphSAGE-based pretraining and transfer-learning pipelines between Wi-Fi data and air-quality targets, including PM2.5 and PM4.0.",
      "Design and execute Weights & Biases hyperparameter experiments for graph-based and LSTM forecasting models.",
      "Contribute to React-based environmental monitoring dashboards featuring live sensor readings, interactive station maps (Mapbox GL), pollutant trends (Chart.js), threshold exceedances, and device-status indicators.",
      "Develop and maintain backend services and REST APIs using Node.js, Express, MongoDB, and Mongoose for sensor telemetry, station metadata, device health, and monitoring workflows.",
      "Contribute to Python-based forecasting microservices using FastAPI, SARIMA, and Conv-LSTM architectures with automated data validation and historical evaluation pipelines.",
      "Implement AI-assisted conversational functionality for air-quality telemetry querying and anomaly insights using LLM/agent APIs.",
      "Develop UI components for the official SACAQM Android application using Kotlin and Android Studio.",
      "Support scheduled prediction and sensor-alert workflows, technical documentation, and stakeholder reporting.",
    ],
  },
];

const selectedTechnicalWork = [
  {
    title: "Environmental Monitoring & Compliance Dashboards",
    description:
      "Developed and maintained full-stack dashboard components for environmental telemetry, including pollutant visualisations, geospatial station maps, sensor operational status, and automated exceedance alerts using React, Chart.js, Mapbox GL, and Material UI.",
  },
  {
    title: "Spatio-Temporal Forecasting & Transfer Learning",
    description:
      "Built GraphSAGE and GNN-LSTM pretraining workflows investigating cross-domain transfer learning from campus Wi-Fi traffic to air-quality sensor networks, tracking hyperparameter experiments in Weights & Biases.",
  },
  {
    title: "Air-Quality Forecasting Microservice",
    description:
      "Engineered Python/FastAPI forecasting microservices utilizing SARIMA and Conv-LSTM models for 24-hour predictive pollutant analytics, handling sparse or missing sensor data with backtesting evaluation.",
  },
  {
    title: "Sensor APIs, Data Management & Automated Alerts",
    description:
      "Built resilient Node.js, Express, and MongoDB backend pipelines with cron-scheduled device-health monitoring and automated alerts for offline sensors and threshold breaches.",
  },
  {
    title: "Agentic AI & Conversational Telemetry",
    description:
      "Integrated LLM / AI agent endpoints into monitoring dashboards to enable conversational queries, automated incident summaries, and intelligent telemetry analysis.",
  },
  {
    title: "Official SACAQM Android Application",
    description:
      "Engineered modern mobile UI components and telemetry data integration for the official SACAQM Android mobile app using Kotlin and Android Studio.",
  },
];

const publications = [
  {
    title:
      "Spatio-temporal Modeling Using a Cost-Effective System for Air Quality Monitoring",
    authors: "Manal Karmoude, Raghav Chandna, et al.",
    venue: "IEEE Conference on Artificial Intelligence (CAI 2026)",
    year: "2026",
    doi: "10.1109/CAI68641.2026.11536651",
  },
  {
    title:
      "A Scalable Reinforcement Learning Framework for Wireless Sensor Networks: Spatiotemporal Cluster-Based Multi-Agent Reinforcement Learning",
    authors: "Isaiah Chiraira, Raghav Chandna, Bruce Mellado, et al.",
    venue: "IEEE ACDSA 2025, Antalya",
    year: "2025",
    doi: "10.1109/ACDSA65407.2025.11166147",
  },
  {
    title:
      "Efficient Transfer Learning for Time-Series Forecasting Using Wi-Fi Data",
    authors: "Raghav Chandna, Bruce Mellado, et al.",
    venue: "IEEE IMITEC 2025, Pretoria",
    year: "2025",
    doi: "10.1109/IMITEC67386.2025.11410454",
  },
  {
    title:
      "Transfer Learning from Wi-Fi Access Point Data to Air Quality Monitoring: A Spatial-Temporal Graph-Based Approach",
    authors: "Raghav Chandna, Bruce Mellado, et al.",
    venue: "IEEE ICECET 2025, Paris",
    year: "2025",
    doi: "10.1109/ICECET63943.2025.11472283",
  },
  {
    title: "Network Load Forecasting via SARIMA–BiLSTM Transfer Learning",
    authors: "Raghav Chandna, Bruce Mellado, et al.",
    venue: "Springer DMBD 2025",
    year: "2025",
    doi: "10.1007/978-92-0229-4 19",
  },
];

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript / TypeScript", "Kotlin", "Java", "SQL", "Bash", "HTML/CSS"],
  },
  {
    category: "Frontend & Mobile",
    skills: [
      "React",
      "Next.js",
      "Vite",
      "Mapbox GL",
      "Leaflet",
      "Chart.js",
      "Material UI (MUI)",
      "Android Studio",
      "Kotlin Android",
    ],
  },
  {
    category: "Backend & Cloud",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "MongoDB Atlas",
      "Mongoose",
      "RESTful APIs",
      "Docker",
      "Red Hat OpenShift",
      "Uvicorn",
      "Cron Services",
    ],
  },
  {
    category: "Machine Learning & AI",
    skills: [
      "PyTorch",
      "PyTorch Geometric (PyG)",
      "TensorFlow / Keras",
      "Graph Neural Networks (GraphSAGE, GCN)",
      "LSTM / Conv-LSTM",
      "SARIMA",
      "Transfer Learning",
      "Time-Series Forecasting",
      "Multi-Agent RL (SCMARL)",
      "LLM / Agent Integration",
      "Weights & Biases (W&B)",
      "scikit-learn",
    ],
  },
  {
    category: "Data Analysis & Scientific Computing",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "EDA & Preprocessing",
      "Feature Engineering",
      "Statistical Analysis",
      "Cross-Validation & Backtesting",
    ],
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
            AI/ML &amp; Full-Stack Developer working across spatio-temporal modelling,
            graph neural networks, sensor analytics, and research-oriented software development.
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

      {/* ===== Present Position / Experience ===== */}
      <div className="mb-12 animate-fade-in-1">
        <h2 className="text-xl font-semibold text-neutral-200 mb-6">
          Professional Experience
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
                    <p className="text-sm text-neutral-300">
                      {exp.company} — {exp.institution}
                    </p>
                    <p className="text-xs text-neutral-500">{exp.location}</p>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 flex-shrink-0">
                    {exp.years}
                  </span>
                </div>
                <ul className="space-y-1.5 mt-3">
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

      {/* ===== Education ===== */}
      <div className="mb-12 animate-fade-in-2">
        <h2 className="text-xl font-semibold text-neutral-200 mb-6">
          Education
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
                    <p className="text-xs text-neutral-500">{edu.location} · {edu.honors}</p>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 flex-shrink-0">
                    {edu.years}
                  </span>
                </div>
                <p className="text-xs font-medium text-neutral-300 mt-2 mb-1.5">
                  {edu.thesis}
                </p>
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

      {/* ===== Selected Technical Work ===== */}
      <div className="mb-12 animate-fade-in-3">
        <h2 className="text-xl font-semibold text-neutral-200 mb-6">
          Selected Technical Work &amp; Systems
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {selectedTechnicalWork.map((item) => (
            <div key={item.title} className="glass-card">
              <h3 className="text-sm font-semibold text-neutral-100 mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider" />

      {/* ===== Publications ===== */}
      <div className="mb-12 animate-fade-in-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-neutral-200">
            Publications
          </h2>
          <span className="text-xs text-neutral-500 font-mono">
            {publications.length} Papers
          </span>
        </div>
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
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                  {pub.title}
                </h3>
                <span className="text-xs font-mono text-neutral-500 flex-shrink-0">
                  {pub.year}
                </span>
              </div>
              <p className="text-xs text-neutral-400 mb-1">
                {pub.authors}
              </p>
              <p className="text-xs text-neutral-500">
                {pub.venue} · DOI: {pub.doi}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="section-divider" />

      {/* ===== Skills ===== */}
      <div className="animate-fade-in-5">
        <h2 className="text-xl font-semibold text-neutral-200 mb-6">
          Technical Skills
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="glass-card">
              <h3 className="text-sm font-semibold text-neutral-300 mb-3 uppercase tracking-wider text-xs">
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