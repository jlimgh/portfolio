import Link from "next/link";
import Article from "./article";
import { Card } from "../components/card";
import { projectDataMap } from "@/app/lib/project-data";
import { getBlogPosts } from "../db/blog";
import { Suspense } from "react";


export default function ProjectsPage() {
    let allBlogs = getBlogPosts();
    
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">my projects</h1>
            <p>Some of the projects are from work and some are on my own time.</p>
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
            {/* <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(projectItems).map(([slug, { name }]) => {
              return (
                <Link
                  key={slug}
                  href={`/projects/${slug}`}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div> */}
          <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
                {/* <div className="grid grid-cols-1 gap-4">
                {Object.entries(projectDataMap)
                    .filter((_, i) => i % 3 === 0)
                    .map(([path, { description, title, slug }]) => (
                    <Card key={slug}>
                        <Article project={{description, title, slug}} views={0} />
                    </Card>
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-4">
                {Object.entries(projectDataMap)
                    .filter((_, i) => i % 3 === 1)
                    .map(([path, { description, title, slug }]) => (
                    <Card key={slug}>
                        <Article project={{description, title, slug}} views={0} />
                    </Card>
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-4">
                {Object.entries(projectDataMap)
                    .filter((_, i) => i % 3 === 2)
                    .map(([path, { description, title, slug }]) => (
                    <Card key={slug}>
                        <Article project={{description, title, slug}} views={0} />
                    </Card>
                    ))}
                </div> */}
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(projectDataMap)
                    .map(([path, project]) => (
                    <Card key={path}>
                        <Article project={project} slug={path} />
                    </Card>
                ))}
                </div>
        </section>
    )
}