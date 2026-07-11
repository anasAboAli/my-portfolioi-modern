<template>
  <section
    id="testimonials"
    class="py-24 bg-slate-50 dark:bg-slate-900/40 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
  >
    <div class="max-w-4xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          class="text-base font-mono text-teal-500 dark:text-teal-400 uppercase tracking-widest font-semibold"
        >
          {{ store.lang === 'en' ? 'Client Testimonials' : 'آراء وشهادات العملاء' }}
        </h2>
        <h3
          class="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3"
        >
          {{ store.lang === 'en' ? 'What industry professionals say' : 'ماذا يقول خبراء الصناعة عن أعمالي' }}
        </h3>
        <div class="w-16 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6 rounded-full" />
      </div>

      <!-- Carousel / Slider Wrapper -->
      <div class="relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 text-left rtl:text-right overflow-hidden flex flex-col items-start">
        <!-- Quote Icon -->
        <div class="absolute top-8 right-8 rtl:left-8 rtl:right-auto opacity-10 pointer-events-none">
          <Quote class="w-20 h-20 text-teal-500" />
        </div>

        <!-- Rating stars -->
        <div class="flex items-center gap-1 text-amber-400 mb-6">
          <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-amber-400 text-amber-400" />
        </div>

        <!-- Review Text block with dynamic animation -->
        <div class="min-h-[140px] w-full">
          <transition name="fade-slide" mode="out-in">
            <p
              :key="activeIndex"
              class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-medium"
            >
              "{{ store.lang === 'en' ? current.text : current.textAr }}"
            </p>
          </transition>
        </div>

        <!-- Client Details -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 gap-6">
          
          <div class="flex items-center gap-4">
            <img
              :src="current.avatar"
              :alt="store.lang === 'en' ? current.name : current.nameAr"
              referrerPolicy="no-referrer"
              class="w-12 h-12 rounded-full object-cover border border-slate-100 shadow-inner"
            />
            <div>
              <span class="block text-base font-sans font-bold text-slate-950 dark:text-white">
                {{ store.lang === 'en' ? current.name : current.nameAr }}
              </span>
              <span class="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider block mt-0.5">
                {{ store.lang === 'en' ? current.role : current.roleAr }} @ <span class="text-teal-500 font-bold">{{ current.company }}</span>
              </span>
            </div>
          </div>

          <!-- Slider Navigation Trigger Buttons -->
          <div class="flex items-center gap-2">
            <button
              @click="handlePrev"
              class="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-950 text-slate-700 dark:text-slate-300 cursor-pointer transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft class="w-4 h-4" />
            </button>
            <button
              @click="handleNext"
              class="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-950 text-slate-700 dark:text-slate-300 cursor-pointer transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight class="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePortfolioStore } from '../store';
import { TESTIMONIALS } from '../translations';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-vue-next';

const store = usePortfolioStore();
const activeIndex = ref(0);

const current = computed(() => TESTIMONIALS[activeIndex.value]);

const handleNext = () => {
  activeIndex.value = (activeIndex.value + 1) % TESTIMONIALS.length;
};

const handlePrev = () => {
  activeIndex.value = (activeIndex.value - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
};
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
