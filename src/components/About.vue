<template>
  <section
    id="about"
    class="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2
          class="text-base font-mono text-teal-500 dark:text-teal-400 uppercase tracking-widest font-semibold"
        >
          {{ t.aboutTitle }}
        </h2>
        <h3
          class="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3 leading-tight"
        >
          {{ t.aboutSubtitle }}
        </h3>
        <div class="w-16 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6 rounded-full" />
      </div>

      <!-- Narrative Section -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        <div
          class="lg:col-span-6 flex flex-col gap-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed text-left rtl:text-right"
        >
          <p class="font-medium text-slate-800 dark:text-white">
            {{ t.aboutText1 }}
          </p>
          <p>
            {{ t.aboutText2 }}
          </p>
        </div>

        <div
          class="lg:col-span-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-center text-left rtl:text-right relative overflow-hidden group"
        >
          <!-- Absolute accent patterns -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/5 to-emerald-400/5 rounded-bl-full group-hover:scale-110 transition-transform duration-500" />
          
          <h4 class="text-xl font-sans font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Award class="w-5 h-5 text-teal-500" />
            <span>{{ store.lang === 'en' ? 'Core Code Standards' : 'معايير جودة الكود البرمجي' }}</span>
          </h4>
          <ul class="space-y-4">
            <li v-for="(item, index) in standards" :key="index" class="flex gap-3">
              <div class="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 mt-1">
                <Check class="w-3.5 h-3.5" />
              </div>
              <div>
                <span class="block text-sm font-bold text-slate-900 dark:text-white">{{ item.label }}</span>
                <span class="text-xs text-slate-500 dark:text-slate-400 leading-snug block mt-0.5">{{ item.desc }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Philosophy / Attributes Grid -->
      <div class="mt-20">
        <h4 class="text-xl font-mono text-center text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold mb-12">
          {{ t.aboutAttributesTitle }}
        </h4>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="attr in KEY_ATTRIBUTES"
            :key="attr.id"
            class="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-lg dark:hover:shadow-teal-500/2 transition-all duration-300 text-left rtl:text-right flex flex-col h-full group hover:-translate-y-1.5 hover:scale-[1.02]"
          >
            <!-- Dynamic Icon with themed backdrop -->
            <div :class="['w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0 shadow-inner group-hover:scale-110 transition-transform bg-gradient-to-tr', attr.color.split(' ').find(c => c.startsWith('from-')), attr.color.split(' ').find(c => c.startsWith('to-'))]">
              <component :is="Icons[attr.iconName] || Icons.Sparkles" class="w-6 h-6 text-teal-500 dark:text-teal-400" />
            </div>

            <h5 class="text-lg font-sans font-bold text-slate-950 dark:text-white mb-2 leading-snug">
              {{ t[attr.titleKey] }}
            </h5>
            <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-auto">
              {{ t[attr.descKey] }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePortfolioStore } from '../store';
import { TRANSLATIONS, KEY_ATTRIBUTES } from '../translations';
import { Award, Check } from 'lucide-vue-next';
import * as Icons from 'lucide-vue-next';

const store = usePortfolioStore();
const t = computed(() => (TRANSLATIONS as any)[store.lang]);

const standards = computed(() => [
  {
    label: store.lang === 'en' ? 'SOLID Architectural Principles' : 'مبادئ بناء الهيكلية البرمجية (SOLID)',
    desc: store.lang === 'en' ? 'Writing highly modular and extensible micro-functions.' : 'تصميم أكواد متكاملة وسهلة التعديل والتمديد.'
  },
  {
    label: store.lang === 'en' ? 'DRY (Don\'t Repeat Yourself)' : 'عدم تكرار الأكواد (DRY)',
    desc: store.lang === 'en' ? 'Eliminating code duplication using reusable custom components.' : 'تقليل وحذف تكرار الأكواد وبناء عناصر مرنة قابلة للاستخدام.'
  },
  {
    label: store.lang === 'en' ? 'Comprehensive TypeScript Typing' : 'أمن الأنواع البرمجية والتحقق المسبق',
    desc: store.lang === 'en' ? 'Catching semantic bugs pre-runtime with advanced typing structures.' : 'حذف وإصلاح أخطاء التشغيل البرمجي بنظام الأنماط الآمن.'
  }
]);
</script>
