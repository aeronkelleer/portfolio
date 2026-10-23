import { AppRoute, basePath } from '@/constants/const';
import { useGlowingHover } from '@/hooks/use-glowing-hover';
import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import s from './skill.module.scss';

// ^======================== Skill ========================^ //

type SkillProps = {
  className: string;
  skillIcon: string;
  skillName: string;
  skillDescription?: string;
};

export default function Skill(skillProps: SkillProps): React.JSX.Element {
  const { className, skillIcon, skillName, skillDescription } = skillProps;

  const pathname = usePathname();
  const skillRef = useGlowingHover();

  return (
    <li
      className={clsx(className, s.skill, {
        [s._expanded]: pathname === AppRoute.ABOUT,
      })}
    >
      <div className={s.inner} ref={skillRef}>
        <div className={s.icon}>
          <Image src={`${basePath}${skillIcon}`} alt={skillName} width={10} height={20} />
        </div>

        <div className={s.name}>{skillName}</div>
      </div>

      {skillDescription && <p className={s.description}>{skillDescription}</p>}
    </li>
  );
}
