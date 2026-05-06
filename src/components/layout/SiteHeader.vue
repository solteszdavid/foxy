<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import LiveDot from '@/components/ui/LiveDot.vue'

const activeSection = ref('top')
const sectionIds = ['top', 'about', 'deepdives', 'jatekok', 'felszereles', 'clips', 'webshop']

function updateActive() {
  const scrollY = window.scrollY + 200
  let active = 'top'
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (el && el.offsetTop <= scrollY) active = id
  }
  activeSection.value = active
}

onMounted(() => {
  window.addEventListener('scroll', updateActive, { passive: true })
  updateActive()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActive)
})
</script>

<template>
  <nav
    class="relative z-10 flex items-center justify-between gap-4 px-8 md:px-14 pt-7 flex-wrap"
  >
    <!-- Logo -->
    <a href="#top" class="flex items-center gap-3 shrink-0">
      <div class="w-7 h-7 grid place-items-center text-white">
        <svg viewBox="0 0 22 22" class="w-[22px] h-[22px]" fill="none">
          <path
            d="M11 1 L13.2 8.8 L21 11 L13.2 13.2 L11 21 L8.8 13.2 L1 11 L8.8 8.8 Z"
            fill="url(#ng)"
          />
          <defs>
            <linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
              <stop stop-color="#ff6b1a" />
              <stop offset="1" stop-color="#ffc26e" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="font-display text-[13px] leading-[0.95] tracking-[0.08em]">FOX<br />Y</div>
    </a>

    <!-- Nav links -->
    <div class="hidden md:flex gap-6">
      <a
        v-for="link in [
          { href: '#about', label: 'Rólam' },
          { href: '#deepdives', label: 'Tartalom' },
          { href: '#jatekok', label: 'Játékok' },
          { href: '#felszereles', label: 'Felszerelés' },
          { href: '#clips', label: 'Klipek' },
          { href: '#webshop', label: 'Webshop' },
        ]"
        :key="link.href"
        :href="link.href"
        class="nav-link text-[12px] font-semibold tracking-[0.14em] uppercase hover:text-cyan transition"
        :class="{ active: activeSection === link.href.slice(1) }"
      >
        {{ link.label }}
      </a>
    </div>

    <!-- Live CTA -->
    <a
      href="https://twitch.tv"
      target="_blank"
      class="h-11 px-6 rounded-xl border border-white/10 bg-white/[0.02] text-[12px] font-semibold tracking-[0.14em] uppercase flex items-center gap-2 hover:bg-white/[0.08] hover:border-white/30 transition shrink-0"
    >
      <LiveDot />
      Élő Adás
    </a>
  </nav>
</template>
