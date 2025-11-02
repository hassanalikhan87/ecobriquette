import type { ReactNode } from "react";

export type Highlight = {
  title: string;
  description: string;
  Icon: () => ReactNode;
};

export type Stat = {
  value: string;
  label: string;
};

export type Application = {
  title: string;
  points: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};
