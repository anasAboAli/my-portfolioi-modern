<template>
  <section
    id="projects"
    class="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2
          class="text-base font-mono text-teal-500 dark:text-teal-400 uppercase tracking-widest font-semibold"
        >
          {{ t.projectsTitle }}
        </h2>
        <h3
          class="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3"
        >
          {{ t.projectsSubtitle }}
        </h3>
        <div class="w-16 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6 rounded-full" />
      </div>

      <!-- Filter and Search Bar Controls -->
      <div class="flex flex-col md:flex-row gap-6 justify-between items-center mb-16 w-full">
        
        <!-- Tag Tabs -->
        <div class="flex flex-wrap gap-2 order-2 md:order-1">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-5 py-2 rounded-xl font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer',
              activeCategory === cat
                ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 shadow-sm'
                : 'bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            ]"
          >
            {{ cat === 'All' ? t.projectAll : cat }}
          </button>
        </div>

        <!-- Search Bar -->
        <div class="relative w-full md:w-80 order-1 md:order-2">
          <Search class="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            v-model="searchQuery"
            :placeholder="t.projectSearchPlaceholder"
            class="w-full py-3 pl-11 pr-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-left animate-fade-in"
          />
        </div>

      </div>

      <!-- Projects Grid Display -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <transition-group name="grid" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:col-span-2 lg:col-span-3">
          <div
            v-for="proj in filteredProjects"
            :key="proj.id"
            @click="selectedProject = proj"
            class="group bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-teal-500/2 transition-all duration-300 flex flex-col h-full cursor-pointer relative hover:-translate-y-1.5"
          >
            <!-- Large Project Image Panel -->
            <div class="relative h-56 overflow-hidden bg-slate-950 shrink-0">
              <div class="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
              
              <img
                v-show="!imageErrors[proj.id]"
                :src="proj.image"
                :alt="store.lang === 'en' ? proj.title : proj.titleAr"
                referrerPolicy="no-referrer"
                class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                @error="imageErrors[proj.id] = true"
              />

              <!-- Fallback frame -->
              <div v-if="imageErrors[proj.id]" class="absolute inset-0">
                <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex flex-col justify-between p-6 text-left">
                  <div class="flex justify-between items-center w-full">
                    <span class="text-[10px] font-mono uppercase tracking-widest text-teal-400">
                      &lt;CASE_STUDY /&gt;
                    </span>
                    <span class="text-xs font-mono font-bold text-slate-500">
                      {{ proj.category }}
                    </span>
                  </div>

                  <div class="relative w-full h-24 flex items-center justify-center overflow-hidden">
                    <div class="absolute w-24 h-24 rounded-full border border-teal-500/10 animate-pulse" />
                    <div class="absolute w-36 h-36 rounded-full border border-emerald-400/5 animate-ping duration-[6s]" />
                    <Code2 class="w-10 h-10 text-teal-500/25 relative z-10" />
                  </div>

                  <div class="w-full">
                    <span class="block text-sm font-sans font-bold text-white/90 uppercase tracking-wide leading-none mb-1">
                      {{ store.lang === 'en' ? proj.title : proj.titleAr }}
                    </span>
                    <span class="text-[10px] font-mono text-teal-400/80 uppercase">
                      Anas Engineering Portfolio
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Content details -->
            <div class="p-6 flex flex-col justify-between h-full text-left rtl:text-right">
              <div class="w-full">
                <span class="inline-block px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-400 font-mono text-[10px] font-bold uppercase tracking-widest mb-3">
                  {{ proj.category }}
                </span>
                <h4 class="text-xl font-sans font-bold text-slate-950 dark:text-white mb-2 leading-snug">
                  {{ store.lang === 'en' ? proj.title : proj.titleAr }}
                </h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {{ store.lang === 'en' ? proj.description : proj.descriptionAr }}
                </p>
              </div>

              <!-- Technical Tags & interactive visual footer -->
              <div class="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 w-full">
                <div class="flex flex-wrap gap-1.5 mb-4">
                  <span v-for="tag in proj.tech.slice(0, 3)" :key="tag" class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 font-mono text-[10px] font-semibold">
                    {{ tag }}
                  </span>
                  <span v-if="proj.tech.length > 3" class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 font-mono text-[10px] font-bold">
                    +{{ proj.tech.length - 3 }}
                  </span>
                </div>

                <div class="flex items-center gap-1.5 text-xs font-sans font-bold text-teal-500 dark:text-teal-400 group-hover:underline uppercase tracking-wide">
                  <span>{{ store.lang === 'en' ? 'View Project Details' : 'عرض تفاصيل المشروع' }}</span>
                  <ExternalLink class="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>

    </div>

    <!-- Project Detail Modal with Custom Vue Transition -->
    <transition name="modal">
      <div
        v-if="selectedProject"
        class="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        @click="selectedProject = null"
      >
        <div
          class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative"
          @click.stopPropagation
        >
          
          <!-- Close Button -->
          <button
            @click="selectedProject = null"
            class="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-150 dark:bg-slate-950/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 hover:scale-105 transition-all cursor-pointer shadow-md"
            aria-label="Close Modal"
          >
            <X class="w-5 h-5" />
          </button>

          <!-- Large Hero image inside Modal -->
          <div class="relative h-64 sm:h-80 md:h-96 w-full bg-slate-950">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 pointer-events-none" />
            
            <img
              v-show="!modalImageError"
              :src="selectedProject.image"
              :alt="store.lang === 'en' ? selectedProject.title : selectedProject.titleAr"
              referrerPolicy="no-referrer"
              class="w-full h-full object-cover"
              @error="modalImageError = true"
            />

            <!-- Modal Fallback frame -->
            <div v-if="modalImageError" class="absolute inset-0">
              <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex flex-col justify-between p-6 text-left">
                <div class="flex justify-between items-center w-full">
                  <span class="text-[10px] font-mono uppercase tracking-widest text-teal-400">
                    &lt;CASE_STUDY /&gt;
                  </span>
                  <span class="text-xs font-mono font-bold text-slate-500">
                    {{ selectedProject.category }}
                  </span>
                </div>

                <div class="relative w-full h-24 flex items-center justify-center overflow-hidden">
                  <div class="absolute w-24 h-24 rounded-full border border-teal-500/10 animate-pulse" />
                  <div class="absolute w-36 h-36 rounded-full border border-emerald-400/5 animate-ping duration-[6s]" />
                  <Code2 class="w-10 h-10 text-teal-500/25 relative z-10" />
                </div>

                <div class="w-full">
                  <span class="block text-sm font-sans font-bold text-white/90 uppercase tracking-wide leading-none mb-1">
                    {{ store.lang === 'en' ? selectedProject.title : selectedProject.titleAr }}
                  </span>
                  <span class="text-[10px] font-mono text-teal-400/80 uppercase">
                    Anas Engineering Portfolio
                  </span>
                </div>
              </div>
            </div>

            <div class="absolute bottom-6 left-6 right-6 z-20 text-left rtl:text-right">
              <span class="inline-block px-3 py-1 rounded-md bg-teal-500 text-white font-mono text-[10px] font-bold uppercase tracking-widest mb-3 shadow-md">
                {{ selectedProject.category }}
              </span>
              <h3 class="text-2xl sm:text-4xl font-sans font-extrabold text-white leading-tight drop-shadow-md">
                {{ store.lang === 'en' ? selectedProject.title : selectedProject.titleAr }}
              </h3>
            </div>
          </div>

          <!-- Modal Body Contents -->
          <div class="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left rtl:text-right max-h-[50vh] overflow-y-auto">
            
            <!-- Description details -->
            <div class="lg:col-span-8 flex flex-col gap-6">
              <div>
                <h4 class="text-sm font-mono text-slate-400 uppercase tracking-widest font-semibold mb-2">
                  {{ t.projectDetailsTitle }}
                </h4>
                <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {{ store.lang === 'en' ? selectedProject.details : selectedProject.detailsAr }}
                </p>
              </div>

              <div>
                <h4 class="text-sm font-mono text-slate-400 uppercase tracking-widest font-semibold mb-2">
                  {{ store.lang === 'en' ? 'Core Role' : 'دور المطور' }}
                </h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {{ store.lang === 'en'
                    ? 'Sole Lead Architect responsible for entire client implementation, modular component designs, performance tweaks, animations integration, and production hosting pipelines.'
                    : 'مهندس الواجهات الوحيد المسؤول عن تخطيط الهيكلية وتصميم المكونات المعيارية وتحسين سرعة التحميل وبرمجة الحركات التفاعلية وضمان التسليم النهائي.' }}
                </p>
              </div>
            </div>

            <!-- Sidebar details -->
            <div class="lg:col-span-4 flex flex-col gap-6 bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div>
                <h4 class="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold mb-3">
                  {{ t.projectTechUsed }}
                </h4>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="tag in selectedProject.tech" :key="tag" class="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[10px] font-semibold">
                    {{ tag }}
                  </span>
                </div>
              </div>

              <div class="h-px bg-slate-200 dark:bg-slate-800" />

              <!-- Project CTA Action buttons inside Modal -->
              <div class="flex flex-col gap-3">
                <a
                  :href="selectedProject.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-sans text-xs font-bold text-center flex items-center justify-center gap-2 shadow-md shadow-teal-500/10 cursor-pointer"
                >
                  <ExternalLink class="w-4 h-4" />
                  <span>{{ t.projectLiveDemo }}</span>
                </a>

                <a
                  :href="selectedProject.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full py-3 rounded-xl bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-sans text-xs font-bold text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Github class="w-4 h-4" />
                  <span>{{ t.projectSourceCode }}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { usePortfolioStore } from '../store';
