<script setup>
import { ref } from 'vue'

const clipRow = ref(null)

function scrollPrev() {
  clipRow.value?.scrollBy({ left: -360, behavior: 'smooth' })
}
function scrollNext() {
  clipRow.value?.scrollBy({ left: 360, behavior: 'smooth' })
}

const clips = [
  {
    title: 'VALAMI MOZGOTT A FOLYOSÓ VÉGÉN',
    tag: 'URBEX',
    tagVariant: 'cyan',
    sub: 'Elhagyott elmeotthon · Pest m.',
    views: '142 308 megtekintés',
    time: '2 hete',
    duration: '0:42',
    img: 'photo-1499952127939-9bbf5af6c51c',
    playGlow: '#ffc26e',
  },
  {
    title: '1V5 CLUTCH AZ INFERNO B-N',
    tag: 'GAMEPLAY',
    tagVariant: 'twitch',
    sub: 'Counter-Strike 2',
    views: '88 451 megtekintés',
    time: '1 hónapja',
    duration: '0:28',
    img: 'photo-1542751371-adc38448a05e',
    playGlow: '#ff6b1a',
  },
  {
    title: 'VICTORY ROYALE 1 HP-VAL',
    tag: 'GAMEPLAY',
    tagVariant: 'twitch',
    sub: 'Fortnite',
    views: '267 912 megtekintés',
    time: '3 hete',
    duration: '0:15',
    img: 'photo-1551103782-8ab07afd45c1',
    playGlow: '#ffc26e',
  },
  {
    title: 'A KAPU MAGÁTÓL CSAPÓDOTT BE',
    tag: 'URBEX',
    tagVariant: 'cyan',
    sub: 'Elhagyott szanatórium · Mátra',
    views: '51 003 megtekintés',
    time: '6 napja',
    duration: '1:04',
    img: 'photo-1493514789931-586cb221d7a7',
    playGlow: '#ff6b1a',
  },
]
</script>

<template>
  <section id="clips" class="relative z-[2] px-6 md:px-14 py-20">
    <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
      <div>
        <div
          class="section-kicker font-mono text-[11px] tracking-[0.22em] uppercase text-ink-dim mb-6"
        >
          005 · Klipek
        </div>
        <h2 class="font-display text-[56px] md:text-[80px] leading-[0.95]">
          <span class="grad-text-2">LEGJOBB PILLANATOK.</span>
        </h2>
      </div>

      <!-- Prev / Next -->
      <div class="flex gap-2">
        <button
          class="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] grid place-items-center hover:border-twitch/60 hover:bg-twitch/10 transition"
          aria-label="Előző"
          @click="scrollPrev"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button
          class="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] grid place-items-center hover:border-twitch/60 hover:bg-twitch/10 transition"
          aria-label="Következő"
          @click="scrollNext"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Clip scroll row -->
    <div ref="clipRow" class="clip-row flex gap-5 overflow-x-auto pb-5 -mx-2 px-2">
      <article
        v-for="clip in clips"
        :key="clip.title"
        class="clip-card glass glass-hover shrink-0 w-[340px] overflow-hidden"
      >
        <div class="relative">
          <img
            :src="`https://images.unsplash.com/${clip.img}?w=640&q=80`"
            class="w-full aspect-video object-cover"
            :alt="clip.title"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent"></div>

          <!-- Duration badge -->
          <div
            class="absolute top-3 left-3 font-mono text-[10px] tracking-[0.14em] uppercase px-2 py-1 rounded-md bg-black/60 border border-white/15"
          >
            KLIP · {{ clip.duration }}
          </div>

          <!-- Bottom overlay -->
          <div class="absolute bottom-3 left-3 right-3 flex justify-between items-end">
            <div class="flex flex-col gap-1">
              <span class="pill" :class="`pill-${clip.tagVariant}`">{{ clip.tag }}</span>
              <span class="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-dim">
                {{ clip.sub }}
              </span>
            </div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="#fff"
              :style="`drop-shadow: 0 0 10px ${clip.playGlow}`"
            >
              <path d="M7 5v14l12-7L7 5z" />
            </svg>
          </div>
        </div>

        <div class="p-5">
          <h4 class="font-display text-[22px] leading-tight mb-3">{{ clip.title }}</h4>
          <div class="flex justify-between font-mono text-[11px] text-ink-mute">
            <span>{{ clip.views }}</span>
            <span>{{ clip.time }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
