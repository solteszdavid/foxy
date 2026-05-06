<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  text: { type: String, default: '' },

  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'ghost'].includes(v),
  },

  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },

  as: {
    // 'button' | 'a' | 'router-link'
    type: String,
    default: 'button',
  },

  to: {
    // RouterLink-hez
    type: [String, Object],
    default: null,
  },

  href: {
    // <a>-hoz
    type: String,
    default: null,
  },

  type: {
    // <button>-hoz
    type: String,
    default: 'button',
  },

  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },

  class: { type: [String, Array, Object], default: '' },
})

const isDisabled = computed(() => props.disabled || props.loading)

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
    case 'ghost':
      return 'bg-transparent text-zinc-900 hover:bg-zinc-100'
    case 'primary':
    default:
      return 'bg-zinc-900 text-white hover:bg-zinc-800'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-9 px-3 text-sm'
    case 'lg':
      return 'h-12 px-6 text-base'
    case 'md':
    default:
      return 'h-10 px-4 text-sm'
  }
})

const tag = computed(() => {
  if (props.as === 'router-link') return RouterLink
  if (props.as === 'a') return 'a'
  return 'button'
})

const componentAttrs = computed(() => {
  // RouterLink
  if (props.as === 'router-link') {
    return {
      to: props.to ?? '/',
      'aria-disabled': isDisabled.value ? 'true' : undefined,
      tabindex: isDisabled.value ? -1 : undefined,
    }
  }

  // Anchor
  if (props.as === 'a') {
    return {
      href: props.href ?? '#',
      target: props.href?.startsWith('http') ? '_blank' : undefined,
      rel: props.href?.startsWith('http') ? 'noopener noreferrer' : undefined,
      'aria-disabled': isDisabled.value ? 'true' : undefined,
      tabindex: isDisabled.value ? -1 : undefined,
    }
  }

  // Button
  return {
    type: props.type,
    disabled: isDisabled.value,
  }
})

const classes = computed(() => [baseClasses, variantClasses.value, sizeClasses.value, props.class])
</script>

<template>
  <component :is="tag" v-bind="componentAttrs" :class="classes">
    <span
      v-if="loading"
      class="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />
    <slot>{{ text }}</slot>
  </component>
</template>
