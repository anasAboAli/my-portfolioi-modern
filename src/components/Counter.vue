<template>
  <span>{{ count }}{{ suffix }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    value: number;
    suffix?: string;
    duration?: number;
  }>(),
  {
    suffix: '',
    duration: 1.5,
  }
);

const count = ref(0);

const animateCount = () => {
  const durationMs = props.duration * 1000;
  const end = props.value;
  if (end === 0) return;

  const incrementTime = Math.max(Math.floor(durationMs / end), 20);
  let current = 0;

  const timer = setInterval(() => {
    current += 1;
    count.value = current;
    if (current >= end) {
      count.value = end;
      clearInterval(timer);
    }
  }, incrementTime);
};

onMounted(() => {
  animateCount();
});

watch(() => props.value, () => {
  animateCount();
});
</script>
