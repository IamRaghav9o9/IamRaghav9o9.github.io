import Link from "next/link";

const skills = [
  "Python",
  "PyTorch",
  "Graph Neural Networks (GraphSAGE)",
  "Transfer Learning",
  "Spatio-Temporal Modeling",
  "Conv-LSTM & SARIMA",
  "Multi-Agent RL",
  "FastAPI",
  "Node.js & Express",
  "React & Next.js",
  "MongoDB Atlas",
  "Docker & OpenShift",
  "Android / Kotlin",
  "Weights & Biases",
  "IoT & Sensor Networks",
];

const featured = [
  {
    title: "Spatio-Temporal Modeling for Air Quality Monitoring",
    description:
      "Cost-effective spatio-temporal modeling and sensor calibration using graph and recurrent neural networks for dense environmental monitoring.",
    tags: ["IEEE CAI 2026", "Spatio-Temporal", "Air Quality", "GNN"],
    href: "/research",
  },
  {
    title: "Transfer Learning: Wi-Fi AP → Air Quality Monitoring",
    description:
      "GNN-LSTM framework achieving 51.7% training epoch reduction and 52.7% computation time savings through cross-domain spatio-temporal transfer learning.",
    tags: ["IEEE ICECET 2025", "GNN", "LSTM", "Transfer Learning"],
    href: "/research",
  },
  {
    title: "SCMARL: Multi-Agent RL for Sensor Networks",
    description:
      "Cluster-based MARL framework achieving 52.5% computation reduction and 112.5% better battery conservation at 1000-node scale.",
    tags: ["IEEE ACDSA 2025", "Multi-Agent RL", "WSN", "Q-Learning"],
    href: "/research",
  },
  {
    title: "SACAQM Environmental Telemetry & Compliance Platform",
    description:
      "Full-stack telemetry system with real-time pollutant dashboards, Mapbox GL station telemetry, exceedance detection, and conversational AI agent integration.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Mapbox GL"],
    href: "/projects",
  },
  {
    title: "Air-Quality Forecasting Microservice",
    description:
      "FastAPI forecasting service deploying SARIMA and Conv-LSTM architectures for 24-hour predictive air quality telemetry with historical backtesting.",
    tags: ["FastAPI", "Conv-LSTM", "SARIMA", "Docker"],
    href: "/projects",
  },
  {
    title: "Network Load Forecasting via SARIMA–BiLSTM",
    description:
      "Decoupled time-series transfer learning for long-horizon network load forecasting across spatial infrastructure clusters.",
    tags: ["Springer DMBD 2025", "BiLSTM", "SARIMA", "Time Series"],
    href: "/research",
  },
];

export default function Home() {
  return (
    <div className="space-y-0">
      {/* ===== Hero ===== */}
      <section className="py-16 sm:py-24 animate-fade-in">
        <p className="text-sm font-medium tracking-widest uppercase text-neutral-500 mb-4">
          AI/ML Developer &amp; Researcher
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Raghav Chandna</span>
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed mb-4">
          AI/ML and Full-Stack Developer working across spatio-temporal
          modelling, graph neural networks, sensor analytics, and
          research-oriented software systems.
        </p>
        <p className="text-neutral-500 mb-8">
          AI Developer at{" "}
          <span className="text-neutral-300 font-medium">
            South Africa Consortium for Air Quality Management (SACAQM)
          </span>
          ,{" "}
          <span className="text-neutral-300 font-medium">
            University of the Witwatersrand
          </span>{" "}
          &amp;{" "}
          <span className="text-neutral-300 font-medium">iThemba LABS</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link href="/research" className="btn-accent">
            Research &amp; Papers
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <Link href="/cv" className="btn-ghost">
            View CV / Resume
          </Link>
          <Link href="/projects" className="btn-ghost">
            Projects &amp; Systems
          </Link>
          <Link
            href="https://github.com/IamRaghav9o9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            GitHub ↗
          </Link>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== Skills / Interests ===== */}
      <section className="animate-fade-in-2">
        <h2 className="text-xl font-semibold mb-5 text-neutral-200">
          Core Technologies &amp; Focus Areas
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== Featured Work ===== */}
      <section className="animate-fade-in-3">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-neutral-200">
            Featured Work &amp; Research
          </h2>
          <Link
            href="/research"
            className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
            style={{ textDecoration: "none" }}
          >
            View all 5 publications →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="glass-card block group"
              style={{ textDecoration: "none" }}
            >
              <h3 className="text-base font-semibold text-neutral-100 mb-2 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag" style={{ fontSize: "0.65rem" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}