import { defineStore } from 'pinia';
import { Language, Theme } from './types';

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    lang: (localStorage.getItem('anas-portfolio-lang') as Language) || 'en',
    theme: (localStorage.getItem('anas-portfolio-theme') as Theme) || 'dark',
  }),
  actions: {
    setLang(newLang: Language) {
      this.lang = newLang;
      localStorage.setItem('anas-portfolio-lang', newLang);
      document.documentElement.setAttribute('lang', newLang);
      document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    },
    setTheme(newTheme: Theme) {
      this.theme = newTheme;
      localStorage.setItem('anas-portfolio-theme', newTheme);
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    toggleTheme() {
      this.setTheme(this.theme === 'light' ? 'dark' : 'light');
    },
    init() {
      // Set initial attributes on mount
      document.documentElement.setAttribute('lang', this.lang);
      document.documentElement.setAttribute('dir', this.lang === 'ar' ? 'rtl' : 'ltr');
      if (this.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  },
});
