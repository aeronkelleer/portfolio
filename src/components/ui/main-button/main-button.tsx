import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import s from './main-button.module.scss';

// ^======================== MainButton ========================^ //

type MainButtonProps = {
  className: string;
  href: string;
  text: string;
  iconPath: string;
  color?: 'orange' | 'gray';
  onMainButtonClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

function MainButton(mainButtonProps: MainButtonProps): React.JSX.Element {
  const { className, href, text, iconPath, color = 'orange', onMainButtonClick } = mainButtonProps;
  return (
    <Link
      className={clsx(className, s.main_button, s[`_${color}`])}
      href={href}
      onClick={onMainButtonClick}
    >
      <div className={s.blink} />
      <p className={s.text}>{text}</p>
      <Image
        className={s.icon}
        src={iconPath}
        width={10}
        height={10}
        alt=''
      />
    </Link>
  );
}
export default MainButton;