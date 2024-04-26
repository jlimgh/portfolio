import type { Project } from "@/app/lib/project-data"
import Link from "next/link";

type Props = {
    slug: string;
    project: Project;
}

export default function Article ({ slug, project }: Props) {
	return (
		<Link href={`/projects/${slug}`}>
			<article className="p-4 md:p-8">
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-2xl text-zinc-600 group-hover:text-black font-display">
					{project.title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-500 group-hover:text-zinc-700">
					{project.summary}
				</p>
			</article>
		</Link>
	);
};