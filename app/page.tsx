import Hero from "@/components/Hero";
import DashedDivider from "@/components/ui/DashedDivider";
import EditorsChoice from "@/components/EditorsChoice";
import CategoryGrid from "@/components/CategoryGrid";
import BestPicksPreview from "@/components/BestPicksPreview";
import BrewCalculator from "@/components/BrewCalculator";
import SetupQuiz from "@/components/SetupQuiz";
import GuidesCarousel from "@/components/GuidesCarousel";
import HowWePick from "@/components/HowWePick";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EditorsChoice />
      <div className="mx-auto max-w-6xl px-6">
        <DashedDivider />
      </div>
      <CategoryGrid />
      <BestPicksPreview />
      <BrewCalculator />
      <SetupQuiz />
      <GuidesCarousel />
      <HowWePick />
    </>
  );
}
