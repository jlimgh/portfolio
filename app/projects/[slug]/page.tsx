import Breadcrumbs from '@/app/components/breadcrumbs';
import { Project, projectDataMap } from '@/app/lib/project-data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Project Details',
};

export default async function Page({ params }:{ params: { slug: string } }) {
    const slug = params.slug;
    const projectData: Project = projectDataMap[slug];
  
    if (!projectData) {
      notFound();
    }
  
    return (
      <main>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'my projects', href: '/projects' },
            {
              label: `${slug}`,
              href: `/projects/${slug}`,
              active: true,
            },
          ]}
        />
  
        <h1 className="title font-medium mb-3 text-2xl tracking-tighter max-w-[650px]">
            {projectData.title}
        </h1>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <div className="mb-4">
            <label className="text-lg font-medium">
                Summary
            </label>
            <p className="text-sm">
                {projectData.summary}
            </p>
        </div>
        <div className="mb-4">
            <label className="text-lg font-medium">
                Tech Stack
            </label>
            <p className="text-sm">
                {projectData.techStack}
            </p>
        </div>
        <div className="mb-4">
            <label className="text-lg font-medium">
                Info
            </label>
            <ul className="text-sm list-disc">
                {projectData.content
                    .map(bulletPoint => (
                        <li>{bulletPoint}</li>
                ))}
            </ul>
        </div>
        <div className="mb-4">
            <label className="text-lg font-medium">
                Images
            </label>
            <div className="my-8 columns-1">
                {projectData.images
                .map(image => (
                    <div className="relative mb-6 h-60 sm:h-80">
                        <Image
                            src={image}
                            key={image}
                            alt="Project image"
                            fill
                            className="rounded-lg object-cover mb-3"
                        />
                    </div>
                ))}
            </div>
        </div>

        
      </main>
    );
  }

