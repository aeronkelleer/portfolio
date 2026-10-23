'use client';

import ProjectCard from '@/components/ui/project-card/project-card';
import { AppRoute } from '@/constants/const';
import { getCurrentLanguage } from '@/store/processes/language.slice';
import { useAppSelector } from '@/store/store-hooks';
import { LocalizedProject } from '@/types/types';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import s from './projects-list.module.scss';

// $======================== Projects ========================$ //

type ProjectsProps = {
  projects: LocalizedProject[];
  className: string;
};

export default function ProjectsList(projectsProps: ProjectsProps): React.JSX.Element {
  const { projects, className } = projectsProps;

  const pathname = usePathname();
  const isDetailed = pathname === AppRoute.PROJECTS;

  const currentLanguage = useAppSelector(getCurrentLanguage);
  const lang = currentLanguage.prefix;

  return (
    <ul
      className={clsx(className, s.projects_list, {
        [s._detailed]: isDetailed,
      })}
    >
      {projects.map((project) => (
        <ProjectCard
          className={s.item}
          key={project.label}
          {...project}
          title={typeof project.title === 'string' ? project.title : project.title[lang]}
          desc={typeof project.desc === 'string' ? project.desc : project.desc[lang]}
          fullDesc={typeof project.fullDesc === 'string' ? project.fullDesc : project.fullDesc[lang]}
        />
      ))}
    </ul>
  );
}
