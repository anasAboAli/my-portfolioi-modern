<template>
  <section
    id="faq"
    class="py-24 bg-slate-50 dark:bg-slate-900/40 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
  >
    <div class="max-w-4xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2
          class="text-base font-mono text-teal-500 dark:text-teal-400 uppercase tracking-widest font-semibold"
        >
          {{ t.faqTitle }}
        </h2>
        <h3
          class="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3"
        >
          {{ t.faqSubtitle }}
        </h3>
        <div class="w-16 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6 rounded-full" />
      </div>

      <!-- Accordion List -->
      <div class="space-y-4">
        <div
          v-for="faq in FAQS"
          :key="faq.id"
          class="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <!-- Trigger Question bar -->
          <button
            @click="toggleFaq(faq.id)"
            class="w-full p-6 text-left rtl:text-right flex items-center justify-between gap-4 font-sans font-bold text-base sm:text-lg text-slate-950 dark:text-white cursor-pointer select-none"
          >
            <div class="flex items-center gap-3">
              <HelpCircle class="w-5 h-5 text-teal-500 shrink-0" />
              <span>{{ store.lang === 'en' ? faq.question : faq.questionAr }}</span>
            </div>
            <div
              :class="[
                'text-slate-400 transition-transform duration-200',
                openId === faq.id ? 'rotate-180' : 'rotate-0'
              ]"
            >
              <ChevronDown class="w-5 h-5" />
            </div>
          </button>

          <!-- Answer Content block with smooth height transition -->
          <transition
            name="collapse"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
          >
            <div v-show="openId === faq.id" class="overflow-hidden">
              <div class="px-6 pb-6 pt-1 border-t border-slate-100 dark:border-slate-800 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed text-left rtl:text-right">
                {{ store.lang === 'en' ? faq.answer : faq.answerAr }}
              </div>
            </div>
          </transition>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePortfolioStore } from '../store';
import { TRANSLATIONS, FAQS } from '../translations';
import { ChevronDown, HelpCircle } from 'lucide-vue-next';

const store = usePortfolioStore();
const openId = ref<number | null>(null);

const t = computed(() => (TRANSLATIONS as any)[store.lang]);

const toggleFaq = (id: number) => {
  openId.value = openId.value === id ? null : id;
};

// CSS height transition helpers
const beforeEnter = (el: any) => {
  el.style.height = '0';
  el.style.opacity = '0';
};

const enter = (el: any) => {
  el.style.transition = 'height 0.25s ease-out, opacity 0.25s ease-out';
  el.style.height = el.scrollHeight + 'px';
  el.style.opacity = '1';
};

const afterEnter = (el: any) => {
  el.style.height = 'auto';
};

const beforeLeave = (el: any) => {
  el.style.height = el.scrollHeight + 'px';
  el.style.opacity = '1';
};

const leave = (el: any) => {
  el.offsetHeight; // force reflow
  el.style.transition = 'height 0.25s ease-in, opacity 0.25s ease-in';
  el.style.height = '0';
  el.style.opacity = '0';
};

const afterLeave = (el: any) => {
  el.style.height = '0';
};
</script>
