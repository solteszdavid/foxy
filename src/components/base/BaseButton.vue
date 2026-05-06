<script setup>
import { ArrowRight } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  variant: { type: String, default: 'dark' }, // 'dark' | 'light' | 'secondary' (alias for light)
  size: { type: String, default: 'md' }, // 'sm' | 'md' | 'lg'
  as: { type: String, default: 'button' }, // 'button' | 'a' | 'router-link'
  href: String,
  to: [String, Object],
  type: { type: String, default: 'button' },
})

const tag = computed(() => {
  if (props.as === 'a') return 'a'
  if (props.as === 'router-link') return RouterLink
  return 'button'
})

const isLight = computed(() => props.variant === 'light' || props.variant === 'secondary')

const sizeClasses = computed(() => ({
  sm: 'px-5 py-2 text-sm gap-2',
  md: 'px-6 py-2.5 text-sm gap-2.5',
  lg: 'px-7 py-3 text-base gap-3',
}[props.size] ?? 'px-6 py-2.5 text-sm gap-2.5'))

const iconSize = computed(() => ({ sm: 14, md: 14, lg: 16 }[props.size] ?? 14))
</script>

<template>
  <component
    :is="tag"
    v-bind="{
      ...(as === 'a' ? { href } : {}),
      ...(as === 'router-link' ? { to } : {}),
      ...(as === 'button' ? { type } : {}),
    }"
    class="group inline-flex items-center rounded-full font-body font-semibold transition-all duration-300 cursor-pointer select-none"
    :class="[
      sizeClasses,
      isLight
        ? 'bg-white text-brand-black hover:bg-white/90 shadow-sm'
        : 'bg-brand text-white hover:bg-brand-dark',
    ]"
  >
    <span>{{ text }}</span>
    <span
      class="flex items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5"
      :class="[
        isLight ? 'bg-brand-black/10' : 'bg-white/20',
        size === 'lg' ? 'w-7 h-7' : 'w-6 h-6',
      ]"
    >
      <ArrowRight :size="iconSize" />
    </span>
  </component>
</template>
