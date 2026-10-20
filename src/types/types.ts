export type SkillType = {
  skillsGroupTitle: string;
  skillsItems: SkillItem[];
};

export type SkillItem = {
  skillName: string;
  skillIcon: string;
  skillDescription?: string;
};

export type Project = {
  href: string;
  label: string;
  title: string;
  desc: string;
  fullDesc: string;
  technologies: string[];
  imgSrc: string;
  gifSrc?: string;
  gifMobSrc?: string;
};

export type Certificate = {
  path: string;
};

export type Contact = {
  href: string;
  icon: string;
  text: string;
};
