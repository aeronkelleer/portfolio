import Icon from '@/components/ui/icon/icon';
import { HEADER_SOCIALS_ITEMS } from '@/constants/header-socials-items';
import s from './header-socials.module.scss';

// ^======================== HeaderSocials ========================^ //

export default function HeaderSocials(): React.JSX.Element {
  return (
    <div className={s.headerSocials}>
      <ul className={s.list}>
        {HEADER_SOCIALS_ITEMS.map(({ href, label, icon }, index) => {
          return (
            <li key={index} className={s.item}>
              <a href={href} className={s.link} aria-label={label} target='_blank'>
                <Icon className={s.icon} src={icon} width={10} height={10} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
