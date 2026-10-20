'use client';

import { AppRoute, basePath } from '@/constants/const';
import { splitTextToParagraphs } from '@/utils/utils';
import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import s from './project-card.module.scss';

// ^======================== Project ========================^ //

type ProjectCardProps = {
  className: string;
  href: string;
  label: string;
  title: string;
  desc: string;
  fullDesc: string;
  technologies: string[],
  imgSrc: string;
  gifSrc?: string;
  gifMobSrc?: string;
};

export default function ProjectCard(projectCardProps: ProjectCardProps): React.JSX.Element {
  const { className, href, label, title, desc, fullDesc, technologies, imgSrc, gifSrc, gifMobSrc } = projectCardProps;
  // const [isHovered, setIsHovered] = useState(false);
  // const isMobileScreen = useMediaQuery(MediaQuery.MOBILE);

  const pathname = usePathname();
  const isDetailed = pathname === AppRoute.PROJECTS;

  return (
    <li
      className={clsx(className, s.project_card, { [s._detailed]: isDetailed })}
    // onMouseEnter={() => {
    //   setIsHovered(true);
    // }}
    // onMouseLeave={() => {
    //   setIsHovered(false);
    // }}
    >
      <a href={href} className={s.link} aria-label={label} target='_blank'>
        <div className={s.image_box}>
          <Image
            className={s.image}
            // src={!isMobileScreen ? (isHovered ? gifSrc : imgSrc) : gifMobSrc}
            src={`${basePath}/${imgSrc}`}
            alt=''
            width={417}
            height={234}
          />
        </div>
        <div className={s.info}>
          <p className={s.title}>{title}</p>
          <div className={s.description_box}>
            {splitTextToParagraphs(isDetailed ? fullDesc : desc).map((paragraph, index) => (
              <p key={index} className={s.description}>{paragraph}</p>
            ))}
          </div>
          <ul className={s.technologies}>
            {technologies.map((item) => (
              <li key={item} className={s.technology}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </li>
  );
}