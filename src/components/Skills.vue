<template>
  <section
    id="skills"
    class="py-24 bg-slate-50 dark:bg-slate-900/40 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
  >
    <!-- Background blobs -->
    <div class="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
    <div class="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2
          class="text-base font-mono text-teal-500 dark:text-teal-400 uppercase tracking-widest font-semibold"
        >
          {{ t.skillsTitle }}
        </h2>
        <h3
          class="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3"
        >
          {{ t.skillsSubtitle }}
        </h3>
        <div class="w-16 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6 rounded-full" />
      </div>

      <!-- Tab Filters -->
      <div class="flex justify-center flex-wrap gap-2 mb-16">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'px-6 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer',
            activeTab === tab.id
              ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md shadow-teal-500/10'
              : 'bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          ]"
        >
          {{ tab.name }}
        </button>
      </div>

      <!-- Skills Progress Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <transition-group name="list" tag="div" class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 md:col-span-2">
          <div
            v-for="skill in filteredSkills"
            :key="skill.name"
            class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md dark:hover:shadow-teal-500/1 transition-all duration-300 flex flex-col justify-between text-left rtl:text-right"
          >
            <!-- Skill Title & Percent -->
            <div class="flex items-center justify-between mb-4 w-full">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center shadow-inner">
                  <component :is="getSkillIcon(skill.name)" class="w-5 h-5 text-teal-500 dark:text-teal-400" />
                </div>
                <span class="text-base sm:text-lg font-sans font-bold text-slate-900 dark:text-white">
                  {{ skill.name }}
                </span>
              </div>
              <span class="font-mono text-sm font-bold text-teal-500 dark:text-teal-400">
                {{ skill.proficiency }}%
              </span>
            </div>

            <!-- Progress bar container -->
            <div class="w-full bg-slate-100 dark:bg-slate-950 h-2.5 rounded-full overflow-hidden relative">
              <!-- Glowing core animation with Vue-based animation driver -->
              <div
                class="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 relative transition-all duration-1000 ease-out"
                :style="{ width: animated ? `${skill.proficiency}%` : '0%' }"
              >
                <div class="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-stripes" />
              </div>
            </div>
          </div>
        </transition-group>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { usePortfolioStore } from '../store';
import { TRANSLATIONS, TECHNICAL_SKILLS } from '../translations';
import {
  Code2, Paintbrush, Palette, Cpu, FileJson, Layers, ShieldCheck,
  Compass, Network, Database, Binary, Server, Table, Figma, Github, Sparkles
} from 'lucide-vue-next';

const store = usePortfolioStore();
const activeTab = ref<'all' | 'web' | 'vue' | 'other'>('all');
const animated = ref(false);

const t = computed(() => (TRANSLATIONS as any)[store.lang]);

const tabs = computed(() => [
  { id: 'all', name: store.lang === 'en' ? 'All Skills' : 'كل المهارات' },
  { id: 'web', name: t.value.skillsCategoryWeb },
  { id: 'vue', name: t.value.skillsCategoryVue },
  { id: 'other', name: t.value.skillsCategoryOther },
]);

const filteredSkills = computed(() =>
  TECHNICAL_SKILLS.filter((skill) => activeTab.value === 'all' || skill.category === activeTab.value)
);

const getSkillIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'html': return Code2;
    case 'css': return Paintbrush;
    case 'scss': return Palette;
    case 'javascript': return Cpu;
    case 'typescript': return FileJson;
    case 'vue.js': return Layers;
    case 'pinia': return ShieldCheck;
    case 'vue router': return Compass;
    case 'rest api': return Network;
    case 'firebase': return Database;
    case 'java': return Binary;
    case 'php': return Server;
    case 'mysql': return Table;
    case 'figma to code': return Figma;
    case 'git & github': return Github;
    default: return Sparkles;
  }
};

onMounted(() => {
  setTimeout(() => {
    animated.value = true;
  }, 100);
});
</script>

<style scoped>
@keyframes stripes {
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
}

.animate-stripes {
  animation: stripes 1s linear infinite;
}

/* Transition-group styling for filtered grid elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.list-move {
  transition: transform 0.4s ease;
}
</style>
