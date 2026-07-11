<template>
  <footer
    id="main-footer"
    class="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50 py-16 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden text-center"
  >
    <div class="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center gap-10">
      
      <!-- Top brand logo signature -->
      <div class="flex flex-col items-center gap-2">
        <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-teal-500/10 mb-2">
          <Sparkles class="w-6 h-6 animate-pulse" />
        </div>
        <span class="font-sans font-black text-2xl tracking-widest text-slate-950 dark:text-white uppercase">
          ANAS<span class="text-teal-500">.</span>
        </span>
        <span class="text-xs font-mono text-slate-400 uppercase tracking-widest">
          {{ store.lang === 'en' ? 'Architecting Digital Excellence' : 'هندسة وبرمجة الواجهات الرقمية' }}
        </span>
      </div>

      <!-- Dynamic Social Icons with custom background hover scales -->
      <div class="flex items-center gap-4 animate-fade-in">
        <a
          v-for="(sl, index) in socialLinks"
          :key="index"
          :href="sl.url"
          target="_blank"
          rel="noopener noreferrer"
          class="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shadow-sm transition-all cursor-pointer hover:scale-110 hover:-translate-y-1 active:scale-95"
          :class="sl.color"
          :title="sl.name"
        >
          <component :is="sl.icon" class="w-5 h-5" />
        </a>
      </div>

      <!-- Quick Nav list -->
      <ul class="flex items-center gap-6 sm:gap-8 flex-wrap justify-center font-sans text-sm font-medium text-slate-500 dark:text-slate-400">
        <li v-for="sec in ['hero', 'about', 'skills', 'services', 'projects', 'contact']" :key="sec">
          <button
            @click="scrollToSection(sec)"
            class="hover:text-teal-500 transition-colors cursor-pointer capitalize"
          >
            {{ sec === 'hero' ? t.navHome : sec === 'about' ? t.navAbout : sec === 'skills' ? t.navSkills : sec === 'services' ? t.navServices : sec === 'projects' ? t.navProjects : t.navContact }}
          </button>
        </li>
      </ul>

      <!-- Divider -->
      <div class="w-full max-w-4xl h-px bg-slate-200/60 dark:bg-slate-800/60" />

      <!-- Legal & Back To Top row -->
      <div class="flex flex-col sm:flex-row justify-between items-center w-full max-w-4xl gap-6">
        <div class="text-sm text-slate-400 dark:text-slate-500 font-sans flex items-center gap-1 flex-wrap justify-center">
          <span>&copy; {{ currentYear }} {{ t.footerMadeBy }}.</span>
          <span class="hidden sm:inline">|</span>
          <span>{{ t.footerRights }}</span>
        </div>

        <button
          @click="handleScrollTop"
          class="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-sans text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 cursor-pointer shadow-sm transition-all hover:-translate-y-0.5 active:scale-95"
        >
          <ArrowUp class="w-4 h-4 text-teal-500" />
          <span>{{ t.footerBackToTop }}</span>
        </button>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePortfolioStore } from '../store';
import { TRANSLATIONS } from '../translations';
import { Github, Phone, Facebook, Mail, ArrowUp, Sparkles } from 'lucide-vue-next';

const store = usePortfolioStore();
const t = computed(() => (TRANSLATIONS as any)[store.lang]);
const currentYear = computed(() => new Date().getFullYear());

const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const scrollToSection = (sec: string) => {
  const el = document.getElementById(sec);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const socialLinks = computed(() => [
  {
    name: "GitHub",
    url: "https://github.com/anasAboAli",
    icon: Github,
    color: "hover:bg-slate-900 hover:text-white"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/970598143863",
    icon: Phone,
    color: "hover:bg-emerald-500 hover:text-white"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1DPgVdnvMn/",
    icon: Facebook,
    color: "hover:bg-blue-600 hover:text-white"
  },
  {
    name: "Email",
    url: "mailto:anas.akram8143863@gmail.com",
    icon: Mail,
    color: "hover:bg-teal-500 hover:text-white"
  }
]);
</script>
