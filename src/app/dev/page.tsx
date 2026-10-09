import ProjectPageTemplate from "@/components/ProjectPageTemplate";
import { devProjects } from "../../data/portfolio";

export const dynamic = 'force-dynamic';

export default async function DevPage() {
    return (
        <ProjectPageTemplate
            title="dev projects"
            subtitle="some things i have worked real hard on."
            projects={devProjects}
        />
    );
}
