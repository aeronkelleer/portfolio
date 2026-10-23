'use client';

import Container from '@/components/layout/container/container';
import Picture from '@/components/shared/picture/picture';
import Background from '@/components/ui/background/background';
import Heading from '@/components/ui/heading/heading';
import MainButton from '@/components/ui/main-button/main-button';
import { AppRoute, basePath, Ext } from '@/constants/const';
import { useMouseMove } from '@/hooks/use-mouse-move';
import { gsap, useGSAP } from '@/lib/gsap';
import { getCurrentLanguage } from '@/store/processes/language.slice';
import { useAppSelector } from '@/store/store-hooks';
import { MultiLangString } from '@/types/types';
import { splitTextToParagraphs } from '@/utils/utils';
import clsx from 'clsx';
import Image from 'next/image';
import { useRef } from 'react';
import s from './hero-section.module.scss';

// @======================== HeroSection ========================@ //

interface HeroSectionProps {
  heading: MultiLangString;
  text: MultiLangString;
}

export default function HeroSection(props: HeroSectionProps) {
  const { heading, text } = props;

  const refs = {
    section: useRef<HTMLDivElement | null>(null),
    heading: useRef<HTMLHeadingElement | null>(null),
    text: useRef<HTMLDivElement | null>(null),
    button_projects: useRef<HTMLDivElement | null>(null),
    button_cv: useRef<HTMLDivElement | null>(null),
    image: useRef<HTMLDivElement | null>(null),
    circles: [useRef<HTMLDivElement | null>(null), useRef<HTMLDivElement | null>(null)],
  };

  useGSAP(() => {
    gsap
      .timeline({
        defaults: {
          duration: 0.3,
          ease: 'power2.out',
        },
      })
      .to(refs.section.current, {
        autoAlpha: 1,
      })
      .from(refs.heading.current, {
        xPercent: -25,
        opacity: 0,
      })
      .from(refs.text.current, {
        xPercent: -25,
        opacity: 0,
      })
      .from(refs.button_projects.current, {
        xPercent: -25,
        opacity: 0,
      })
      .from(refs.button_cv.current, {
        xPercent: -25,
        opacity: 0,
      })
      .from(
        refs.image.current,
        {
          scale: 0.99,
          opacity: 0,
          xPercent: 2,
        },
        '<',
      )
      .from(refs.circles[0].current, {
        scale: 0.5,
        opacity: 0,
        ease: 'back',
      })
      .from(refs.circles[1].current, {
        scale: 0.5,
        opacity: 0,
        ease: 'back',
      });
  });

  useMouseMove(refs.circles[0], 10);
  useMouseMove(refs.circles[1], 20);

  const currentLanguage = useAppSelector(getCurrentLanguage);
  const lang = currentLanguage.prefix;

  return (
    <section className={clsx(s.section)} ref={refs.section}>
      <Background className={s.bg}>
        <div className={clsx(s.circle, s._top)} ref={refs.circles[0]}>
          <div className={s.circleInner} />
        </div>
        <div className={clsx(s.circle, s._bottom)} ref={refs.circles[1]}>
          <div className={s.circleInner} />
        </div>
        <Image src={`${basePath}/img/bg/background.png`} alt='background' fill />
      </Background>
      <Container>
        <div className={s.inner}>
          <div className={s.info}>
            <Heading className={s.heading} ref={refs.heading} type='main'>
              {heading[lang]}
            </Heading>
            <div className={s.text_box} ref={refs.text}>
              {splitTextToParagraphs(text[lang]).map((item, index) => (
                <p key={index} className={s.text}>
                  {item}
                </p>
              ))}
            </div>
            <div className={s.button_box}>
              <div className={s.button_wrapper} ref={refs.button_projects}>
                <MainButton
                  className={s.button}
                  href={AppRoute.PROJECTS}
                  text={lang === 'en' ? 'View Projects' : 'Смотреть проекты'}
                  iconPath={`${basePath}/img/icons/go-to-arrow.svg`}
                  color='gray'
                />
              </div>
              <div className={s.button_wrapper} ref={refs.button_cv}>
                <MainButton
                  className={s.button}
                  href={`${basePath}/files/aleksandr_shirokov_cv_${lang}.pdf`}
                  text={lang === 'en' ? 'Download CV' : 'Скачать резюме'}
                  iconPath={`${basePath}/img/icons/download-arrow.svg`}
                  download
                />
              </div>
            </div>
          </div>
          <div className={s.image_box} ref={refs.image}>
            <Picture
              className={s.image}
              src={`${basePath}/img/avatar-big`}
              extensions={[Ext.WEBP, Ext.PNG]}
              size={[1080]}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
