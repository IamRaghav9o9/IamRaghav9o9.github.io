import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Technical notes, paper insights, and learning logs on transfer learning, graph neural networks, spatio-temporal forecasting, and reinforcement learning.",
};

type Note = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
};

const notes: Note[] = [
  {
    title: "Cross-Domain Transfer Learning: What Transfers and What Doesn't",
    date: "2025-06-01",
    excerpt:
      "Lessons from transferring GNN-LSTM models trained on Wi-Fi access point data to air quality monitoring. Earlier layers capturing spatial-temporal patterns transfer well, but domain-specific output heads need full retraining. Freezing strategies and the 51.7% epoch reduction we observed in practice.",
    tags: ["Transfer Learning", "GNN", "Practical Insights"],
    readingTime: "8 min",
  },
  {
    title: "SARIMA + LSTM: Decomposing Seasonality for Better Forecasting",
    date: "2025-04-22",
    excerpt:
      "Why decoupling seasonal structure with SARIMA before feeding residuals into an LSTM produces cleaner, more transferable representations. Practical guide on implementing the two-stage pipeline, choosing SARIMA orders, and fine-tuning strategies across domains.",
    tags: ["SARIMA", "LSTM", "Time Series", "Tutorial"],
    readingTime: "10 min",
  },
  {
    title: "Scaling Reinforcement Learning in Sensor Networks: Cluster-Based Approaches",
    date: "2025-03-15",
    excerpt:
      "Notes on the SCMARL framework — how spatiotemporal clustering (geographic proximity + temporal correlation via DTW) decomposes the global state-action space. The critical crossover point at ~100 nodes where cluster-based approaches outperform centralized RL.",
    tags: ["Multi-Agent RL", "WSN", "Scalability"],
    readingTime: "12 min",
  },
  {
    title: "Graph Neural Networks on Sensor Data: Choosing the Right Architecture",
    date: "2025-02-10",
    excerpt:
      "Comparing GCN, GAT, and GraphSAGE for spatial modeling in sensor networks. When attention mechanisms help (heterogeneous node features, varying spatial correlations) vs. when simpler spectral methods suffice. Lessons from building the ICECET paper's spatial module.",
    tags: ["GNN", "GCN", "GAT", "Architecture"],
    readingTime: "7 min",
  },
  {
    title: "Setting Up Reproducible ML Experiments for Conference Papers",
    date: "2025-01-20",
    excerpt:
      "A practical workflow for organizing configs, tracking experiments, and ensuring reproducibility when preparing IEEE conference submissions. Using Hydra for config management, W&B for tracking, and Docker for environment consistency.",
    tags: ["MLOps", "Reproducibility", "Tooling"],
    readingTime: "6 min",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Notes() {
  return (
    <section className="animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3">Notes</h1>
      <p className="text-neutral-400 max-w-2xl mb-10">
        Technical notes, paper insights, and learning logs. Distilled from
        research work on transfer learning, spatio-temporal modeling, and
        reinforcement learning for sensor networks.
      </p>

      <div className="space-y-4">
        {notes.map((note, i) => (
          <article
            key={note.title}
            className={`glass-card group cursor-pointer animate-fade-in-${Math.min(i + 1, 5)}`}
          >
            {/* Meta row */}
            <div className="flex items-center gap-3 mb-2 text-xs text-neutral-500">
              <time dateTime={note.date}>{formatDate(note.date)}</time>
              <span className="w-1 h-1 rounded-full bg-neutral-700" />
              <span>{note.readingTime} read</span>
            </div>

            {/* Title */}
            <h2 className="text-base font-semibold text-neutral-100 mb-2 group-hover:text-white transition-colors">
              {note.title}
            </h2>

            {/* Excerpt */}
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              {note.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="tag"
                  style={{ fontSize: "0.65rem" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
