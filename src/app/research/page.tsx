import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research in spatio-temporal modeling, transfer learning, graph neural networks, and wireless sensor networks.",
};

type Publication = {
  title: string;
  authors: string[];
  venue: string;
  venueShort: string;
  year: number;
  location: string;
  tags: string[];
  doi: string;
  links: { label: string; href: string }[];
};

const publications: Publication[] = [
  {
    title:
      "Spatio-temporal Modeling Using a Cost-Effective System for Air Quality Monitoring",
    authors: [
      "Manal Karmoude",
      "Raghav Chandna",
      "Bruce Mellado",
      "et al.",
    ],
    venue:
      "2026 IEEE Conference on Artificial Intelligence (CAI)",
    venueShort: "CAI 2026",
    year: 2026,
    location: "IEEE CAI",
    tags: ["Air Quality", "Spatio-Temporal", "Low-Cost Sensors", "GNN"],
    doi: "10.1109/CAI68641.2026.11536651",
    links: [
      {
        label: "IEEE Xplore",
        href: "https://doi.org/10.1109/CAI68641.2026.11536651",
      },
    ],
  },
  {
    title:
      "A Scalable Reinforcement Learning Framework for Wireless Sensor Networks: Spatiotemporal Cluster-Based Multi-Agent Reinforcement Learning",
    authors: [
      "Isaiah Chiraira",
      "Raghav Chandna",
      "Bruce Mellado",
      "et al.",
    ],
    venue:
      "2025 International Conference on Artificial Intelligence, Computer, Data Sciences and Applications (ACDSA)",
    venueShort: "ACDSA 2025",
    year: 2025,
    location: "Antalya, Türkiye",
    tags: ["Multi-Agent RL", "WSN", "Q-Learning", "Spatiotemporal"],
    doi: "10.1109/ACDSA65407.2025.11166147",
    links: [
      {
        label: "IEEE Xplore",
        href: "https://doi.org/10.1109/ACDSA65407.2025.11166147",
      },
    ],
  },
  {
    title:
      "Efficient Transfer Learning for Time-Series Forecasting Using Wi-Fi Data",
    authors: [
      "Raghav Chandna",
      "Bruce Mellado",
      "et al.",
    ],
    venue:
      "2025 5th International Multidisciplinary Information Technology and Engineering Conference (IMITEC)",
    venueShort: "IMITEC 2025",
    year: 2025,
    location: "Pretoria, South Africa",
    tags: ["Transfer Learning", "SARIMA", "LSTM", "Time Series"],
    doi: "10.1109/IMITEC67386.2025.11410454",
    links: [
      {
        label: "IEEE Xplore",
        href: "https://doi.org/10.1109/IMITEC67386.2025.11410454",
      },
    ],
  },
  {
    title:
      "Transfer Learning from Wi-Fi Access Point Data to Air Quality Monitoring: A Spatial-Temporal Graph-Based Approach",
    authors: [
      "Raghav Chandna",
      "Bruce Mellado",
      "et al.",
    ],
    venue:
      "2025 5th International Conference on Electrical, Computer and Energy Technologies (ICECET)",
    venueShort: "ICECET 2025",
    year: 2025,
    location: "Paris, France",
    tags: ["Transfer Learning", "GNN-LSTM", "Air Quality", "Spatio-Temporal"],
    doi: "10.1109/ICECET63943.2025.11472283",
    links: [
      {
        label: "IEEE Xplore",
        href: "https://doi.org/10.1109/ICECET63943.2025.11472283",
      },
    ],
  },
  {
    title: "Network Load Forecasting via SARIMA–BiLSTM Transfer Learning",
    authors: [
      "Raghav Chandna",
      "Bruce Mellado",
      "et al.",
    ],
    venue:
      "2025 International Conference on Data Mining and Big Data (DMBD)",
    venueShort: "DMBD 2025",
    year: 2025,
    location: "Springer DMBD",
    tags: ["SARIMA", "BiLSTM", "Transfer Learning", "Network Traffic"],
    doi: "10.1007/978-92-0229-4 19",
    links: [
      {
        label: "Springer Link",
        href: "https://doi.org/10.1007/978-92-0229-4 19",
      },
    ],
  },
];

const interests = [
  {
    area: "Spatio-Temporal Modeling",
    description:
      "Learning complex spatial and temporal dependencies in geospatial and environmental sensor telemetry using graph-based architectures (GNN, GraphSAGE) and recurrent neural networks.",
  },
  {
    area: "Transfer Learning",
    description:
      "Reusing representations learned from high-density sources (Wi-Fi access points) to predict target air quality indicators (PM2.5, PM4.0), significantly reducing compute and data collection bottlenecks.",
  },
  {
    area: "Graph Neural Networks & Dynamics",
    description:
      "Message-passing and spatial graph representation mechanisms for interconnected sensor networks and dynamic environmental telemetry systems.",
  },
  {
    area: "Reinforcement Learning & Distributed Systems",
    description:
      "Multi-agent RL (SCMARL) and cluster-based algorithms for scalable, energy-efficient decision-making in large-scale wireless sensor networks.",
  },
];

export default function Research() {
  return (
    <section className="animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3">Research</h1>
      <p className="text-neutral-400 max-w-2xl mb-12">
        My research sits at the intersection of machine learning, physics, and
        environmental telemetry at the{" "}
        <span className="text-neutral-200">
          South Africa Consortium for Air Quality Management (SACAQM)
        </span>
        ,{" "}
        <span className="text-neutral-200">University of the Witwatersrand</span>
        , and{" "}
        <span className="text-neutral-200">iThemba LABS</span>. I investigate
        how structure-aware models, graph neural networks, and transfer learning
        can power accurate, resource-efficient real-world monitoring systems.
      </p>

      {/* ===== Research Interests ===== */}
      <div className="mb-14 animate-fade-in-1">
        <h2 className="text-xl font-semibold text-neutral-200 mb-5">
          Research Interests
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {interests.map((interest) => (
            <div key={interest.area} className="glass-card">
              <h3 className="text-sm font-semibold text-neutral-100 mb-2">
                {interest.area}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider" />

      {/* ===== Publications ===== */}
      <div className="animate-fade-in-2">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-neutral-200">
            Publications
          </h2>
          <span className="text-xs text-neutral-500 font-mono">
            {publications.length} Papers
          </span>
        </div>
        <div className="space-y-6">
          {publications.map((pub) => (
            <article key={pub.doi} className="glass-card">
              {/* Year + venue badge */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-base font-semibold text-neutral-100 leading-snug">
                  {pub.title}
                </h3>
                <span className="text-xs font-mono text-neutral-500 flex-shrink-0 mt-0.5">
                  {pub.year}
                </span>
              </div>

              {/* Authors — highlight own name */}
              <p className="text-sm text-neutral-400 mb-1">
                {pub.authors.map((author, i) => (
                  <span key={author + i}>
                    {author === "Raghav Chandna" ? (
                      <span className="text-neutral-200 font-medium">
                        {author}
                      </span>
                    ) : (
                      author
                    )}
                    {i < pub.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>

              {/* Venue */}
              <p className="text-sm text-neutral-500 italic mb-1">
                {pub.venue}
              </p>
              <p className="text-xs text-neutral-600 mb-3">
                📍 {pub.location}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-neutral-800/50">
                {pub.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-500 hover:text-neutral-200 transition-colors"
                    style={{ textDecoration: "none" }}
                  >
                    {link.label} ↗
                  </Link>
                ))}
                <span className="text-xs text-neutral-600">
                  DOI: {pub.doi}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
