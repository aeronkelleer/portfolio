export const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export enum AppRoute {
  MAIN = '/',
  ABOUT = '/about',
  PROJECTS = '/projects',
}

export const HEADER_MENU_ITEMS = [
  {
    link: AppRoute.MAIN,
    name: 'Home',
  },
  {
    link: AppRoute.ABOUT,
    name: 'About me',
  },
  {
    link: AppRoute.PROJECTS,
    name: 'My projects',
  },
  {
    link: '#contact',
    name: 'Contact',
  },
];

export const PAGE_TRANSITION_TIME = 180;

export enum NameSpace {
  OPEN_ELEMENTS = 'OPEN_ELEMENTS',
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
