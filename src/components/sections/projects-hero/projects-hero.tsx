import ProjectsList from '@/components/layout/projects-list/projects-list';
import Container from '@/components/shared/container/container';
import Heading from '@/components/ui/heading/heading';
import { Project } from '@/types/types';
import s from './projects-hero.module.scss';

// @======================== ProjectsHero ========================@ //

interface ProjectsHeroProps {
  projects: Project[];
}

function ProjectsHero(props: ProjectsHeroProps): React.JSX.Element {
  const { projects } = props;

  return (
    <section className={s.projects_hero}>
      <Container>
        <Heading className={s.heading}>My Projects</Heading>
        <ProjectsList projects={projects} className={s.list} />
      </Container>
    </section>
  );
}
export default ProjectsHero;
