import { ReactNode } from "react";

export interface IMobileNavMenu {
  children: ReactNode;
}

export interface IButton {
  onClick: () => void;
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
