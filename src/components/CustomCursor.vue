<template>
  <div v-if="visible" class="hidden md:block">
    <!-- Interactive Cursor Pointer -->
    <div
      id="custom-cursor"
      class="fixed top-0 left-0 w-6 h-6 rounded-full border border-teal-500/80 pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      :style="{
        transform: `translate3d(${x - 12}px, ${y - 12}px, 0) scale(${isHovered ? 1.5 : 1})`,
        backgroundColor: isHovered ? 'rgba(20, 184, 166, 0.15)' : 'rgba(20, 184, 166, 0.02)',
      }"
    />
    <!-- Large Ambient Mouse Follower Glow -->
    <div
      id="cursor-glow"
      class="fixed top-0 left-0 w-80 h-80 rounded-full bg-radial from-teal-500/8 to-transparent pointer-events-none z-[1] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out"
      :style="{
        transform: `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);
const isHovered = ref(false);
const x = ref(-100);
const y = ref(-100);

let observer: MutationObserver | null = null;

const moveCursor = (e: MouseEvent) => {
  x.value = e.clientX;
  y.value = e.clientY;
  if (!visible.value) visible.value = true;
};

const handleMouseLeave = () => {
  visible.value = false;
};

const handleMouseEnter = () => {
  visible.value = true;
};

const addHoverState = () => {
  isHovered.value = true;
};

const removeHoverState = () => {
  isHovered.value = false;
};

const updateHoverListeners = () => {
  const clickables = document.querySelectorAll('a, button, [role="button"], input, select, textarea, .clickable');
  clickables.forEach((el) => {
    el.removeEventListener('mouseenter', addHoverState);
    el.removeEventListener('mouseleave', removeHoverState);
    el.addEventListener('mouseenter', addHoverState);
    el.addEventListener('mouseleave', removeHoverState);
  });
};

onMounted(() => {
  window.addEventListener('mousemove', moveCursor);
  document.addEventListener('mouseleave', handleMouseLeave);
  document.addEventListener('mouseenter', handleMouseEnter);

  updateHoverListeners();

  observer = new MutationObserver(() => {
    updateHoverListeners();
  });
  observer.observe(document.body, { childList: true, subtree: true });
});

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor);
  document.removeEventListener('mouseleave', handleMouseLeave);
  document.removeEventListener('mouseenter', handleMouseEnter);
  if (observer) {
    observer.disconnect();
  }
});
</script>
