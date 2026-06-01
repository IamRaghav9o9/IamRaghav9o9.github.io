import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Applied machine learning projects in spatio-temporal modeling, transfer learning, and reinforcement learning for sensor networks.",
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  status: "Published" | "In Progress" | "Research";
  paper?: string;
  github?: string;
  category: string;
};

const projects: Project[] = [
  {
    title: "Spatio-Temporal GNN Transfer Learning for Air Quality",
    description:
      "A novel framework that applies transfer learning from Wi-Fi Access Point prediction to air quality monitoring using GNN-LSTM architectures. Achieves comparable accuracy to baseline while reducing training epochs by 51.7% (14 vs. 29) and computation time by 52.7% (17.51s vs. 37.05s). Supports both cross-domain and intra-domain transfer for resource-constrained deployments.",
    tags: ["PyTorch", "GNN", "LSTM", "Transfer Learning", "Air Quality"],
    status: "Published",
    paper: "https://doi.org/10.1109/ICECET63943.2025.11472283",
    category: "Research",
  },
  {
    title: "SARIMA-LSTM Transfer Learning for Wi-Fi Forecasting",
    description:
      "Time-series transfer learning framework for medium to long horizon Wi-Fi traffic forecasting across building floors. Decouples seasonal structure with SARIMA, learns trend and residuals with LSTM, and transfers with partial fine-tuning. Scalable to air quality monitoring sensor networks with minimal retraining.",
    tags: ["SARIMA", "LSTM", "Transfer Learning", "Time Series", "Wi-Fi"],
    status: "Published",
    paper: "https://doi.org/10.1109/IMITEC67386.2025.11410454",
    category: "Research",
  },
  {
    title: "SCMARL: Scalable Multi-Agent RL for Wireless Sensor Networks",
    description:
      "Spatiotemporal Cluster-Based Multi-Agent Reinforcement Learning framework that partitions sensor networks by geographic proximity and temporal correlation. Achieves 52.5% computation reduction, 112.5% better battery conservation, and 19% improved prediction accuracy at 1000-node scale. Critical crossover point at ~100 nodes.",
    tags: ["Q-Learning", "Multi-Agent RL", "WSN", "Clustering", "Scalability"],
    status: "Published",
    paper: "https://doi.org/10.1109/ACDSA65407.2025.11166147",
    category: "Research",
  },
  {
    title: "Real-time Air Quality Monitoring Pipeline",
    description:
      "End-to-end data pipeline for ingesting, processing, and visualizing air quality sensor data across monitoring stations. Includes anomaly detection, automated data preprocessing, and geospatial visualization components.",
    tags: ["Python", "Data Pipeline", "PostGIS", "Sensor Data"],
    status: "In Progress",
    github: "https://github.com/IamRaghav9o9",
    category: "Tools",
  },
  {
    title: "Graph Attention Networks for Sensor Correlation",
    description:
      "Exploring multi-head graph attention mechanisms for discovering and leveraging spatial correlations between heterogeneous environmental sensor deployments. Extension of the ICECET paper with adaptive graph structure learning.",
    tags: ["GAT", "PyG", "Adaptive Graphs", "Attention"],
    status: "Research",
    category: "Research",
  },
  {
    title: "Neural ODE for Environmental Dynamics",
    description:
      "Continuous-depth neural networks using differentiable ODE solvers for modeling environmental variable dynamics. Investigating integration with spatio-temporal graph structures for improved long-range forecasting.",
    tags: ["torchdiffeq", "Neural ODE", "Environmental ML"],
    status: "Research",
    category: "Research",
  },
];

const statusStyles: Record<string, { dot: string; text: string }> = {
  Published: { dot: "bg-emerald-400", text: "text-emerald-400" },
  "In Progress": { dot: "bg-amber-400", text: "text-amber-400" },
  Research: { dot: "bg-violet-400", text: "text-violet-400" },
};

export default function Projects() {
  return (
    <section className="animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3">Projects</h1>
      <p className="text-neutral-400 max-w-2xl mb-10">
        Applied machine learning projects with emphasis on evaluation,
        reproducibility, and research insight. Primarily focused on
        spatio-temporal problems in environmental monitoring and IoT systems.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className={`glass-card flex flex-col animate-fade-in-${Math.min(i + 1, 5)}`}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <h2 className="text-base font-semibold text-neutral-100 leading-snug">
                {project.title}
              </h2>
              <div
                className={`status-badge flex-shrink-0 ${statusStyles[project.status].text}`}
              >
                <span
                  className={`status-dot ${statusStyles[project.status].dot}`}
                />
                {project.status}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-400 leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="tag" style={{ fontSize: "0.65rem" }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-3 border-t border-neutral-800/50">
              {project.paper && (
                <Link
                  href={project.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-500 hover:text-neutral-200 transition-colors flex items-center gap-1.5"
                  style={{ textDecoration: "none" }}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                  Paper
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-500 hover:text-neutral-200 transition-colors flex items-center gap-1.5"
                  style={{ textDecoration: "none" }}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                  </svg>
                  Source
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}