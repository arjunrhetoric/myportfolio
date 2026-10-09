import HeroSection from "../components/HeroSection";
import HighlightsSection from "../components/HighlightsSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillStackSection from "../components/SkillStackSection";
import EducationSection from "../components/EducationSection";
import { experiences, skillCategories, education, highlights } from "../data/portfolio";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection highlights={highlights} />
      <ExperienceSection experiences={experiences} />
      <SkillStackSection skillCategories={skillCategories} />
      <EducationSection education={education} />
    </>
  );
}
