<template>
  <section
    id="why-hire-me"
    class="py-24 bg-slate-50 dark:bg-slate-900/40 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <!-- Left Column: Descriptive pitch and cards -->
        <div class="lg:col-span-6 text-left rtl:text-right">
          <h2
            class="text-base font-mono text-teal-500 dark:text-teal-400 uppercase tracking-widest font-semibold"
          >
            {{ t.whyHireTitle }}
          </h2>
          <h3
            class="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3 mb-6"
          >
            {{ t.whyHireSubtitle }}
          </h3>
          
          <div class="space-y-6 mt-8">
            <div
              v-for="(prop, idx) in valueProps"
              :key="idx"
              class="flex gap-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm transition-transform duration-300 hover:translate-x-1"
            >
              <div class="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center shrink-0 shadow-inner">
                <component :is="prop.icon" class="w-5 h-5" :class="prop.colorClass" />
              </div>
              <div>
                <h4 class="text-base font-sans font-bold text-slate-900 dark:text-white mb-1">
                  {{ prop.title }}
                </h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {{ prop.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Visual metrics block -->
        <div class="lg:col-span-6 grid grid-cols-2 gap-6 relative">
          <!-- Absolute visual gradient backglow -->
          <div class="absolute inset-0 bg-radial from-teal-500/10 to-transparent blur-[100px] pointer-events-none" />

          <!-- Stat Item 1 -->
          <div
            class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-center text-center items-center group relative overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-teal-500" />
            <span class="text-4xl md:text-5xl font-sans font-extrabold text-slate-900 dark:text-white block tracking-tight mb-2">
              <Counter :value="5" suffix="+" />
            </span>
            <span class="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
              {{ t.statExperience }}
            </span>
          </div>

          <!-- Stat Item 2 -->
          <div
            class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-center text-center items-center group relative overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-emerald-400" />
            <span class="text-4xl md:text-5xl font-sans font-extrabold text-slate-900 dark:text-white block tracking-tight mb-2">
              <Counter :value="50" suffix="+" />
            </span>
            <span class="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
              {{ t.statProjects }}
            </span>
          </div>

          <!-- Stat Item 3 -->
          <div
            class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-center text-center items-center group relative overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-indigo-500" />
            <span class="text-4xl md:text-5xl font-sans font-extrabold text-slate-900 dark:text-white block tracking-tight mb-2">
              100%
            </span>
            <span class="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
              {{ t.statClients }}
            </span>
          </div>

          <!-- Stat Item 4 -->
          <div
            class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-center text-center items-center group relative overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-purple-500" />
            <span class="text-4xl md:text-5xl font-sans font-extrabold text-slate-900 dark:text-white block tracking-tight mb-2">
              A+
            </span>
            <span class="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
              {{ t.statRetention }}
            </span>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePortfolioStore } from '../store';
import { TRANSLATIONS } from '../translations';
import { Award, Flame, HeartHandshake } from 'lucide-vue-next';
import Counter from './Counter.vue';

const store = usePortfolioStore();
const t = computed(() => (TRANSLATIONS as any)[store.lang]);

const valueProps = computed(() => [
  {
    title: store.lang === 'en' ? "Expertise & Quality" : "الخبرة والجودة العالية",
    desc: store.lang === 'en' ? "5+ years of architectural excellence crafting smooth Vue/React components." : "أكثر من 5 سنوات من التميز في برمجة وتصميم واجهات تفاعلية فائقة السرعة.",
    icon: Award,
    colorClass: 'text-teal-500'
  },
  {
    title: store.lang === 'en' ? "Speed & Performance" : "السرعة وتحسين الأداء",
    desc: store.lang === 'en' ? "Achieving outstanding 95+ Core Web Vitals score through precise bundle split rules." : "تأمين درجات أداء تفوق الـ 95 في مقياس Google PageSpeed لتوفير أفضل تجربة.",
    icon: Flame,
    colorClass: 'text-orange-500'
  },
  {
    title: store.lang === 'en' ? "Collaboration-First" : "التعاون والتواصل المستمر",
    desc: store.lang === 'en' ? "Proactive communicator delivering clean commits, fully-documented modular systems." : "تواصل استباقي ومستمر مع توفير أكواد نظيفة تماماً وموثقة يسهل البناء عليها.",
    icon: HeartHandshake,
    colorClass: 'text-pink-500'
  }
]);
</script>
