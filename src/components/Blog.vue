<template>
  <section
    id="blog"
    class="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2
          class="text-base font-mono text-teal-500 dark:text-teal-400 uppercase tracking-widest font-semibold"
        >
          {{ t.navBlog }}
        </h2>
        <h3
          class="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3"
        >
          {{ t.blogSubtitle }}
        </h3>
        <div class="w-16 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6 rounded-full" />
      </div>

      <!-- Blog Article Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article
          v-for="post in BLOGS"
          :key="post.id"
          class="group bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-teal-500/1 transition-all duration-300 flex flex-col h-full text-left rtl:text-right hover:-translate-y-1.5"
        >
          <!-- Image Header with hover zoom -->
          <div class="relative h-48 overflow-hidden bg-slate-950 shrink-0">
            <div class="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
            <img
              :src="post.image"
              :alt="store.lang === 'en' ? post.title : post.titleAr"
              referrerPolicy="no-referrer"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- Card Body details -->
          <div class="p-6 flex flex-col justify-between h-full">
            <div class="w-full">
              <!-- Metadata line -->
              <div class="flex items-center gap-4 text-xs font-mono text-slate-400 mb-3.5 flex-wrap">
                <span class="flex items-center gap-1">
                  <Calendar class="w-3.5 h-3.5" />
                  <span>{{ store.lang === 'en' ? post.date : post.dateAr }}</span>
                </span>
                <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span class="flex items-center gap-1">
                  <Clock class="w-3.5 h-3.5" />
                  <span>{{ store.lang === 'en' ? post.readTime : post.readTimeAr }}</span>
                </span>
              </div>

              <!-- Title -->
              <h4 class="text-lg sm:text-xl font-sans font-bold text-slate-950 dark:text-white mb-2 leading-snug group-hover:text-teal-500 transition-colors line-clamp-2">
                {{ store.lang === 'en' ? post.title : post.titleAr }}
              </h4>

              <!-- Excerpt -->
              <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed mt-1">
                {{ store.lang === 'en' ? post.excerpt : post.excerptAr }}
              </p>
            </div>

            <!-- Footer and Interactive link -->
            <div class="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 w-full flex items-center justify-between">
              <div class="flex flex-wrap gap-1">
                <span v-for="tag in post.tags.slice(0, 2)" :key="tag" class="px-2 py-0.5 rounded-md bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 font-mono text-[9px] font-semibold border border-slate-200/40 dark:border-slate-800">
                  {{ tag }}
                </span>
              </div>

              <div class="flex items-center gap-1 text-xs font-sans font-bold text-teal-500 dark:text-teal-400 group-hover:underline uppercase tracking-wider cursor-pointer">
                <span>{{ t.blogReadMore }}</span>
                <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePortfolioStore } from '../store';
import { TRANSLATIONS, BLOGS } from '../translations';
import { Calendar, Clock, ArrowRight } from 'lucide-vue-next';

const store = usePortfolioStore();
const t = computed(() => (TRANSLATIONS as any)[store.lang]);
</script>
