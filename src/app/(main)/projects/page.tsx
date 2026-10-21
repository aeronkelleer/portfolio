import projectsData from '@/../public/data/projects.json';
import ProjectsHero from '@/components/sections/projects-hero/projects-hero';
import { convertKeysToCamelCase } from '@/utils/utils';
import { Metadata } from 'next';

// #======================== WorksPage ========================# //

export const metadata: Metadata = {
  title: 'Portfolio - Projects',
};

export default function Page(): React.JSX.Element {
  const normalizedProjectsData = convertKeysToCamelCase(projectsData);
  
  return (
    <main>
      <ProjectsHero projects={normalizedProjectsData} />
    </main>
  );
}
