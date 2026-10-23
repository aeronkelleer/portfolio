'use client';

import Container from '@/components/layout/container/container';
import Heading from '@/components/ui/heading/heading';
import { basePath } from '@/constants/const';
import { getCurrentLanguage } from '@/store/processes/language.slice';
import { useAppSelector } from '@/store/store-hooks';
import { MultiLangString } from '@/types/types';
import { splitTextToParagraphs } from '@/utils/utils';
import Image from 'next/image';
import s from './about-hero.module.scss';

// @======================== AboutHero ========================@ //

interface AboutHeroProps {
  text: MultiLangString;
}

export default function AboutHero(props: AboutHeroProps): React.JSX.Element {
  const { text } = props;

  const currentLanguage = useAppSelector(getCurrentLanguage);
  const lang = currentLanguage.prefix;

  return (
    <section className={s.about_hero}>
      <Container>
        <div className={s.inner}>
          <Heading className={s.heading}>{lang ==='en' ? 'About me' : 'О себе'}</Heading>
          <div className={s.content}>
            <div className={s.image_wrapper}>
              <Image src={`${basePath}/img/avatar-big.png`} alt='' width={1061} height={1108} />
            </div>
            <div className={s.text_box}>
              {splitTextToParagraphs(text[lang]).map((paragraph) => (
                <p key={paragraph} className={s.text}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
