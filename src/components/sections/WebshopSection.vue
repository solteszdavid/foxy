<script setup>
import { ref } from 'vue'

const email = ref('')
const showThanks = ref(false)

function handleSubmit() {
  email.value = ''
  showThanks.value = true
  setTimeout(() => (showThanks.value = false), 4000)
}
</script>

<template>
  <section id="webshop" class="relative z-[2] px-6 md:px-14 py-20">
    <div
      class="section-kicker font-mono text-[11px] tracking-[0.22em] uppercase text-ink-dim mb-6"
    >
      006 · Webshop
    </div>

    <div
      class="relative glass overflow-hidden p-10 md:p-16 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center min-h-[440px]"
      style="border-color: rgba(62, 224, 163, 0.25)"
    >
      <!-- Background patterns -->
      <div class="absolute inset-0 hex-grid opacity-30 pointer-events-none"></div>
      <div
        class="absolute inset-0 pointer-events-none"
        style="background: radial-gradient(600px 400px at 90% 50%, rgba(62,224,163,0.18), transparent 65%)"
      ></div>

      <!-- Left: copy -->
      <div class="relative z-10">
        <div
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/40 mb-6"
          style="background: rgba(62, 224, 163, 0.15)"
        >
          <span
            class="w-2 h-2 rounded-full bg-mint"
            style="box-shadow: 0 0 8px #3ee0a3"
          ></span>
          <span class="font-mono text-[10px] tracking-[0.18em] uppercase text-mint">
            Q3 2026 · Drop #1
          </span>
        </div>

        <h2 class="font-display text-[64px] md:text-[96px] leading-[0.92] mb-6">
          <span class="grad-text-2">HAMA</span><span class="grad-mint">ROSAN.</span>
        </h2>

        <p class="text-ink-dim text-[16px] leading-[1.7] max-w-[480px] mb-8">
          Az első hivatalos Foxy kollekció. Pólók, pulcsik, sapkák és limitált poszterek –
          egyenesen a stream esztétikájából.
          <span class="text-white font-semibold">Iratkozz fel</span>, és értesítünk amint nyit a
          shop. Az első 200 feliratkozó 15% kedvezményt kap a debüt drop-ra.
        </p>

        <!-- Email form -->
        <form
          class="flex flex-col sm:flex-row gap-3 max-w-[480px]"
          @submit.prevent="handleSubmit"
        >
          <input
            v-model="email"
            type="email"
            required
            placeholder="te@email.hu"
            class="flex-1 h-14 px-5 rounded-xl text-[14px] focus:outline-none transition"
            style="background: #0c1612; border: 1px solid rgba(62,224,163,0.3); color: #fff4e6"
          />
          <button
            type="submit"
            class="h-14 px-8 rounded-xl text-[12px] font-bold tracking-[0.18em] uppercase text-[#062118] transition"
            style="background: linear-gradient(180deg, #5af0b8, #28b888); box-shadow: 0 0 30px rgba(62,224,163,0.4)"
          >
            Feliratkozás
          </button>
        </form>

        <!-- Thank you msg -->
        <p
          v-if="showThanks"
          class="mt-4 font-mono text-[12px] text-mint flex items-center gap-2"
        >
          <span
            class="w-2 h-2 rounded-full bg-mint"
            style="box-shadow: 0 0 8px #3ee0a3"
          ></span>
          Köszi! Szólunk amint nyit a shop.
        </p>

        <!-- Stats -->
        <div class="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
          <div>
            <div class="font-mono text-[10px] tracking-[0.16em] uppercase text-mint mb-1">
              Várólist
            </div>
            <div class="font-display text-[32px] leading-none grad-mint">2 147</div>
          </div>
          <div>
            <div class="font-mono text-[10px] tracking-[0.16em] uppercase text-mint mb-1">
              Termék
            </div>
            <div class="font-display text-[32px] leading-none grad-mint">12+</div>
          </div>
          <div>
            <div class="font-mono text-[10px] tracking-[0.16em] uppercase text-mint mb-1">Drop</div>
            <div class="font-display text-[32px] leading-none grad-mint">Q3 '26</div>
          </div>
        </div>
      </div>

      <!-- Right: teaser product cards -->
      <div class="relative h-[360px] lg:h-[480px] hidden lg:block">
        <!-- Back card -->
        <div
          class="absolute top-4 right-12 w-[200px] h-[260px] rounded-2xl p-5 flex flex-col justify-between"
          style="transform: rotate(6deg); border: 1px solid rgba(62,224,163,0.3); background: linear-gradient(135deg, #0e1a14, #0c0705); box-shadow: 0 20px 60px rgba(62,224,163,0.18)"
        >
          <div class="flex items-start justify-between">
            <div class="font-display text-[22px] grad-mint">FOXY</div>
            <span class="pill pill-mint">#01</span>
          </div>
          <div class="grid place-items-center flex-1">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#3ee0a3" stroke-width="1" class="opacity-60">
              <path d="M4 5h4l1 2h6l1-2h4v15H4zM9 9v8M15 9v8" />
            </svg>
          </div>
          <div class="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-mute">
            Tee · Heavy 240g
          </div>
        </div>

        <!-- Left card -->
        <div
          class="absolute bottom-12 left-2 w-[180px] h-[230px] rounded-2xl p-5 flex flex-col justify-between"
          style="transform: rotate(-8deg); border: 1px solid rgba(62,224,163,0.3); background: linear-gradient(135deg, #0e1a14, #0c0705); box-shadow: 0 20px 60px rgba(62,224,163,0.12)"
        >
          <div class="flex items-start justify-between">
            <div class="font-display text-[22px] grad-mint">FOXY</div>
            <span class="pill pill-mint">#02</span>
          </div>
          <div class="grid place-items-center flex-1">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3ee0a3" stroke-width="1" class="opacity-60">
              <path d="M4 12c0-4 4-7 8-7s8 3 8 7v5H4z" />
            </svg>
          </div>
          <div class="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-mute">
            Cap · Embroid.
          </div>
        </div>

        <!-- Center featured card -->
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[280px] rounded-2xl p-5 flex flex-col justify-between"
          style="border: 1px solid rgba(62,224,163,0.5); background: linear-gradient(135deg, #11241c, #0a1a14); box-shadow: 0 30px 80px rgba(62,224,163,0.3); backdrop-filter: blur(10px)"
        >
          <div class="flex items-start justify-between">
            <div class="font-display text-[22px] grad-mint">FOXY</div>
            <span class="pill pill-mint">★ Limited</span>
          </div>
          <div class="grid place-items-center flex-1">
            <svg width="120" height="120" viewBox="0 0 22 22" fill="none">
              <path
                d="M11 1 L13.2 8.8 L21 11 L13.2 13.2 L11 21 L8.8 13.2 L1 11 L8.8 8.8 Z"
                fill="#3ee0a3"
                opacity="0.85"
              />
            </svg>
          </div>
          <div class="font-mono text-[10px] tracking-[0.14em] uppercase text-mint">
            Poster · A2 · Numbered
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
