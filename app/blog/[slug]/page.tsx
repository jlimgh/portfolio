import Breadcrumbs from '@/app/components/breadcrumbs';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogPosts } from '@/app/db/blog';
import { unstable_noStore as noStore } from 'next/cache';
import { Suspense } from 'react';
import { CustomMDX } from '@/app/components/mdx';

export const metadata: Metadata = {
  title: 'Blog Details',
};

function formatDate(date: string) {
  noStore();
  let currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
}
 
export default async function Page({ params }:{ params: { slug: string } }) {
  const slug = params.slug;
//   const projectData: Project = projectDataMap[slug];
  // test 
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  console.log('post: ', post);
  if (!post) {
    return;
  }

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'blog', href: '/blog' },
          {
            label: `${slug}`,
            href: `/projects/${slug}`,
            active: true,
          },
        ]}
      />

      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
      
    </main>
  );
}