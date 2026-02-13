import { TreePine, ScanSearch, Leaf, TrendingUp } from "lucide-react";

const stats = [
  { icon: ScanSearch, label: "Scans Today", value: "1,284" },
  { icon: TreePine, label: "Trees Detected", value: "3.2M" },
  { icon: Leaf, label: "Species Identified", value: "450+" },
  { icon: TrendingUp, label: "Accuracy Rate", value: "96.8%" },
];

const StatsBar = () => (
  <section className="py-12 border-y border-border bg-card/50">
    <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
            <s.icon className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-foreground font-display">{s.value}</p>
          <p className="text-sm text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
