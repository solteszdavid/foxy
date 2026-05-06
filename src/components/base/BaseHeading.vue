<script setup>
import { useRevealObserver } from '@composables/useRevealObserver.js'

defineProps({
  text: { type: String, required: true },
})

const el = ref(null)
const { observe } = useRevealObserver({ threshold: 0.15, rootMargin: '0px 0px -5% 0px' })
onMounted(() => observe(el.value))
</script>

<template>
  <h2 ref="el" class="reveal font-display text-5xl md:text-6xl text-brand-black leading-tight">
    {{ text }}
  </h2>
</template>
