import ProjectPageTemplate from "@/components/ProjectPageTemplate";
import { blogPosts } from "../../data/portfolio";

export const dynamic = 'force-dynamic';

export default async function WritingPage() {
    return (
        <ProjectPageTemplate
            title="writing projects"
            subtitle="some things i have worked real hard on."
            projects={blogPosts}
        />
    );
}
