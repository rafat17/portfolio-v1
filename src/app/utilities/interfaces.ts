import { ReactNode } from "react";

export interface IMobileNavMenu {
  children: ReactNode;
}

export interface IButton {
  id?: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  href?: string;
}

export interface IExperienceItem {
  sectionTitle: string;
}

export interface IProjectItem {
  sectionTitle: string;
  title: string;
  description: string;
  technologies: string[];
  view: {
    url: string;
    label: string;
  };
}
