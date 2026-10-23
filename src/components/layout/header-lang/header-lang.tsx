'use client';

import { basePath, LANGUAGES } from '@/constants/const';
import { changeLanguage, getCurrentLanguage } from '@/store/processes/language.slice';
import { useAppDispatch, useAppSelector } from '@/store/store-hooks';
import { Language } from '@/types/types';
import Image from 'next/image';
import s from './header-lang.module.scss';

export default function HeaderLang(): React.JSX.Element {
  const currentLanguage = useAppSelector(getCurrentLanguage);
  const otherLanguages = LANGUAGES.filter((lang) => lang.prefix !== currentLanguage.prefix);
  const dispatch = useAppDispatch();

  const handleButtonClick = (lang: Language) => {
    dispatch(changeLanguage(lang));
  };

  return (
    <div className={s.headerLang}>
      <div className={s.selected}>
        <div className={s.icon}>
          <Image
            src={`${basePath}/img/icons/${currentLanguage.prefix}.svg`}
            width={45}
            height={45}
            alt={currentLanguage.name}
          />
        </div>
        <div className={s.name}>{currentLanguage.prefix.toUpperCase()}</div>
      </div>

      <div className={s.dropdown}>
        {otherLanguages.map((lang) => (
          <div key={lang.prefix} className={s.dropdown_item}>
            <button type='button' className={s.dropdown_link} onClick={() => handleButtonClick(lang)}>
              <div className={s.icon}>
                <Image src={`${basePath}/img/icons/${lang.prefix}.svg`} width={45} height={45} alt={lang.name} />
              </div>
              <div className={s.dropdown_name}>{lang.prefix.toUpperCase()}</div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
