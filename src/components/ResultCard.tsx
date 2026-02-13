import { TreePine, TreeDeciduous, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

export type DetectionResult = {
  hasTree: boolean;
  confidence: number;
  treeCount?: number;
  healthStatus?: "healthy" | "moderate" | "poor";
};

const ResultCard = ({ result }: { result: DetectionResult }) => {
  const isDetected = result.hasTree;

  return (
    <div
      className={`w-full max-w-2xl mx-auto rounded-2xl border-2 p-8 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 ${
        isDetected
          ? "border-success/40 bg-success/5"
          : "border-warning/40 bg-warning/5"
      }`}
    >
      <div className="flex items-start gap-5">
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
            isDetected ? "bg-success/15" : "bg-warning/15"
          }`}
        >
          {isDetected ? (
            <TreeDeciduous className="w-7 h-7 text-success" />
          ) : (
            <AlertTriangle className="w-7 h-7 text-warning" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-display font-bold text-foreground mb-1">
            {isDetected ? "Tree Detected!" : "No Tree Found"}
          </h3>
          <p className="text-muted-foreground mb-4">
            {isDetected
              ? "We found trees in your plantation image."
              : "No trees were detected in this area. Consider planting!"}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <StatBox
              label="Confidence"
              value={`${result.confidence}%`}
              icon={isDetected ? <CheckCircle2 className="w-4 h-4 text-success" /> : <XCircle className="w-4 h-4 text-warning" />}
            />
            {result.treeCount !== undefined && (
              <StatBox
                label="Trees Found"
                value={String(result.treeCount)}
                icon={<TreePine className="w-4 h-4 text-primary" />}
              />
            )}
            {result.healthStatus && (
              <StatBox
                label="Health"
                value={result.healthStatus.charAt(0).toUpperCase() + result.healthStatus.slice(1)}
                icon={<TreeDeciduous className="w-4 h-4 text-accent" />}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatBox = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => (
  <div className="bg-background rounded-xl p-3 border border-border">
    <div className="flex items-center gap-1.5 mb-1">
      {icon}
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
    <span className="text-lg font-bold text-foreground">{value}</span>
  </div>
);

export default ResultCard;
