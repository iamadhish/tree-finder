import { TreePine, ScanSearch } from "lucide-react";
import heroForest from "@/assets/hero-forest.jpg";

const HeroSection = ({ onScrollToUpload }: { onScrollToUpload: () => void }) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroForest}
        alt="Lush green forest canopy aerial view"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
          <TreePine className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-primary-foreground">Tree Plantation Checker</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight font-display">
          Is There a Tree?
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 font-body max-w-xl mx-auto">
          Upload an image of your plantation site and instantly verify tree presence. Monitor growth, track coverage, and protect our green future.
        </p>
        <button
          onClick={onScrollToUpload}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 shadow-lg"
        >
          <ScanSearch className="w-5 h-5" />
          Check Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
