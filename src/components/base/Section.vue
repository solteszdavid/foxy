<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: { type: String, default: 'section' },
  id: { type: String, default: null },

  spacing: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg', 'none'].includes(v),
  },

  bleed: { type: Boolean, default: false }, // background full width
  class: { type: [String, Array, Object], default: '' },

  // ha nem akarsz container-t használni, kikapcsolható
  container: { type: Boolean, default: true },
})
const spacingClass = computed(() => {
  switch (props.spacing) {
    case 'none':
      return ''
    case 'sm':
      return 'py-10 md:py-14'
    case 'lg':
      return 'py-20 md:py-28'
    case 'md':
    default:
      return 'py-16 md:py-24'
  }
})

const outerClass = computed(() => [spacingClass.value, props.class])
</script>

<template>
  <component :is="as" :id="id" :class="outerClass">
    <div v-if="container" class="container">
      <slot />
    </div>
    <slot v-else />
  </component>
</template>
