'use client';

import Heading from '@/components/ui/heading/heading';
import Skill from '@/components/ui/skill/skill';
import { AppRoute } from '@/constants/const';
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

  return (
    <div className={clsx(s.skills, { [s._expanded]: pathname === AppRoute.ABOUT })}>
      <Heading className={s.heading} ref={refs?.heading} type='small'>
        My skills
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
              <p className={s.group_title}>{skillsGroupTitle}</p>
              <ul className={s.list}>
                {skillsItems.map(({ skillIcon, skillName, skillDescription }, index) => {
                  return (
                    <Skill
                      className={s.list_item}
                      key={index}
                      skillIcon={skillIcon}
                      skillName={skillName}
                      skillDescription={skillDescription}
                    />
                  );
                })}
              </ul>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
