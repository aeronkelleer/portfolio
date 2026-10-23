'use client';

import { HEADER_MENU_ITEMS, OpenElement } from '@/constants/const';
import { useTransitionLink } from '@/hooks/use-transition-link';
import { dropOpenElement } from '@/store/processes/open-element.slice';
import { useAppDispatch, useAppSelector } from '@/store/store-hooks';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import HeaderLang from '../header-lang/header-lang';
import { getCurrentLanguage } from '@/store/processes/language.slice';
import HeaderLang from '../header-lang/header-lang';
import HeaderSocials from '../header-socials/header-socials';
import s from './menu.module.scss';

// $======================== Menu ========================$ //

type MenuProps = {
  className: string;
};

function Menu(menuProps: MenuProps): React.JSX.Element {
  const { className } = menuProps;

  const { handleTransition } = useTransitionLink();

  const pathname = usePathname();

  const dispatch = useAppDispatch();
  const onHeaderLinkClick = () => {
    dispatch(dropOpenElement(OpenElement.ASIDE));
  };

  const currentLanguage = useAppSelector(getCurrentLanguage);
  const lang = currentLanguage.prefix;

  return (
    <div className={clsx(className, s.menu)}>
      <ul className={s.menu_links}>
        {HEADER_MENU_ITEMS.map(({ link, name }, index) => {
          return (
            <li key={index} className={s.menu_item}>
              <Link
                href={link}
                data-name={name[lang]}
                className={clsx(s.menu_link, { [s._active]: pathname === link })}
                onClick={(e) => {
                  onHeaderLinkClick();
                  if (name['en'] !== 'Contact') {
                    handleTransition(e, link);
                  }
                }}
              >
                <p className={s.link_text}>{name[lang]}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <HeaderLang />
      <HeaderSocials />
    </div>
  );
}
export default Menu;
