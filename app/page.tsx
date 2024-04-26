import Image from "next/image";
import Link from "next/link";
import short1 from '@/public/images/home/short1.jpg';
import short2 from '@/public/images/home/short2.jpg';
import short3 from '@/public/images/home/short3.jpg';
import long1 from '@/public/images/home/long1.jpg';
import long2 from '@/public/images/home/long2.jpg';
import meetups from '@/public/images/home/meetups.jpg';
import vercel from '@/public/images/home/vercel.jpg';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BlogLink({ slug, name }: {slug: string, name: string}) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          {/* <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense> */}
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

export default function Page() {
  
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey there! I'm Jeff 👋
      </h1>
      <p className="mb-3 prose prose-neutral dark:prose-invert">
        I'm a Front-End Engineer passionate about crafting intuitive digital experiences using modern JavaScript tools and frameworks. I was a key contributor for the front-end development at a startup, driving operational efficiency and revenue growth.
      </p>
      <p className="mb-3">
        From dashboards to mobile web applications, I specialize in utilizing technologies like JavaScript, TypeScript, React, Next.js, Angular, and more to bring ideas to life.
      </p>
      
      <div className="my-8 columns-2 gap-4 sm:columns-3">
        <div className="relative mb-4 h-40">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={short1}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-80 sm:mb-0">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={long1}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:mb-4 sm:h-80">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={short2}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative mb-4 h-40 sm:mb-0">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={long2}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-40">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={short3}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={long1}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
      <p className="mb-3">
      Beyond coding, you'll find me cheering on my favorite sports teams, playing golf, or cherishing quality time with friends and family over good food and drinks.
      </p>
      <p className="mb-3">
      As a lifelong learner, I'm always exploring new technologies and staying informed about the latest trends in web development. Check out some of my work [link to your portfolio], and feel free to dive into the blogs that keep me inspired on this ever-changing journey. Let's connect and create something extraordinary together!
      </p>
      </div>
      {/* <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm still learning as a developer, and I'm open to utilizing different technologies in the future. Here are some blogs that I've been interested in that help keep me informed in this ever changing web dev landscape.
        </p>
      </div> */}
      <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="What Makes A Great Developer Experience?"
          slug="developer-experience-examples"
        />
        <BlogLink name="What is Developer Relations?" slug="devrel-at-vercel" />
        <BlogLink name="The Story of Heroku" slug="heroku" />
      </div>
    </section>
  );
}
