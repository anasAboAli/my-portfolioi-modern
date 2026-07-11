<template>
  <section
    id="certificates"
    class="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2
          class="text-base font-mono text-teal-500 dark:text-teal-400 uppercase tracking-widest font-semibold"
        >
          {{ store.lang === 'en' ? 'Professional Credentials' : 'الشهادات والاعتمادات المهنية' }}
        </h2>
        <h3
          class="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3"
        >
          {{ store.lang === 'en' ? 'Certifications & Badges' : 'الشهادات المعتمدة التي حصلت عليها' }}
        </h3>
        <div class="w-16 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6 rounded-full" />
      </div>

      <!-- Certificates Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="cert in CERTIFICATES"
          :key="cert.id"
          class="group relative bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-teal-500/1 transition-all duration-300 flex flex-col items-start text-left rtl:text-right hover:-translate-y-1.5"
        >
          <!-- Top Accent Strip -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-t-2xl" />

          <!-- Verified Badge Icon -->
          <div class="flex items-center justify-between w-full mb-6 mt-2">
            <div class="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center shadow-inner">
              <GraduationCap class="w-6 h-6" />
            </div>
            <div class="flex items-center gap-1 text-emerald-500 text-xs font-mono font-bold uppercase tracking-wider">
              <CheckCircle class="w-3.5 h-3.5" />
              <span>{{ store.lang === 'en' ? 'Verified' : 'معتمد' }}</span>
            </div>
          </div>

          <!-- Title -->
          <h4 class="text-lg font-sans font-bold text-slate-950 dark:text-white mb-2 leading-snug group-hover:text-teal-500 transition-colors">
            {{ store.lang === 'en' ? cert.title : cert.titleAr }}
          </h4>

          <!-- Issuer -->
          <span class="text-sm font-mono text-slate-500 dark:text-slate-400 font-semibold mb-4 block">
            {{ store.lang === 'en' ? cert.issuer : cert.issuerAr }}
          </span>

          <!-- Date Footer -->
          <div class="mt-auto pt-4 border-t border-slate-150 dark:border-slate-800/60 w-full flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <Calendar class="w-3.5 h-3.5" />
            <span>{{ store.lang === 'en' ? cert.date : cert.dateAr }}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePortfolioStore } from '../store';
import { CERTIFICATES } from '../translations';
import { GraduationCap, CheckCircle, Calendar } from 'lucide-vue-next';

const store = usePortfolioStore();
</script>
