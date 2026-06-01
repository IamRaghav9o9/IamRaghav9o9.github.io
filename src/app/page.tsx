import Link from "next/link";

const skills = [
  "Python",
  "PyTorch",
  "Graph Neural Networks",
  "Transfer Learning",
  "Spatio-Temporal Modeling",
  "LSTM",
  "SARIMA",
  "Reinforcement Learning",
  "Wireless Sensor Networks",
  "Air Quality Monitoring",
  "Deep Learning",
  "TensorFlow",
  "DGL / PyG",
  "Scientific Computing",
  "Docker",
  "Git",
];

const featured = [
  {
    title: "Transfer Learning: Wi-Fi AP → Air Quality Monitoring",
    description:
      "GNN-LSTM framework achieving 51.7% training epoch reduction and 52.7% computation time savings through cross-domain spatio-temporal transfer learning.",
    tags: ["GNN", "LSTM", "Transfer Learning"],
    href: "/projects",
  },
  {
    title: "Efficient Time-Series Forecasting with SARIMA-LSTM",
    description:
      "Seasonality-aware transfer learning for Wi-Fi traffic forecasting across building floors, scalable to air quality sensor networks.",
    tags: ["SARIMA", "LSTM", "Time Series"],
    href: "/projects",
  },
  {
    title: "SCMARL: Multi-Agent RL for Sensor Networks",
    description:
      "Cluster-based MARL framework achieving 52.5% computation reduction and 112.5% better battery conservation at 1000-node scale.",
    tags: ["Multi-Agent RL", "WSN", "Q-Learning"],
    href: "/projects",
  },
];

export default function Home() {
  return (
    <div className="space-y-0">
      {/* ===== Hero ===== */}
      <section className="py-16 sm:py-24 animate-fade-in">
        <p className="text-sm font-medium tracking-widest uppercase text-neutral-500 mb-4">
          AI / ML Researcher
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Raghav Chandna</span>
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed mb-4">
          Applied AI/ML researcher working on spatio-temporal modeling,
          transfer learning, graph neural networks, and reinforcement learning
          for environmental monitoring and IoT systems.
        </p>
        <p className="text-neutral-500 mb-8">
          Based at{" "}
          <span className="text-neutral-300 font-medium">
            University of the Witwatersrand
          </span>{" "}
          &amp;{" "}
          <span className="text-neutral-300 font-medium">iThemba LABS</span>,
          Johannesburg, South Africa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link href="/research" className="btn-accent">
            Research
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
          <Link href="/projects" className="btn-ghost">
            Projects
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
          Skills &amp; Interests
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
            Featured Work
          </h2>
          <Link
            href="/research"
            className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
            style={{ textDecoration: "none" }}
          >
            All publications →
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