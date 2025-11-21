import { ReactNode } from 'react';

export interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  text: string;
}
