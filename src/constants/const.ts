import { Language } from '@/types/types';

export const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export enum AppRoute {
  MAIN = '/',
  ABOUT = '/about',
  PROJECTS = '/projects',
}

export const HEADER_MENU_ITEMS = [
  {
    link: AppRoute.MAIN,
    name: { en: 'Home', ru: 'Главная' },
  },
  {
    link: AppRoute.ABOUT,
    name: { en: 'About me', ru: 'О себе' },
  },
  {
    link: AppRoute.PROJECTS,
    name: { en: 'My projects', ru: 'Мои проекты' },
  },
  {
    link: '#contact',
    name: { en: 'Contact', ru: 'Контакты' },
  },
];

export const PAGE_TRANSITION_TIME = 180;

export const LANGUAGES: Language[] = [
  {
    name: 'English',
    prefix: 'en',
  },
  {
    name: 'Russian',
    prefix: 'ru',
  },
];

export enum NameSpace {
  OPEN_ELEMENTS = 'OPEN_ELEMENTS',
  LANGUAGE = 'LANGUAGE',
}

export enum OpenElement {
  ASIDE = 'ASIDE',
}

export enum Ext {
  PNG = '.png',
  WEBP = '.webp',
  SVG = '.svg',
  GIF = '.gif',
  JPEG = '.jpeg',
}

export enum MediaPrefix {
  FULL = '_full',
  DESK = '_desk',
  TAB = '_tab',
  MOB = '_mob',
}

export enum ViewportWidth {
  FULLHD = 1920,
  DESKTOP = 1440,
  LAPTOP = 1024,
  TABLET = 768,
  MIDDLE = 544,
  MOBILE = 320,
}
