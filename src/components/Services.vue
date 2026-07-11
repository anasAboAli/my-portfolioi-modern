<template>
  <section
    id="services"
    class="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2
          class="text-base font-mono text-teal-500 dark:text-teal-400 uppercase tracking-widest font-semibold"
        >
          {{ t.servicesTitle }}
        </h2>
        <h3
          class="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3 leading-tight"
        >
          {{ t.servicesSubtitle }}
        </h3>
        <div class="w-16 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6 rounded-full" />
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="srv in SERVICES"
          :key="srv.id"
          class="group relative bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-8 hover:shadow-xl dark:hover:shadow-teal-500/1 transition-all duration-300 text-left rtl:text-right overflow-hidden flex flex-col h-full hover:-translate-y-1.5 hover:scale-[1.01]"
        >
          <!-- Dynamic decorative backdrop shape -->
          <div :class="['absolute -right-12 -top-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr', srv.colorClass]" />

          <!-- Icon Container -->
          <div :class="['w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-slate-200 dark:shadow-none group-hover:scale-110 transition-transform bg-gradient-to-tr', srv.colorClass]">
            <component :is="Icons[srv.iconName] || Icons.Sparkles" class="w-6 h-6 text-white" />
          </div>

          <!-- Service Title -->
          <h4 class="text-xl font-sans font-bold text-slate-950 dark:text-white mb-3 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
            {{ store.lang === 'en' ? srv.title : srv.titleAr }}
          </h4>

          <!-- Service Description -->
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
            {{ store.lang === 'en' ? srv.description : srv.descriptionAr }}
          </p>

          <!-- Clean decorative bottom accent -->
          <div :class="['h-1 absolute bottom-0 left-0 right-0 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r', srv.colorClass]" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePortfolioStore } from '../store';
import { TRANSLATIONS, SERVICES } from '../translations';
import * as Icons from 'lucide-vue-next';

const store = usePortfolioStore();
const t = computed(() => (TRANSLATIONS as any)[store.lang]);
</script>
