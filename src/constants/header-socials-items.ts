import { basePath } from './const';

type HeaderSocialItem = {
  href: string;
  label: string;
  icon: string;
};

export const HEADER_SOCIALS_ITEMS: HeaderSocialItem[] = [
  {
    href: 'https://t.me/alexx_kis',
    label: 'telegram',
    icon: `${basePath}/img/icons/telegram-icon.svg`,
  },
  {
    href: 'https://github.com/aeronkelleer',
    label: 'github',
    icon: `${basePath}/img/icons/github-icon.svg`,
  },
  {
    href: 'mailto:aeronkelleer@gmail.com',
    label: 'mail',
    icon: `${basePath}/img/icons/email-icon.svg`,
  },
  {
    href: 'tel:+79995251970',
    label: 'phone',
    icon: `${basePath}/img/icons/phone-icon.svg`,
  },
];