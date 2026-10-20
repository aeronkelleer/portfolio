import { basePath } from '@/constants/const';
import { WorkType as ProjectType } from '@/types/types';

export const PROJECTS: ProjectType[] = [
  {
    href: 'https://advline.ru/',
    label: 'advline',
    title: 'Advline',
    desc: 'A production-ready multi-page corporate website built with Next.js and TypeScript using SSR. Features dynamic content, API integrations, contact forms, and animated UI elements. Live in production.',
    fullDesc: 'A multi-page corporate website built with Next.js and TypeScript using server-side rendering. The project includes service pages, case studies, articles, vacancies, and team sections.\nDynamic content is loaded from both external and internal APIs, including job listings from hh.ru and articles managed via a backend admin panel. Article content is received as structured JSON and rendered on a single dynamic page. Contact forms and scroll-based UI animations are implemented using GSAP.\nThe website is deployed on a server using PM2 and is running in production.',
    technologies: ['Next.js', 'SCSS', 'TypeScript', 'SSR', 'GSAP'],
    imgSrc: `${basePath}/img/projects/advline.png`,
  },
  {
    href: 'https://paradocs.ru/',
    label: 'paradocs',
    title: 'Paradocs',
    desc: 'A multi-page content-focused website built with Next.js and TypeScript, fully managed via a backend admin panel. Includes SSR, contact forms, theme switching, and scroll-based animations.',
    fullDesc: 'A content-focused multi-page website built with Next.js and TypeScript, fully managed through a backend admin panel. All textual content is dynamically loaded, allowing editors to update pages without frontend changes.\nThe project uses server-side rendering for performance and SEO. It includes contact forms, light and dark theme switching implemented with CSS variables, and scroll-based animations using GSAP.\nThe website is running in production.',
    technologies: ['Next.js', 'TypeScript', 'SCSS', 'SSR', 'GSAP'],
    imgSrc: `${basePath}/img/projects/paradocs.png`,
  },
  {
    href: 'https://dev.msmedias.ru/weba-ecosystem/out/',
    label: 'weba-ecosystem',
    title: 'Weba Ecosystem Brandbook',
    desc: 'An interactive multi-page brand presentation built with Next.js, featuring a particle-based 3D logo and internal pages for different ecosystem services. Implemented with Three.js as a visual showcase.',
    fullDesc: 'An interactive multi-page brand presentation built with Next.js, designed to showcase the visual identity of the Weba ecosystem and its services.\nThe main page features a particle-based 3D logo with user interaction, implemented using Three.js and WebGL. Internal pages follow a consistent structure and interaction pattern.\nThe project was created as a presentation and demonstration website.',
    technologies: ['Next.js', 'TypeScript', 'SCSS', 'Three.js', 'WebGL'],
    imgSrc: `${basePath}/img/projects/weba-ecosystem.png`,
  },
  {
    href: 'https://my.weba.net/',
    label: 'weba-account',
    title: 'Weba — Personal Account',
    desc: 'A production SPA customer dashboard built with React and TypeScript. Includes user authentication, account data display, and API integration.',
    fullDesc: 'A production single-page application built with React, TypeScript, and Vite for an internet service provider’s customers.\nThe dashboard includes user authentication, account data display, and feedback forms. The frontend is fully integrated with an external API provided by the backend team.\nThe application is actively used by real customers.',
    technologies: ['React', 'SCSS', 'TypeScript', 'Vite', 'Redux'],
    imgSrc: `${basePath}/img/projects/weba-account.png`,
  },
];