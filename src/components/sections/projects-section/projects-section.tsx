'use client';

import Container from '@/components/layout/container/container';
import ProjectsList from '@/components/layout/projects-list/projects-list';
import Heading from '@/components/ui/heading/heading';
import MainButton from '@/components/ui/main-button/main-button';
import { AppRoute, basePath } from '@/constants/const';
import { useTransitionLink } from '@/hooks/use-transition-link';
import { getCurrentLanguage } from '@/store/processes/language.slice';
import { useAppSelector } from '@/store/store-hooks';
import { LocalizedProject } from '@/types/types';
import s from './projects-section.module.scss';

// @======================== ProjectsSection ========================@ //

interface ProjectsSectionProps {
  projects: LocalizedProject[] | null;
}

export default function ProjectsSection(props: ProjectsSectionProps) {
  const { projects } = props;

  if (!projects) return;

  const projectsList = projects.slice(0, 4);
  const { handleTransition } = useTransitionLink();

  const currentLanguage = useAppSelector(getCurrentLanguage);
  const lang = currentLanguage.prefix;

  return (
    <section className={s.projects_section} id='projects'>
      <Container>
        <div className={s.inner}>
          <Heading className={s.heading}>{lang === 'en' ? 'My projects' : 'Мои проекты'}</Heading>
          <MainButton
            className={s.button}
            href={AppRoute.PROJECTS}
            text='See more'
            iconPath={`${basePath}/img/icons/go-to-arrow.svg`}
            onMainButtonClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              handleTransition(e, AppRoute.PROJECTS);
            }}
          />
          <ProjectsList projects={projectsList} className={s.list} />
        </div>
      </Container>
    </section>
  );
}
