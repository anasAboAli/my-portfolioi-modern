/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
  details: string;
  detailsAr: string;
  category: string;
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  titleAr: string;
  organization: string;
  organizationAr: string;
  description: string;
  descriptionAr: string;
  type: 'work' | 'education';
}

export interface ServiceItem {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  iconName: string;
  colorClass: string;
}

export interface BlogPost {
  id: number;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  date: string;
  dateAr: string;
  readTime: string;
  readTimeAr: string;
  image: string;
  tags: string[];
}

export interface FAQItem {
  id: number;
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
}

export interface Testimonial {
  id: number;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  text: string;
  textAr: string;
  company: string;
  avatar: string;
}

export interface CertificateItem {
  id: number;
  title: string;
  titleAr: string;
  issuer: string;
  issuerAr: string;
  date: string;
  dateAr: string;
  link?: string;
}

export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';
