<template>
  <nav
    id="main-nav"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm py-4'
        : 'bg-transparent py-6'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo / Brand -->
      <div
        id="nav-logo"
        class="flex items-center gap-2 font-sans font-bold text-xl cursor-pointer text-slate-950 dark:text-white"
        @click="handleScrollTo('hero')"
      >
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-teal-500/10">
          <Sparkles class="w-5 h-5" />
        </div>
        <span class="tracking-wider">ANAS<span class="text-teal-500">.</span></span>
      </div>

      <!-- Desktop Nav Items -->
      <div class="hidden lg:flex items-center gap-8">
        <ul class="flex items-center gap-6">
          <li v-for="item in navItems" :key="item.id">
            <button
              @click="handleScrollTo(item.id)"
              class="font-sans text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 relative py-1 cursor-pointer"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>

        <div class="h-6 w-px bg-slate-200 dark:bg-slate-800" />

        <!-- Action Buttons -->
        <div class="flex items-center gap-4">
          <!-- Language Switcher -->
          <button
            @click="store.setLang(store.lang === 'en' ? 'ar' : 'en')"
            class="btn-special-anas p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer text-xs font-semibold"
            title="Switch Language"
          >
            <Globe class="w-4 h-4 text-teal-500" />
            <span>{{ store.lang === 'en' ? 'العربية' : 'EN' }}</span>
          </button>

          <!-- Contact CTA -->
          <button
            @click="handleScrollTo('contact')"
            class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-sans text-xs font-semibold tracking-wide shadow-md shadow-teal-500/20 cursor-pointer"
          >
            {{ t.navLetsTalk }}
          </button>
        </div>
      </div>

      <!-- Mobile Toggle & Actions -->
      <div class="flex items-center gap-3 lg:hidden">
        <!-- Quick Language Toggle -->
        <button
          @click="store.setLang(store.lang === 'en' ? 'ar' : 'en')"
          class="btn-special-anas p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer text-xs font-bold"
        >
          {{ store.lang === 'en' ? 'العربية' : 'EN' }}
        </button>

        <!-- Quick Theme Toggle -->
        <button id="btn-special2"
          @click="isOpen = !isOpen"
          class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
          aria-label="Toggle Menu"
        >
        <span></span>
        <span></span>
        <span></span>
          <!-- <X v-if="isOpen" class="w-5 h-5" />
          <Menu v-else class="w-5 h-5" /> -->
        </button>
      </div>
    </div>

    <!-- Mobile Drawer with Vue Transition -->
    <transition
      name="drawer"
      @enter="startTransition"
      @after-enter="endTransition"
      @leave="leaveTransition"
    >
      <div
        v-if="isOpen"
        id="mobile-drawer"
        class="lg:hidden w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl"
      >
        <div class="px-6 py-6 flex flex-col gap-5">
          <ul class="flex flex-col gap-4">
            <li v-for="item in navItems" :key="item.id">
              <button
                @click="handleScrollTo(item.id)"
                class="w-full text-left rtl:text-right font-sans text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-teal-500 transition-colors py-2 cursor-pointer block animate-fade-in"
              >
                {{ item.name }}
              </button>
            </li>
          </ul>
          <div class="h-px bg-slate-100 dark:bg-slate-900" />
          <button
            @click="handleScrollTo('contact')"
            class="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-sans text-center text-sm font-bold shadow-lg shadow-teal-500/10 cursor-pointer"
          >
            {{ t.navLetsTalk }}
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.btn-special-anas:hover {
  color: #fff;
  background-color: oklch(70.4% 0.14 182.503) !important;
}
#btn-special2 span {
  display: block;
  width: 15px;
  height: 2px;
  background-color: rgb(0, 187, 167);
  margin: 2px 0;
}
#btn-special2:hover {
background-color: rgb(0, 187, 167) !important;
span {
  background-color: #fff ;
}
}
</style>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { usePortfolioStore } from '../store';
import { TRANSLATIONS } from '../translations';

const store = usePortfolioStore();
const isOpen = ref(false);
const scrolled = ref(false);

const t = computed(() => TRANSLATIONS[store.lang]);

const navItems = computed(() => [
  { name: t.value.navHome, id: 'hero' },
  { name: t.value.navAbout, id: 'about' },
  { name: t.value.navSkills, id: 'skills' },
  { name: t.value.navServices, id: 'services' },
  { name: t.value.navProjects, id: 'projects' },
  { name: t.value.navTimeline, id: 'timeline' },
  { name: t.value.navFaq, id: 'faq' },
  { name: t.value.navBlog, id: 'blog' },
  { name: t.value.navContact, id: 'contact' },
]);

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScrollTo = (id: string) => {
  isOpen.value = false;
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

// Transition helpers for smooth slide-down of the drawer
const startTransition = (el: Element) => {
  const htmlEl = el as HTMLElement;
  htmlEl.style.height = '0px';
  htmlEl.style.opacity = '0';
  htmlEl.style.transition = 'height 0.3s ease-out, opacity 0.3s ease-out';
  // Force reflow
  htmlEl.offsetHeight;
  htmlEl.style.height = `${htmlEl.scrollHeight}px`;
  htmlEl.style.opacity = '1';
};

const endTransition = (el: Element) => {
  const htmlEl = el as HTMLElement;
  htmlEl.style.height = '';
  htmlEl.style.opacity = '';
  htmlEl.style.transition = '';
};

const leaveTransition = (el: Element) => {
  const htmlEl = el as HTMLElement;
  htmlEl.style.height = `${htmlEl.scrollHeight}px`;
  htmlEl.style.opacity = '1';
  htmlEl.style.transition = 'height 0.3s ease-in, opacity 0.3s ease-in';
  // Force reflow
  htmlEl.offsetHeight;
  htmlEl.style.height = '0px';
  htmlEl.style.opacity = '0';
};
</script>
