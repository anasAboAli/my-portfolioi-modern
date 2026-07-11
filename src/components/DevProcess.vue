<template>
  <section
    id="dev-process"
    class="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2
          class="text-base font-mono text-teal-500 dark:text-teal-400 uppercase tracking-widest font-semibold"
        >
          {{ t.processTitle }}
        </h2>
        <h3
          class="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3"
        >
          {{ t.processSubtitle }}
        </h3>
        <div class="w-16 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6 rounded-full" />
      </div>

      <!-- Dynamic Stepper Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 relative mt-16">
        
        <!-- Horizontal Connector Line for desktop -->
        <div class="absolute top-1/2 left-10 right-10 h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-12 hidden lg:block z-0" />

        <div
          v-for="st in steps"
          :key="st.num"
          class="group bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 hover:shadow-xl dark:hover:shadow-teal-500/2 transition-all duration-300 flex flex-col items-start relative z-10 text-left rtl:text-right hover:-translate-y-1.5"
        >
          <!-- Step indicator node -->
          <div class="flex justify-between items-center w-full mb-6 text-left rtl:text-right">
            <div class="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <component :is="st.icon" class="w-6 h-6" :class="st.iconColor" />
            </div>
            <span class="text-3xl font-mono font-extrabold text-slate-200 dark:text-slate-800 group-hover:text-teal-500/20 transition-colors">
              {{ st.num }}
            </span>
          </div>

          <!-- Step Title -->
          <h4 class="text-base font-sans font-bold text-slate-900 dark:text-white mb-2">
            {{ st.title }}
          </h4>

          <!-- Step Desc -->
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {{ st.desc }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePortfolioStore } from '../store';
import { TRANSLATIONS } from '../translations';
import { Search, Map, Code, Zap, Rocket } from 'lucide-vue-next';

const store = usePortfolioStore();
const t = computed(() => (TRANSLATIONS as any)[store.lang]);

const steps = computed(() => [
  {
    num: "01",
    title: t.value.step1Title,
    desc: t.value.step1Desc,
    icon: Search,
    iconColor: "text-teal-500",
    color: "from-teal-500/10 to-teal-500/2"
  },
  {
    num: "02",
    title: t.value.step2Title,
    desc: t.value.step2Desc,
    icon: Map,
    iconColor: "text-emerald-500",
    color: "from-emerald-500/10 to-emerald-500/2"
  },
  {
    num: "03",
    title: t.value.step3Title,
    desc: t.value.step3Desc,
    icon: Code,
    iconColor: "text-blue-500",
    color: "from-blue-500/10 to-blue-500/2"
  },
  {
    num: "04",
    title: t.value.step4Title,
    desc: t.value.step4Desc,
    icon: Zap,
    iconColor: "text-amber-500",
    color: "from-amber-500/10 to-amber-500/2"
  },
  {
    num: "05",
    title: t.value.step5Title,
    desc: t.value.step5Desc,
    icon: Rocket,
    iconColor: "text-purple-500",
    color: "from-purple-500/10 to-purple-500/2"
  }
]);
</script>
