'use client';

import ProjectCard from '@/components/ui/project-card/project-card';
import { AppRoute } from '@/constants/const';
import { Project } from '@/types/types';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import s from './projects-list.module.scss';

// $======================== Projects ========================$ //

type ProjectsProps = {
  projects: Project[];
  className: string;
};

export default function ProjectsList(projectsProps: ProjectsProps): React.JSX.Element {
  const { projects, className } = projectsProps;

  const pathname = usePathname();
  const isDetailed = pathname === AppRoute.PROJECTS;

  return (
    <ul className={clsx(className, s.projects_list, { [s._detailed]: isDetailed })}>
      {projects.map((project) => {
        return <ProjectCard className={s.item} key={project.label} {...project} />;
      })}
    </ul>
  );
}
