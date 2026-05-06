<script setup>
import { useRevealObserver } from '@composables/useRevealObserver.js'

defineProps({
  text: { type: String, required: true },
})

const el = ref(null)
const { observe } = useRevealObserver({ threshold: 0.2 })
onMounted(() => observe(el.value))
</script>

<template>
  <p ref="el" class="reveal uppercase text-brand-base font-semibold font-body text-sm tracking-widest">
    {{ text }}
  </p>
</template>
