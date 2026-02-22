export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
}

export const languageFlags = {
  en: '🇮🇳',
  es: '🇪🇸',
  pt: '🇧🇷',
}

export const defaultLang = 'en'

export const showDefaultLang = false

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Intro Card
    'intro.welcome': 'welcome',
    'intro.title':
      "Hi, I'm <b>Akshit Saini</b>, a software developer, systems engineer and tattoo artist with strong focus on the user experience, animations and micro interactions. I love to create beautiful and functional interfaces, I am passionate about technology and I am always looking for new challenges.",
    'intro.sr.github': 'GitHub Profile',
    'intro.sr.linkedin': 'Linkedin Profile',
    'intro.sr.email': 'Email contact',

    // About Me
    'about.title': 'About me',
    'about.description':
      "Hi, I'm Andrés, a fullstack software developer from India 🇮🇳.",
    'about.tools': 'My primary tools of choice includes:',
    'about.hobbies':
      "Beyond coding, I'm passionate about tattoo, soccer and traveling. An unusual hobby of mine is play classical music in the guitar or ukulele.",

    // Now Card
    'now.title': 'Now',
    'now.whatsThat': "what's that ?",
    'now.description': 'Currently working as freelancer',

    // Experience Card
    'experience.title': 'Experience',
    'experience.viewMore': 'View More',

    // CV Card
    'cv.title': 'CV',
    'cv.description':
      'View and download my resume by clicking on the button below',
    'cv.download': 'Download resume',

    // Contacts Card
    'contacts.title': "Let's start working together!",
    'contacts.details': 'Contact Details',
    'contacts.socials': 'Socials',

    // Tattoo Card
    'tattoo.title': 'Instagram tattoo',
    'tattoo.description':
      "If you want to see my tattoo's, you can follow me on Instagram.",

    // Study Card
    'study.title': 'Study',

    // Time Zone Card
    'timezone.title': 'Time zone',

    // Portfolio Page
    'portfolio.title': 'Portfolio',
    'portfolio.description': "Projects and some clone's that I did",
    'portfolio.heading': "Projects and clone's",

    // Work Page
    'work.title': 'Work',
    'work.description': 'Places I have worked.',

    // 404 Page
    '404.title': '404 - Not Found',
    '404.description': '404 Error — this page was not found',
    '404.heading': 'Page not found',
    '404.message': "Sorry, we couldn't find the page you're looking for.",
    '404.goHome': 'Go back home',

    // Home Page
    'home.title': 'Andrés Plaza - Full Stack Developer',
    'home.description':
      'Andrés Plaza - Full Stack Developer - Portfolio, Projects, CV, About Me, Contact, Timezone, Now, Experience, Tattoo, Study',
    'home.portfolio': 'Portfolio & Projects',

    // Quote
    'quote.text': 'Anything one man can imagine, other men can make real.',
    'quote.author': '- Jules Verne',

    // Footer
    'footer.builtBy': 'Built by',
    'footer.with': 'with',
    'footer.using':
      'using Astro and Tailwind CSS. The source code is available on',

    // Experience - Common
    'experience.current': 'Current',

    // Experience - Mercado Libre
    'experience.mercadolibre.company': 'Mercado Libre',
    'experience.mercadolibre.position': 'Software Engineer',
    'experience.mercadolibre.location': 'Bogotá D C, Colombia',
    'experience.mercadolibre.tasks.0':
      'Development and maintenance of scalable web applications using modern technologies',
    'experience.mercadolibre.tasks.1':
      'Collaboration with cross-functional teams to deliver high-quality products',
    'experience.mercadolibre.tasks.2':
      'Implementation of best practices and clean code principles',

    // Experience - Straico
    'experience.straico.company': 'Straico',
    'experience.straico.position': 'Software Engineer',
    'experience.straico.location': 'Bogotá D C, Colombia',
    'experience.straico.tasks.0':
      'Integration of AI services and APIs using React and Tailwind CSS',
    'experience.straico.tasks.1':
      'Design and implementation of MongoDB database schemas and queries',
    'experience.straico.tasks.2':
      'Development of user interfaces with focus on performance and accessibility',

    // Experience - Spot2
    'experience.spot2.company': 'Spot2',
    'experience.spot2.position': 'Software Engineer',
    'experience.spot2.location': 'Mexico City, Mexico',
    'experience.spot2.tasks.0':
      'Full-stack development of the Spot2 platform using React, Redux, and Material UI',
    'experience.spot2.tasks.1':
      'Implementation of interactive maps and location services using Google Maps API',
    'experience.spot2.tasks.2':
      'Development of internal management platform with React and Redux for state management',
    'experience.spot2.tasks.3':
      'Quality assurance, testing, and debugging of production applications',

    // Experience - Imaginamos
    'experience.imaginamos.company': 'Imaginamos',
    'experience.imaginamos.position': 'Frontend Developer',
    'experience.imaginamos.location': 'Bogotá D C, Colombia',
    'experience.imaginamos.tasks.0':
      'Development of responsive web applications using React, Redux, and Material UI',
    'experience.imaginamos.tasks.1':
      'Implementation of features for ETB telecommunications project',
    'experience.imaginamos.tasks.2':
      'Collaboration with design and backend teams to ensure seamless user experience',

    // Experience - INETUM
    'experience.inetum.company': 'INETUM',
    'experience.inetum.position': 'Frontend Developer',
    'experience.inetum.location': 'Bogotá D C, Colombia',
    'experience.inetum.tasks.0':
      'Quality assurance support, bug tracking, and code review processes',
    'experience.inetum.tasks.1':
      'Agile development using SCRUM methodology in cross-functional teams',
    'experience.inetum.tasks.2':
      'Development of Claro projects using React and Angular frameworks',
    'experience.inetum.tasks.3':
      'Implementation of Redux Toolkit for state management, improving development efficiency',

    // Experience - SIG
    'experience.sig.company': 'S I G',
    'experience.sig.position': 'Software Developer',
    'experience.sig.location': 'Bogotá D C, Colombia',
    'experience.sig.tasks.0':
      'Development of admin dashboard using React Admin and Chart.js for data visualization',
    'experience.sig.tasks.1':
      'Implementation of data management and entry forms with validation',

    // Experience - BOOKII
    'experience.bookii.company': 'BOOKII',
    'experience.bookii.position': 'Software Developer',
    'experience.bookii.location': 'Bogotá D C, Colombia',
    'experience.bookii.tasks.0':
      'Collaboration with backend team to develop conversational club features',
    'experience.bookii.tasks.1':
      'Implementation of conversational clubs using Redux for state management',
    'experience.bookii.tasks.2':
      'Localization and content management of Bookii Spanish website',
    'experience.bookii.tasks.3':
      'Static site generation using Gatsby and Contentful CMS for blog content',
  },
} as const

export type Translations = (typeof ui)[typeof defaultLang]
