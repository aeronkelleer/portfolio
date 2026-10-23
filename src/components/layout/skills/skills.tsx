'use client';

import Heading from '@/components/ui/heading/heading';
import Skill from '@/components/ui/skill/skill';
import { AppRoute } from '@/constants/const';
import { getCurrentLanguage } from '@/store/processes/language.slice';
import { useAppSelector } from '@/store/store-hooks';
import { SkillType } from '@/types/types';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { RefObject } from 'react';
import Container from '../container/container';
import s from './skills.module.scss';

// @======================== Skills ========================@ //

type SkillsProps = {
  skills: SkillType[];
  refs?: {
    heading: RefObject<HTMLHeadingElement | null>;
    itemRows: RefObject<(HTMLDivElement | null)[]>;
  };
};

export default function Skills(skillsProps: SkillsProps) {
  const { skills, refs } = skillsProps;
  const pathname = usePathname();

  const currentLanguage = useAppSelector(getCurrentLanguage);
  const lang = currentLanguage.prefix;

  return (
    <div className={clsx(s.skills, { [s._expanded]: pathname === AppRoute.ABOUT })}>
      <Heading className={s.heading} ref={refs?.heading} type='small'>
        {lang === 'en' ? 'My skills' : 'Мои навыки'}
      </Heading>
      <Container className={s.container}>
        {skills.map(({ skillsGroupTitle, skillsItems }, index) => {
          return (
            <div
              key={index}
              className={s.group}
              ref={(el) => {
                if (el && refs) refs.itemRows.current[index] = el;
              }}
            >
              <p className={s.group_title}>{skillsGroupTitle[lang]}</p>
              <ul className={s.list}>
                {skillsItems.map(({ skillIcon, skillName, skillDescription }, index) => (
                  <Skill
                    className={s.list_item}
                    key={index}
                    skillIcon={skillIcon}
                    skillName={typeof skillName === 'string' ? skillName : skillName[lang]}
                    skillDescription={
                      skillDescription
                        ? typeof skillDescription === 'string'
                          ? skillDescription
                          : skillDescription[lang]
                        : undefined
                    }
                  />
                ))}
              </ul>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
