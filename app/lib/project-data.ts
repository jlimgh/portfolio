export type Project = {
    // description: string;
    // title: string;
    // slug: string;
    title: string;
    publishedAt?: string;
    summary: string;
    techStack?: string;
    images: string[];
    repoLink?: string;
    content: string[];
}

export const projectDataMap: Record<string, Project> = {
    'portfolio': {
        title: 'Portfolio',
        summary: 'Portfolio summary',
        techStack: 'Angular, Material, Bootstrap',
        images: ['/images/projects/portfolio1.png'],
        repoLink: 'https://github.com/jlimgh/jlimgh.github.io',
        content: [
          `Portfolio website`,
        ]
      },
      'gojji': {
        title: 'Gojji Health',
        summary: 'Chronic disease management app for user workflow',
        techStack: 'Angular, Typescript, RxJS, Bootstrap, Node.js , MongoDB, Highcharts, S3',
        images: [
          '/images/projects/gojji1.png',
          '/images/projects/gojji3.png',
          '/images/projects/gojji5.png',
          '/images/projects/gojji6.png',
          '/images/projects/gojji7.png',
          '/images/projects/gojji8.png'
        ],
        content: [
          `Directed front-end development crucial to its successful launch. Resulted in acquiring tens of thousands of members for the healthcare platform, substantially boosting revenue.`,
          'Developed complex SaaS dashboards, data visualization tools, and UI modules, enhancing user response times and analytical capabilities by 30%. Utilized Angular, Bootstrap, SCSS, Node.js, and Highcharts.',
          'Handled Reactive forms, state management, and async RESTful api through service RxJs and Observables',
        ]
      },
      'loandepot': {
        title: 'loanDepot',
        summary: 'Supported development of loanDepot’s full catalog of web applications and internal tools',
        techStack: 'Angular, NX, Kentico, NGRX, Jamstack, Bootstrap, Material, C#, Azure pipelines',
        images: [
          '/images/projects/loandepot-card-portfolio.png',
          '/images/projects/loandepot2.png'
        ],
        content: [
          `Built tools and UI features for internal NPM Libraries regarding stylesheet, UI features, reactive forms, and reactive state management.`,
          `Automated functionalities in Angular, leveraging state, cookie, and local storage data. Transformed manual tasks into streamlined features, enhancing efficiency and user experience.`
        ]
      }, 
      'task-postings': {
        title: 'Task Postings',
        summary: 'Tasks app for users to post and view gigs, similar to Craigslist',
        techStack: 'Angular 14, Bootstrap, Material, Node.js, MongoDB',
        repoLink: 'https://github.com/jlimgh/task-postings',
        content: [
          'Implemented forms, routing for different dashboards, and lazy loading modules',
          'Created RESTful API used with Node.js and MongoDB backend'
        ],
        images: [
          '/images/projects/task-posting1.png',
          '/images/projects/task-posting2.png'
        ]
      },
      'registration-form': {
        title: 'Registration Form Example',
        summary: '.NET and Angular Form',
        techStack: 'Angular 14, Reactive Form, Bootstrap, C#, .NET 7',
        repoLink: 'https://github.com/jlimgh/emdsregister',
        content: [
          'Registration reactive form with custom validation example',
          'Container component holds the logic, while the child component is a reusable form component',
          'Client is hooked up to a local C# backend that responds with a mocked result'
        ],
        images: [
          '/images/projects/registration1.png'
        ]
      },
      specialty: {
        title: 'Specialty Pharmacy',
        summary: 'Dashboard for pharamcy workflows',
        techStack: 'Angular, Bootstrap, Node.js, MongoDB',
        content: [
          'SaaS for the use of pharmacists and clinicians to help patients',
          'Implemented dashboard requirements for patient features and user workflows',
          'Utilized reactive forms, RxJS, routing, and container and presentational components',
          'One way data flow through the use of a data store class and observables inside a service'
        ],
        images: [
          '/images/projects/specialty1.png',
          '/images/projects/specialty2.png',
          '/images/projects/specialty3.png',
          '/images/projects/specialty4.png'
        ]
      },
      'gift-list': {
        title: 'Gift List Calculator',
        summary: 'Gift list summary',
        techStack: 'React, Redux, Bulma',
        content: [
          'Users can add gifts from sender and it will show the total amount',
          'Search feature and duplicate gift notification'
        ],
        images: [
          '/images/projects/giftlist1.png'
        ]
      },
      'moodboard': {
        title: 'Moodboard Album',
        summary: 'Moodboardsummary',
        techStack: 'React, Redux, Tailwind',
        content: [
          'Users can have multiple albums, and each album can have multiple moodboard photos',
        ],
        images: [
          '/images/projects/moodboard1.png'
        ]
      },
      'bloom': {
        title: 'Bloom',
        summary: 'Bloom summary',
        techStack: 'AngularJS, Node.js, MySQL, Bootstrap',
        images: [
          '/images/projects/bloom1-min.png',
          '/images/projects/bloom2-min.png',
          '/images/projects/bloom3-min.png',
        ],
        content: [
          `Implemented RESTful API calls to m2x server and and rendered live data from microcontroller hardware.`,
          `Created plant notification triggers from m2x server to notify users when plant status levels are in danger`,
          `Incorporated Bootstrap and CSS to build overall user functionality design and responsiveness.`
        ]
      }
}
