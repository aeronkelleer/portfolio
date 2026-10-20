'use client';

import Container from '@/components/shared/container/container';
import Picture from '@/components/shared/picture/picture';
import Background from '@/components/ui/background/background';
import MainButton from '@/components/ui/main-button/main-button';
import MainHeading from '@/components/ui/main-heading/main-heading';
import { AppRoute, basePath, Ext } from '@/constants/const';
import { useMouseMove } from '@/hooks/use-mouse-move';
import { gsap, useGSAP } from '@/lib/gsap';
import { splitTextToParagraphs } from '@/utils/utils';
import clsx from 'clsx';
import { useRef } from 'react';
import s from './hero-section.module.scss';

// @======================== HeroSection ========================@ //

interface HeroSectionProps {
  heading: string;
  text: string;
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
      .from(refs.button_cv.current, {
        xPercent: -25,
        opacity: 0,
      })
      .from(refs.image.current, {
        scale: 0.98,
        opacity: 0,
        xPercent: 2,
      })
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

  return (
    <section className={clsx(s.section)} ref={refs.section}>
      <Background className={s.bg}>
        <div className={clsx(s.circle, s._top)} ref={refs.circles[0]}>
          <div className={s.circleInner} />
        </div>
        <div className={clsx(s.circle, s._bottom)} ref={refs.circles[1]}>
          <div className={s.circleInner} />
        </div>
      </Background>
      <Container>
        <div className={s.inner}>
          <div className={s.info}>
            <MainHeading className={s.heading} ref={refs.heading}>
              {heading}
            </MainHeading>
            <div className={s.text_box} ref={refs.text}>
              {splitTextToParagraphs(text).map((item, index) => (
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
                  text='View Projects'
                  iconPath={`${basePath}/img/icons/go-to-arrow.svg`}
                  color='gray'
                />
              </div>
              <div className={s.button_wrapper} ref={refs.button_cv}>
                <MainButton
                  className={s.button}
                  href=''
                  text='Download CV'
                  iconPath={`${basePath}/img/icons/download-arrow.svg`}
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
