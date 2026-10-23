import aboutData from '@/../public/data/about.json';
import heroData from '@/../public/data/hero.json';
import projectsData from '@/../public/data/projects.json';
import skillsData from '@/../public/data/skills.json';
import AboutSection from '@/components/sections/about-section/about-section';
import ProjectsSection from '@/components/sections/projects-section/projects-section';
import { convertKeysToCamelCase } from '@/utils/utils';
import { Metadata } from 'next';
import HeroSection from '../components/sections/hero-section/hero-section';

// #======================== HomePage ========================# //

export const metadata: Metadata = {
  title: 'Portfolio Alex Kis',
};

export default async function Page() {
  const normalizedHeroData = convertKeysToCamelCase(heroData);
  const normalizedAboutData = convertKeysToCamelCase(aboutData);
  const normalizedSkillsData = convertKeysToCamelCase(skillsData);
  const normalizedProjectsData = convertKeysToCamelCase(projectsData);

  return (
    <main>
      <HeroSection {...normalizedHeroData} />
      <AboutSection text={normalizedAboutData.concise} skills={normalizedSkillsData.concise} />
      <ProjectsSection projects={normalizedProjectsData} />
    </main>
  );
}
