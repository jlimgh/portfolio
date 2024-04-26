import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to build products developers{' '}
          <Link href="/blog/developer-experience-examples">love</Link>, and
          along the way, teach the next generation of developers. Here's a
          summary of my work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">The Shaughnessy Group</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Freelance - web development
        </p>
        <p>
          After a layoff, I concentrated on the birth of my newborn son. I started freelancing working with modern technologies developing web applications and small projects. Some of the things I've done are below.
        </p>
        <ul className="list-disc">
          <li>
            Developed and integrated a pilot referral application using React.js, RTK Query, and Redux, resulting in increased user engagement and eligible rewards.
          </li>
          <li>
            Implemented responsive features with Tailwind CSS, Flowbite, and custom CSS, enhancing user satisfaction and accessibility across various devices.
          </li>
          <li>
            Established JWT token-based authentication and page authorization validation for data security and privacy.
          </li>
          <li>
            Built small scale RESTful APIs with Node.js/Express.js and MongoDB for seamless data handling and errors.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">loanDepot</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, 2022
        </p>
        <ul className="list-disc">
            <li>
                Executed compliant web requirements deployment for 2M monthly visitors via Azure pipeline, fostering collaborative innovation in feature ideation and development
            </li>
            <li>
                Resolved UI challenges for loanDepot's web apps using Typescript and responsive design strategies, including Angular, Bootstrap.js, Material, and custom utility classes.
            </li>
            <li>
                Automated functionalities in Angular, leveraging state, cookie, and local storage data. Transformed manual tasks into streamlined features, enhancing efficiency and user experience.
            </li>
            <li>
                Developed reusable UI features and tools in internal NPM libraries. Contributions included updating stylesheets, creating custom components, implementing reactive forms, and ensuring efficient state management for DRY development practices.
            </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">SevenLogics / Gojji Health</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Front-end Engineer, 2018 — 2022
        </p>
        <ul className="list-disc">
            <li>
                Directed front-end development for a chronic disease management app, crucial to its successful launch. Resulted in acquiring tens of thousands of members for the healthcare platform, substantially boosting revenue.
            </li>
            <li>
                Developed complex SaaS dashboards, data visualization tools, and UI modules, enhancing user response times and analytical capabilities by 30%. Utilized Angular, Bootstrap, SCSS, Node.js, and Highcharts.
            </li>
            <li>
                Implemented UI code for shipment workflows and product scans across numerous orders, notably improving operational efficiency and order processing capacity.
            </li>
            <li>
                Applied responsive web design principles to create a mobile web app enabling users to assess their condition and input responses, facilitating the generation of personalized health plans.
            </li>
        </ul>
      </div>
    </section>
  );
}