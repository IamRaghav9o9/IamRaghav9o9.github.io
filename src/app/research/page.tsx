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
      "Transfer Learning from Wi-Fi Access Point Data to Air Quality Monitoring: A Spatial-Temporal Graph-Based Approach",
    authors: [
      "Raghav Chandna",
      "Isaiah Chiraira",
      "Manal Karmoude",
      "Ryan Peter Mckenzie",
      "Brenton Munhungewarwa",
      "Jude Kong",
      "Bevan Smith",
      "Bruce Mellado",
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
    title:
      "Efficient Transfer Learning for Time-Series Forecasting Using Wi-Fi Data",
    authors: [
      "Raghav Chandna",
      "Phodiso Maroeshe",
      "Manal Karmoude",
      "Phuthi Rapheeha",
      "Bevan Smith",
      "Bruce Mellado",
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
      "A Scalable Reinforcement Learning Framework for Wireless Sensor Networks: Spatiotemporal Cluster-Based Multi-Agent Reinforcement Learning",
    authors: [
      "Isaiah Chiraira",
      "Ling Cheng",
      "Manal Karmoude",
      "Ryan Mckenzie",
      "Brenton Munhungewarwa",
      "Raghav Chandna",
      "Jude Kong",
      "Bevan Smith",
      "Bruce Mellado",
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
];

const interests = [
  {
    area: "Spatio-Temporal Modeling",
    description:
      "Learning complex spatial and temporal dependencies in geospatial data using graph-based architectures for forecasting and monitoring applications.",
  },
  {
    area: "Transfer Learning",
    description:
      "Reusing learned representations across domains (Wi-Fi → Air Quality) to reduce data and compute requirements while preserving accuracy.",
  },
  {
    area: "Graph Neural Networks",
    description:
      "Message-passing and attention mechanisms on graph-structured data — from sensor networks to molecular graphs.",
  },
  {
    area: "Reinforcement Learning for IoT",
    description:
      "Multi-agent RL and cluster-based approaches for scalable decision-making in wireless sensor networks.",
  },
];

export default function Research() {
  return (
    <section className="animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3">Research</h1>
      <p className="text-neutral-400 max-w-2xl mb-12">
        My research sits at the intersection of machine learning, physics, and
        environmental science at the{" "}
        <span className="text-neutral-200">University of the Witwatersrand</span>{" "}
        and{" "}
        <span className="text-neutral-200">iThemba LABS</span>. I&apos;m
        particularly interested in how structure-aware models can advance
        scientific understanding and real-world monitoring systems.
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
        <h2 className="text-xl font-semibold text-neutral-200 mb-6">
          Publications
        </h2>
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
              <div className="flex gap-3 pt-3 border-t border-neutral-800/50">
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
