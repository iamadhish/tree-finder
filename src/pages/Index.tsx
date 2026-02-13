import { useState, useRef, useCallback } from "react";
import { TreePine } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ImageUploader from "@/components/ImageUploader";
import ResultCard, { type DetectionResult } from "@/components/ResultCard";
import StatsBar from "@/components/StatsBar";

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const uploadRef = useRef<HTMLDivElement>(null);

  const scrollToUpload = () => {
    uploadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageSelected = useCallback((_file: File, _preview: string) => {
    setResult(null);
    setIsAnalyzing(true);

    // Simulate analysis (replace with real API later)
    setTimeout(() => {
      const hasTree = Math.random() > 0.3;
      setResult({
        hasTree,
        confidence: hasTree ? Math.floor(Math.random() * 15 + 85) : Math.floor(Math.random() * 20 + 60),
        treeCount: hasTree ? Math.floor(Math.random() * 20 + 1) : 0,
        healthStatus: hasTree
          ? (["healthy", "moderate", "poor"] as const)[Math.floor(Math.random() * 3)]
          : undefined,
      });
      setIsAnalyzing(false);
    }, 2500);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TreePine className="w-6 h-6 text-primary" />
            <span className="text-lg font-display font-bold text-foreground">TreeCheck</span>
          </div>
          <button
            onClick={scrollToUpload}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Checking
          </button>
        </div>
      </nav>

      {/* Hero */}
      <HeroSection onScrollToUpload={scrollToUpload} />

      {/* Stats */}
      <StatsBar />

      {/* Upload Section */}
      <section ref={uploadRef} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Upload & Analyze
          </h2>
          <p className="text-muted-foreground text-lg">
            Drop a photo of your plantation site to check for tree presence
          </p>
        </div>
        <ImageUploader onImageSelected={handleImageSelected} isAnalyzing={isAnalyzing} />

        {result && (
          <div className="mt-10">
            <ResultCard result={result} />
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 TreeCheck — Monitoring plantations for a greener future 🌱</p>
      </footer>
    </div>
  );
};

export default Index;
