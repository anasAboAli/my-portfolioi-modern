<template>
  <section
    id="timeline"
    class="py-24 bg-slate-50 dark:bg-slate-900/40 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
  >
    <!-- Background blobs -->
    <div class="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-teal-500/5 blur-[120px] pointer-events-none animate-pulse" />
    <div class="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2
          class="text-base font-mono text-teal-500 dark:text-teal-400 uppercase tracking-widest font-semibold"
        >
          {{ t.timelineTitle }}
        </h2>
        <h3
          class="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3"
        >
          {{ t.timelineSubtitle }}
        </h3>
        <div class="w-16 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6 rounded-full" />
      </div>

      <!-- Dual Column Layout: Experience and Education -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
        
        <!-- Central separation vertical divider for desktop -->
        <div class="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden lg:block" />

        <!-- Left Column: Work Experience -->
        <div class="flex flex-col gap-10">
          <div class="flex items-center gap-3 mb-4 justify-start">
            <div class="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center shadow-inner">
              <Briefcase class="w-5 h-5" />
            </div>
            <h4 class="text-2xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white">
              {{ t.timelineWork }}
            </h4>
          </div>

          <div class="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 rtl:pl-0 rtl:pr-6 rtl:border-l-0 rtl:border-r-2 space-y-10 text-left rtl:text-right">
            <div
              v-for="item in workItems"
              :key="item.id"
              class="relative group transition-transform duration-300 hover:translate-x-1 rtl:hover:-translate-x-1"
            >
              <!-- Bullet Marker Node -->
              <div class="absolute -left-[31px] rtl:-left-auto rtl:-right-[31px] top-1 w-4 h-4 rounded-full border-2 border-teal-500 bg-white dark:bg-slate-950 z-10 group-hover:bg-teal-500 transition-colors duration-300" />
              
              <!-- Glowing core badge -->
              <div class="flex items-center gap-2 text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-1.5">
                <Calendar class="w-3.5 h-3.5" />
                <span>{{ item.year }}</span>
              </div>

              <h5 class="text-xl font-sans font-bold text-slate-950 dark:text-white mb-1">
                {{ store.lang === 'en' ? item.title : item.titleAr }}
              </h5>

              <span class="inline-block text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase mb-4 tracking-wide">
                {{ store.lang === 'en' ? item.organization : item.organizationAr }}
              </span>

              <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {{ store.lang === 'en' ? item.description : item.descriptionAr }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column: Academic Education -->
        <div class="flex flex-col gap-10">
          <div class="flex items-center gap-3 mb-4 justify-start">
            <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shadow-inner">
              <GraduationCap class="w-5 h-5" />
            </div>
            <h4 class="text-2xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white">
              {{ t.timelineEdu }}
            </h4>
          </div>

          <div class="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 rtl:pl-0 rtl:pr-6 rtl:border-l-0 rtl:border-r-2 space-y-10 text-left rtl:text-right">
            <div
              v-for="item in educationItems"
              :key="item.id"
              class="relative group transition-transform duration-300 hover:translate-x-1 rtl:hover:-translate-x-1"
            >
              <!-- Bullet Marker Node -->
              <div class="absolute -left-[31px] rtl:-left-auto rtl:-right-[31px] top-1 w-4 h-4 rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-950 z-10 group-hover:bg-indigo-500 transition-colors duration-300" />

              <!-- Glowing core badge -->
              <div class="flex items-center gap-2 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1.5">
                <Calendar class="w-3.5 h-3.5" />
                <span>{{ item.year }}</span>
              </div>

              <h5 class="text-xl font-sans font-bold text-slate-950 dark:text-white mb-1">
                {{ store.lang === 'en' ? item.title : item.titleAr }}
              </h5>

              <span class="inline-block text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase mb-4 tracking-wide">
                {{ store.lang === 'en' ? item.organization : item.organizationAr }}
              </span>

              <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {{ store.lang === 'en' ? item.description : item.descriptionAr }}
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePortfolioStore } from '../store';
import { TRANSLATIONS, TIMELINE } from '../translations';
import { Briefcase, GraduationCap, Calendar } from 'lucide-vue-next';

const store = usePortfolioStore();
const t = computed(() => (TRANSLATIONS as any)[store.lang]);

const workItems = computed(() => TIMELINE.filter(item => item.type === 'work'));
const educationItems = computed(() => TIMELINE.filter(item => item.type === 'education'));
</script>
