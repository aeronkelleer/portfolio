export type SkillType = {
  skillsGroupTitle: MultiLangString;
  skillsItems: SkillItem[];
};

export type SkillItem = {
  skillName: string | MultiLangString;
  skillIcon: string;
  skillDescription?: string | MultiLangString;
};

export type Project = {
  href: string;
  label: string;
  title: string;
  desc: string;
  fullDesc: string;
  technologies: string[];
  imgSrc: string;
};

export type LocalizedProject = Omit<Project, 'title' | 'desc' | 'fullDesc'> & {
  title: string | MultiLangString;
  desc: string | MultiLangString;
  fullDesc: string | MultiLangString;
};

export type Certificate = {
  path: string;
};

export type Contact = {
  href: string;
  icon: string;
  text: string;
};

export type Language = {
  name: string;
  prefix: 'en' | 'ru';
};

export interface HeroSectionData {
  heading: string;
  text: string;
}

export interface AboutSectionData {
  text: string;
  skills: SkillType[];
}

export interface MultiLangString {
  en: string;
  ru: string;
}
