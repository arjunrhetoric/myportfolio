import ProjectPageTemplate from "@/components/ProjectPageTemplate";

export const dynamic = "force-dynamic";

export default async function ArtPage() {
  return (
    <ProjectPageTemplate
      title="art projects"
      subtitle="some things i have worked real hard on."
      projects={[]}
    />
  );
}
