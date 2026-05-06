<script setup>
import { ref, onMounted } from 'vue'
import { useRevealObserver } from '@/composables/useRevealObserver.js'

const cardEls = []
const { observe } = useRevealObserver()

onMounted(() => {
  cardEls.forEach((el) => el && observe(el))
})

const mintIcon = (d) => d

const equipment = [
  {
    title: 'PC',
    img: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=80',
    items: [
      { icon: 'rect', label: 'ASUS ROG CROSSHAIR X870E HERO' },
      { icon: 'rect', label: 'AMD Ryzen 9 9950X3D' },
      { icon: 'circle', label: 'Deepcool ASSASSIN IV Premium' },
      { icon: 'mem', label: '96GB G.SKILL Trident Z5 NEO CL28 6000 MHz' },
      { icon: 'rect', label: 'ASUS ROG ASTRAL 5090' },
      { icon: 'disk', label: '2 TB NVMe SSD + 2 TB 2.5″ SATA SSD' },
      { icon: 'bolt', label: 'SUPER-FLOWER Leadex Platinum 2000W 8Pack Edition' },
      { icon: 'rect', label: 'Hyte Y70 Touch (Panda)' },
    ],
  },
  {
    title: 'Konzolok',
    img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80',
    items: [
      { icon: 'ctrl', label: 'PlayStation 5 Pro' },
      { icon: 'ctrl', label: 'Xbox Series X' },
      { icon: 'ctrl', label: 'Nintendo Switch 2 (OLED)' },
      { icon: 'circle', label: 'Steam Deck OLED 1TB' },
      { icon: 'circle', label: 'Meta Quest 3' },
      { icon: 'ctrl', label: 'Retro: SNES, N64, GameCube' },
    ],
  },
  {
    title: 'Kamerák',
    img: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80',
    items: [
      { icon: 'cam', label: 'Sony A7 IV (fő test)' },
      { icon: 'cam', label: 'Sony FX3 (Urbex/cinema)' },
      { icon: 'circle', label: 'Sony 24-70mm GM II' },
      { icon: 'circle', label: 'Sigma 16-28mm f/2.8' },
      { icon: 'circle', label: 'DJI Osmo Pocket 3' },
      { icon: 'rect', label: 'Insta360 X4' },
      { icon: 'cam', label: 'GoPro HERO 13 Black' },
    ],
  },
  {
    title: 'Egyebek',
    img: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80',
    items: [
      { icon: 'head', label: 'Razer Moray (in-ear monitor)' },
      { icon: 'rect', label: 'Keychron Q1 QMK Custom' },
      { icon: 'bell', label: 'Steelseries Rival 3' },
      { icon: 'monitor', label: 'Acer Nitro XV28 (4K)' },
      { icon: 'circle', label: 'Shure SM7B + Cloudlifter' },
      { icon: 'rect', label: 'GoXLR Mini' },
      { icon: 'plus', label: 'Elgato Stream Deck XL' },
      { icon: 'circle', label: 'Elgato Key Light Air × 2' },
    ],
  },
]
</script>

<template>
  <section id="felszereles" class="relative z-[2] px-6 md:px-14 py-20">
    <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
      <div>
        <div
          class="section-kicker font-mono text-[11px] tracking-[0.22em] uppercase text-ink-dim mb-6"
        >
          004 · Felszerelés
        </div>
        <h2 class="font-display text-[56px] md:text-[80px] leading-[0.95]">
          <span class="grad-text-2">FOXY <span class="grad-mint">SETUPJA</span></span>
        </h2>
      </div>
      <p class="text-ink-dim text-[14px] max-w-[400px]">
        Amit használok stremeléshez, vágáshoz és Urbex felfedezésekhez.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <article
        v-for="(cat, i) in equipment"
        :key="cat.title"
        :ref="(el) => cardEls.push(el)"
        class="glass p-7 reveal"
      >
        <h3 class="font-display text-[34px] tracking-[0.02em] text-center mb-6">{{ cat.title }}</h3>

        <!-- Image -->
        <div
          class="rounded-xl bg-gradient-to-br from-[#15100a] to-[#0c0705] p-6 mb-6 grid place-items-center min-h-[260px] border border-white/5"
        >
          <img
            :src="cat.img"
            :alt="cat.title"
            class="max-h-[260px] object-contain rounded-lg"
          />
        </div>

        <!-- Item list -->
        <ul class="space-y-2.5 text-[13.5px]">
          <li v-for="item in cat.items" :key="item.label" class="flex items-center gap-3">
            <!-- Generic mint dot icon -->
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3ee0a3"
              stroke-width="2"
              class="shrink-0"
            >
              <circle cx="12" cy="12" r="4" />
            </svg>
            {{ item.label }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
