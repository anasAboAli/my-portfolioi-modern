<template>
  <div v-if="loading" class="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center text-center">
    <!-- Abstract animated loading graphic -->
    <div class="relative w-24 h-24 mb-6">
      <div class="absolute inset-0 rounded-full border-2 border-t-teal-500 border-r-teal-500/30 border-b-teal-500/10 border-l-transparent animate-spin duration-1000" />
      <div class="absolute inset-3 rounded-full border border-dashed border-emerald-400/30 animate-spin duration-[6s] animate-reverse" />
      <div class="absolute inset-0 flex items-center justify-center text-teal-400 font-mono text-xl font-bold">
        A
      </div>
    </div>
    <span class="text-xs font-mono text-slate-500 uppercase tracking-[0.25em] animate-pulse">
      Architecting Portfolio...
    </span>
  </div>

  <div v-else :class="['min-h-screen transition-colors duration-300 selection:bg-teal-500/20 selection:text-teal-400', store.theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-900']">
    <!-- Custom Mouse Follower and Glows -->
    <CustomCursor />

    <!-- Modern Navigation Header -->
    <Navbar />

    <!-- Main Core Layout Sections -->
    <main class="w-full relative overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Services />
      <WhyHireMe />
      <Projects />
      <Timeline />
      <DevProcess />
      <Testimonials />
      <Certificates />
      <FAQ />
      <Blog />
      <Contact />
    </main>

    <!-- Legal & Social Widgets Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { usePortfolioStore } from './store';
import CustomCursor from './components/CustomCursor.vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Services from './components/Services.vue';
import WhyHireMe from './components/WhyHireMe.vue';
import Projects from './components/Projects.vue';
import Timeline from './components/Timeline.vue';
import DevProcess from './components/DevProcess.vue';
import Testimonials from './components/Testimonials.vue';
import Certificates from './components/Certificates.vue';
import FAQ from './components/FAQ.vue';
import Blog from './components/Blog.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

const store = usePortfolioStore();
const loading = ref(true);

onMounted(() => {
  store.init();
  setTimeout(() => {
    loading.value = false;
  }, 1800);
});
</script>