import { TRANSLATIONS, PROJECTS } from '../translations';
import { Project } from '../types';
import { Search, ExternalLink, Github, X, Code2 } from 'lucide-vue-next';

const store = usePortfolioStore();
const selectedProject = ref<Project | null>(null);
const searchQuery = ref('');
const activeCategory = ref('All');

// Track loaded image failures by project id
const imageErrors = ref<Record<number, boolean>>({});
const modalImageError = ref(false);

const t = computed(() => (TRANSLATIONS as any)[store.lang]);

const categories = ['All', 'Vue', 'TypeScript', 'Firebase', 'REST API'];

const filteredProjects = computed(() => {
  return PROJECTS.filter((proj) => {
    const q = searchQuery.value.toLowerCase();
    const matchesSearch =
      proj.title.toLowerCase().includes(q) ||
      proj.titleAr.includes(searchQuery.value) ||
      proj.tech.some((tc) => tc.toLowerCase().includes(q)) ||
      proj.description.toLowerCase().includes(q) ||
      proj.descriptionAr.includes(searchQuery.value);

    const matchesCategory =
      activeCategory.value === 'All' || proj.category === activeCategory.value;

    return matchesSearch && matchesCategory;
  });
});

watch(selectedProject, () => {
  modalImageError.value = false;
});
</script>

<style scoped>
/* Transition group animations for the grid */
.grid-enter-active,
.grid-leave-active {
  transition: all 0.4s ease;
}
.grid-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}
.grid-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}
.grid-move {
  transition: transform 0.4s ease;
}

/* Modal animation transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}
.modal-enter-from {
  opacity: 0;
}
.modal-enter-from > div {
  opacity: 0;
  transform: scale(0.95) translateY(30px);
}
.modal-leave-to {
  opacity: 0;
}
.modal-leave-to > div {
  opacity: 0;
  transform: scale(0.92) translateY(30px);
}
</style>
