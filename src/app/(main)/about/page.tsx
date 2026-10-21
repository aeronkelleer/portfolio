import aboutData from '@/../public/data/about.json';
import certificatesData from '@/../public/data/certificates.json';
import skillsData from '@/../public/data/skills.json';
import Certificates from '@/components/layout/certificates/certificates';
import Container from '@/components/layout/container/container';
import Skills from '@/components/layout/skills/skills';
import AboutHero from '@/components/sections/about-hero/about-hero';
import { convertKeysToCamelCase } from '@/utils/utils';
import { Metadata } from 'next';

// #======================== AboutPage ========================# //

export const metadata: Metadata = {
  title: 'Portfolio - About',
};

export default function Page(): React.JSX.Element {
  const normalizedAboutData = convertKeysToCamelCase(aboutData);
  const normalizedSkillsData = convertKeysToCamelCase(skillsData);
  const normalizedCertificatesData = convertKeysToCamelCase(certificatesData);

  return (
    <main>
      <AboutHero text={normalizedAboutData.detailed} />

      <section>
        <Container>
          <Skills skills={normalizedSkillsData.expanded} />
        </Container>
      </section>

      <section>
        <Container>
          <Certificates certificates={normalizedCertificatesData} />
        </Container>
      </section>
    </main>
  );
}
