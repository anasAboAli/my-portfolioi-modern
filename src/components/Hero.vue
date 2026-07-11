<template>
  <section
    id="hero"
    class="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
  >
    <!-- Absolute Ambient Blobs -->
    <div class="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-teal-500/10 blur-[80px] pointer-events-none animate-pulse" />
    <div class="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-emerald-500/8 blur-[100px] pointer-events-none animate-bounce" />

    <div class="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <!-- Left Column: Introductions -->
      <div class="lg:col-span-7 flex flex-col items-start text-left rtl:text-right">
        <!-- Accent Badge -->
        <div
          class="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 dark:bg-teal-500/15 text-teal-600 dark:text-teal-400 font-mono text-xs font-semibold uppercase tracking-wider shadow-sm transition-transform duration-300 hover:scale-105"
        >
          <Sparkles class="w-3.5 h-3.5" />
          <span>{{ store.lang === 'en' ? 'Available for freelancing' : 'متاح للعمل الحر والتعاقد' }}</span>
        </div>

        <!-- Core Greeting with Typing-like entry animation -->
        <h1 class="font-sans font-extrabold text-slate-900 dark:text-white leading-[1.1]">
          <span class="text-xl md:text-2xl text-slate-500 dark:text-slate-400 block font-normal tracking-wide mb-2">
            {{ t.heroGreeting }}
          </span>
          <span class="text-4xl sm:text-5xl md:text-7xl block tracking-tight mb-4">
            {{ t.heroName }}
          </span>
          <span class="text-2xl sm:text-3xl md:text-4xl text-teal-500 dark:text-teal-400 font-medium block">
            {{ store.lang === 'en' ? 'Senior Frontend Engineer' : 'مطور واجهات أمامية محترف' }}
          </span>
        </h1>

        <!-- Student Status Sub-badge -->
        <div
          class="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest"
        >
          <GraduationCap class="w-4 h-4 text-emerald-500" />
          <span>{{ store.lang === 'en' ? 'CS Student & Builder' : 'طالب علوم حاسوب وشغوف بالبناء' }}</span>
        </div>

        <!-- Description -->
        <p class="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          {{ t.heroIntro }}
        </p>

        <!-- Call to Actions -->
        <div class="mt-8 flex flex-wrap gap-4 items-center w-full">
          <button
            @click="handleScrollTo('contact')"
            class="px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-sans text-sm font-bold tracking-wide shadow-lg shadow-teal-500/20 flex items-center gap-2 cursor-pointer group transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <span>{{ t.heroHireBtn }}</span>
            <ArrowUpRight class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            @click="handleScrollTo('projects')"
            class="px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-sans text-sm font-semibold tracking-wide hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer flex items-center gap-2 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <span>{{ store.lang === 'en' ? 'Explore My Work' : 'استكشف مشاريعي' }}</span>
          </button>
        </div>

        <!-- Quick Metrics Overlay -->
        <div
          class="mt-12 flex items-center gap-8 border-t border-slate-200/60 dark:border-slate-800/60 pt-8 w-full max-w-lg"
        >
          <div>
            <span class="block text-2xl font-bold text-slate-900 dark:text-white">5+</span>
            <span class="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1 block">
              {{ store.lang === 'en' ? 'Years of Code' : 'سنوات من الكود' }}
            </span>
          </div>
          <div class="w-px h-8 bg-slate-200 dark:bg-slate-800" />
          <div>
            <span class="block text-2xl font-bold text-slate-900 dark:text-white">50+</span>
            <span class="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1 block">
              {{ store.lang === 'en' ? 'Portfolios Built' : 'موقع وتطبيق منجز' }}
            </span>
          </div>
          <div class="w-px h-8 bg-slate-200 dark:bg-slate-800" />
          <div>
            <span class="block text-2xl font-bold text-slate-900 dark:text-white">100%</span>
            <span class="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1 block">
              {{ store.lang === 'en' ? 'Clean Delivery' : 'جودة وتسليم متكامل' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Right Column: Premium Visual Profile Image Frame -->
      <div class="lg:col-span-5 flex justify-center relative">
        <div class="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 transition-transform duration-500 hover:scale-105">
          <!-- Back Accent Block -->
          <div class="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-teal-500 to-emerald-400 opacity-20 blur-md pointer-events-none" />
          
          <!-- Rigid backplate frame with CSS animation -->
          <div
            class="absolute inset-4 rounded-3xl bg-teal-600 dark:bg-teal-700 -rotate-3 shadow-lg animate-float-slow"
          />

          <!-- Glowing outer borders -->
          <div
            class="absolute inset-4 rounded-3xl border border-slate-900 dark:border-white/20 rotate-3 z-10 pointer-events-none animate-float-delayed"
          />

          <!-- Profile Canvas Container -->
          <div class="absolute inset-4 rounded-3xl overflow-hidden bg-slate-900 z-20 shadow-2xl flex items-center justify-center">
            <img
              src="/images/myImg.png"
              alt="Anas"
              referrerPolicy="no-referrer"
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              @error="handleImageError"
            />

            <!-- High-fidelity Fallback Abstract SVG Illustration representing a Developer -->
            <div
              v-show="imageFailed"
              id="hero-fallback-avatar"
              class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex flex-col items-center justify-center p-8 text-center"
            >
              <!-- Neon circular paths -->
              <div class="relative w-32 h-32 rounded-full border border-teal-500/30 flex items-center justify-center mb-4">
                <div class="absolute inset-2 rounded-full border border-dashed border-emerald-400/40 animate-spin duration-10s" />
                <div class="w-20 h-20 rounded-full bg-teal-500/15 flex items-center justify-center">
                  <span class="text-3xl font-extrabold text-teal-400 tracking-wider">A</span>
                </div>
              </div>
              <span class="font-mono text-xs text-teal-400 tracking-widest uppercase mb-1">
                {{ "<FRONTEND_ENG>" }}
              </span>
              <span class="font-sans text-sm font-semibold text-white/80">
                Anas Akram
              </span>
              <span class="font-mono text-[10px] text-slate-500 mt-2">
                LOC: 0x598143863
              </span>
            </div>
          </div>

          <!-- Decorative Floating Tech Bubbles -->
          <div
            class="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-lg z-30 animate-float-bubble-1"
          >
            <span class="text-lg font-bold text-teal-500">Vue</span>
          </div>

          <div
            class="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-lg z-30 animate-float-bubble-2"
          >
            <span class="text-lg font-bold text-emerald-500">TS</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePortfolioStore } from '../store';
import { TRANSLATIONS } from '../translations';

const store = usePortfolioStore();
const imageFailed = ref(false);

const t = computed(() => TRANSLATIONS[store.lang]);

const handleScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

const handleImageError = () => {
  imageFailed.value = true;
};
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(-3deg);
  }
  50% {
    transform: translateY(10px) rotate(-1deg);
  }
}
@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px) rotate(3deg);
  }
  50% {
    transform: translateY(-10px) rotate(1deg);
  }
}
@keyframes float-bubble-1 {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}
@keyframes float-bubble-2 {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(8px);
  }
}

.animate-float-slow {
  animation: float 6s ease-in-out infinite;
}
.animate-float-delayed {
  animation: float-delayed 7s ease-in-out infinite;
}
.animate-float-bubble-1 {
  animation: float-bubble-1 4s ease-in-out infinite;
}
.animate-float-bubble-2 {
  animation: float-bubble-2 4.5s ease-in-out infinite;
}
</style>
