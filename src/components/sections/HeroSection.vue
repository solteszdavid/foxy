<script setup>
import LiveDot from '@/components/ui/LiveDot.vue'
</script>

<template>
  <section
    id="top"
    class="relative z-[2] px-6 md:px-14 pt-16 md:pt-20 pb-10 grid lg:grid-cols-[1.05fr_1fr] gap-10 min-h-[82vh]"
  >
    <!-- ── Left content ────────────────────────────────── -->
    <div class="pt-6 md:pt-10">
      <div
        class="flex items-center gap-3 mb-7 text-[11px] tracking-[0.22em] text-ink-dim uppercase flex-wrap"
      >
        <span class="w-6 h-px bg-gradient-to-r from-twitch to-cyan"></span>
        Streamer · Tartalomgyártó · 2021 óta
      </div>

      <h1
        class="font-display text-[64px] sm:text-[88px] lg:text-[104px] leading-[0.92] tracking-[0.005em] m-0 mb-8"
        style="text-wrap: balance"
      >
        <span class="grad-text">SZIA, ÉN VAGYOK</span><br />
        <span class="grad-text-2">FOXY.</span>
      </h1>

      <div class="flex flex-wrap items-center gap-6 mb-10">
        <a
          href="https://twitch.tv"
          target="_blank"
          class="cta-glow relative h-16 px-10 rounded-2xl text-[12px] font-bold tracking-[0.18em] uppercase text-[#2a0f00] flex items-center gap-3"
        >
          <span class="cta-pulse"></span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 5v14l12-7L7 5z" />
          </svg>
          Kövess a streamen
        </a>
        <p class="text-[14px] leading-[1.55] text-ink-dim max-w-[300px]">
          Végigjátszások, késő-éjszakai sessionök, és Urbex tartalmak – egy helyen.
        </p>
      </div>

      <!-- Social follower row -->
      <div class="flex flex-wrap gap-3">
        <a href="#" class="glass glass-hover px-5 py-4 flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-xl grid place-items-center"
            style="background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)); border: 1px solid rgba(255,255,255,0.12)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
              <path
                d="M19.6 6.3a4.8 4.8 0 0 1-3.5-1.6 4.7 4.7 0 0 1-1.2-3H11v13.4a2.8 2.8 0 1 1-2-2.7V8.8a6 6 0 1 0 5.2 5.9V8.6a8 8 0 0 0 5.5 2v-3.4l-.1-.9z"
              />
            </svg>
          </div>
          <div>
            <div class="font-mono text-[10px] tracking-[0.16em] text-ink-mute uppercase">TikTok</div>
            <div class="font-display text-[22px] tracking-[0.02em] glow-num">412K</div>
          </div>
        </a>

        <a href="#" class="glass glass-hover px-5 py-4 flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-xl grid place-items-center"
            style="background: linear-gradient(135deg, rgba(255,0,55,0.25), rgba(255,0,55,0.05)); border: 1px solid rgba(255,0,55,0.35)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff0037">
              <path
                d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"
              />
            </svg>
          </div>
          <div>
            <div class="font-mono text-[10px] tracking-[0.16em] text-ink-mute uppercase">YouTube</div>
            <div class="font-display text-[22px] tracking-[0.02em] glow-num">186K</div>
          </div>
        </a>
      </div>

      <!-- Bottom row: scroll indicator + platform links -->
      <div class="flex flex-wrap items-end justify-between gap-8 mt-14">
        <div class="relative w-24 h-24 grid place-items-center" title="Görgess">
          <svg viewBox="0 0 100 100" class="w-full h-full spin">
            <defs>
              <path
                id="circlePath"
                d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              />
            </defs>
            <text
              fill="rgba(255,255,255,0.85)"
              font-family="JetBrains Mono, monospace"
              font-size="8.5"
              letter-spacing="3"
            >
              <textPath href="#circlePath">GÖRGESS · GÖRGESS · GÖRGESS · </textPath>
            </text>
          </svg>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            class="absolute"
          >
            <path d="M12 4v16m0 0l-6-6m6 6l6-6" />
          </svg>
        </div>

        <div class="flex gap-3 flex-wrap">
          <a
            href="#"
            class="h-14 px-5 rounded-xl bg-[#15100a] border border-white/10 flex items-center gap-3 hover:border-white/30 hover:bg-[#1e1509] transition"
          >
            <svg width="18" height="20" viewBox="0 0 24 28" fill="#ff6b1a">
              <path
                d="M3 0l-2 5v19h6v4h4l4-4h5l7-7V0H3zm22 15l-4 4h-6l-4 4v-4H6V3h19v12zm-8-8h2v5h-2V7zm-5 0h2v5h-2V7z"
              />
            </svg>
            <div class="flex flex-col leading-[1.05]">
              <span class="text-[9px] tracking-[0.12em] text-ink-mute uppercase">Élő itt</span>
              <span class="text-[14px] font-semibold">Twitch</span>
            </div>
          </a>
          <a
            href="#"
            class="h-14 px-5 rounded-xl bg-[#15100a] border border-white/10 flex items-center gap-3 hover:border-white/30 hover:bg-[#1e1509] transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff0037">
              <path
                d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"
              />
            </svg>
            <div class="flex flex-col leading-[1.05]">
              <span class="text-[9px] tracking-[0.12em] text-ink-mute uppercase">VOD-ok</span>
              <span class="text-[14px] font-semibold">YouTube</span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- ── Avatar hero card ───────────────────────────── -->
    <div
      class="relative min-h-[540px] rounded-[20px] overflow-hidden border border-white/10"
      style="background: radial-gradient(600px 400px at 55% 40%, rgba(255,107,26,0.55), transparent 65%), radial-gradient(800px 600px at 60% 70%, rgba(255,194,110,0.25), transparent 70%), linear-gradient(180deg, #1a0d05 0%, #0c0705 100%)"
    >
      <!-- scanline overlay -->
      <div
        class="absolute inset-0 pointer-events-none"
        style="background-image: repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 3px)"
      ></div>

      <!-- HUD labels -->
      <div
        class="absolute top-5 left-5 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute flex items-center gap-2"
      >
        <LiveDot />
        ÉLŐ · 1080p60
      </div>
      <div class="absolute top-5 right-5 font-mono text-[10px] tracking-[0.14em] text-ink-mute">
        REC · 03:47:12
      </div>

      <!-- Avatar -->
      <div
        class="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5"
      >
        <div class="avatar-ring">
          <div>
            <img
              src="https://picsum.photos/seed/foxy-avatar/220/220"
              alt="Foxy avatar"
              class="w-[180px] h-[180px] rounded-full object-cover"
            />
          </div>
        </div>
        <div class="font-mono text-[10px] tracking-[0.22em] uppercase text-cyan">@foxy</div>
        <div
          class="flex items-center gap-2 px-4 py-2 rounded-full border border-live/40"
          style="background: rgba(255, 170, 61, 0.15)"
        >
          <LiveDot />
          <span class="font-mono text-[10px] tracking-[0.18em] uppercase text-live">ÉLŐBEN</span>
        </div>
      </div>

      <!-- Sparks -->
      <div class="absolute inset-0 pointer-events-none">
        <span
          class="absolute w-[3px] h-[3px] rounded-full bg-cyan"
          style="left: 15%; top: 30%; box-shadow: 0 0 10px #ffc26e"
        ></span>
        <span
          class="absolute w-[3px] h-[3px] rounded-full bg-twitch"
          style="left: 85%; top: 25%; box-shadow: 0 0 10px #ff6b1a"
        ></span>
        <span
          class="absolute w-[2px] h-[2px] rounded-full bg-white"
          style="left: 25%; top: 75%"
        ></span>
        <span
          class="absolute w-[3px] h-[3px] rounded-full bg-cyan"
          style="left: 75%; top: 70%; box-shadow: 0 0 10px #ffc26e"
        ></span>
        <span
          class="absolute w-[2px] h-[2px] rounded-full bg-white"
          style="left: 45%; top: 15%"
        ></span>
        <span
          class="absolute w-[2px] h-[2px] rounded-full bg-white"
          style="left: 60%; top: 85%"
        ></span>
        <!-- Embers -->
        <span class="ember" style="left: 20%; bottom: 0; animation-delay: 0s; --dx: 20px"></span>
        <span
          class="ember"
          style="left: 35%; bottom: 0; animation-delay: 1.2s; --dx: -15px"
        ></span>
        <span
          class="ember"
          style="left: 55%; bottom: 0; animation-delay: 2.1s; --dx: 25px"
        ></span>
        <span
          class="ember"
          style="left: 72%; bottom: 0; animation-delay: 0.6s; --dx: -20px"
        ></span>
        <span
          class="ember"
          style="left: 85%; bottom: 0; animation-delay: 3.4s; --dx: 10px"
        ></span>
      </div>

      <!-- Bottom HUD -->
      <div
        class="absolute bottom-5 left-5 font-mono text-[10px] tracking-[0.14em] uppercase text-ink-mute"
      >
        [ stream overlay · preview ]
      </div>
      <div class="absolute bottom-5 right-5 font-mono text-[10px] tracking-[0.14em] text-ink-mute">
        UPTIME 03:47:12
      </div>
    </div>
  </section>
</template>
