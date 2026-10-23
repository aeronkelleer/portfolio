'use client';

import Container from '@/components/layout/container/container';
import Skills from '@/components/layout/skills/skills';
import Heading from '@/components/ui/heading/heading';
import MainButton from '@/components/ui/main-button/main-button';
import { AppRoute, basePath } from '@/constants/const';
import { useTransitionLink } from '@/hooks/use-transition-link';
import { gsap, useGSAP } from '@/lib/gsap';
import { getCurrentLanguage } from '@/store/processes/language.slice';
import { useAppSelector } from '@/store/store-hooks';
import { MultiLangString, SkillType } from '@/types/types';
import { splitTextToParagraphs } from '@/utils/utils';
import { useRef } from 'react';
import s from './about-section.module.scss';

// @======================== AboutSection ========================@ //

interface AboutSectionProps {
  text: MultiLangString;
  skills: SkillType[];
}

export default function AboutSection(props: AboutSectionProps) {
  const { text, skills } = props;

  const refs = {
    section: useRef<HTMLDivElement | null>(null),
    heading: useRef<HTMLDivElement | null>(null),
    textBox: useRef<HTMLDivElement | null>(null),
    skillsHeading: useRef<HTMLHeadingElement | null>(null),
    skillsRows: useRef<(HTMLDivElement | null)[]>([]),
    button: useRef<HTMLDivElement | null>(null),
  };

  useGSAP(() => {
    const animate = (element: HTMLDivElement | null) => {
      gsap.to(element, {
        opacity: 0,
        yPercent: -50,
        stagger: 0.25,
        scrollTrigger: {
          trigger: element,
          start: '50% 25%',
          end: '100% 0%',
          scrub: 1,
        },
      });
    };

    [refs.heading.current, refs.textBox.current, refs.skillsHeading.current, refs.button.current].forEach((element) => {
      animate(element);
    });

    refs.skillsRows.current.forEach((row) => {
      animate(row);
    });
  });

  const { handleTransition } = useTransitionLink();

  const currentLanguage = useAppSelector(getCurrentLanguage);
  const lang = currentLanguage.prefix;

  return (
    <section className={s.section} id='about' ref={refs.section}>
      <Container>
        <div className={s.inner}>
          <div className={s.header}>
            <div className={s.info}>
              <Heading className={s.heading} ref={refs.heading}>
                {lang === 'en' ? 'About me' : 'О себе'}
              </Heading>
              <div className={s.text_box} ref={refs.textBox}>
                {splitTextToParagraphs(text[lang]).map((paragraph, index) => (
                  <p key={index} className={s.text}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <Skills skills={skills} refs={{ heading: refs.skillsHeading, itemRows: refs.skillsRows }} />
          </div>
          <div ref={refs.button}>
            <MainButton
              className={s.button}
              href={AppRoute.ABOUT}
              text={lang === 'en' ? 'Learn more' : 'Узнать больше'}
              iconPath={`${basePath}/img/icons/go-to-arrow.svg`}
              onMainButtonClick={(e) => {
                handleTransition(e, AppRoute.ABOUT);
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
