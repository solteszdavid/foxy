<script setup>
import LiveDot from '@/components/ui/LiveDot.vue'
</script>

<template>
  <footer id="footer" class="relative z-[2] px-6 md:px-14 py-20">
    <div class="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-end">
      <!-- Left copy -->
      <div>
        <div class="section-kicker font-mono text-[11px] tracking-[0.22em] uppercase text-ink-dim mb-6">
          Vége · Találkozunk élőben
        </div>
        <h2 class="font-display text-[56px] md:text-[96px] leading-[0.95]">
          <span class="grad-text">GYERE ÉS</span><br />
          <span class="grad-text-2">NÉZZ MEG.</span>
        </h2>
        <p class="text-ink-dim text-[14px] mt-6 max-w-[440px]">
          Kedddtől szombatig, este 8-tól. Lurkerek üdvözölve, követőknek custom emoték, és igen
          – a Discord még mindig a legfurább hely a neten.
        </p>
      </div>

      <!-- Social grid -->
      <div class="grid grid-cols-2 gap-3">
        <a href="#" aria-label="Twitch" class="glass glass-hover p-5 flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-xl grid place-items-center"
            style="background: linear-gradient(135deg, rgba(255,107,26,0.3), rgba(255,107,26,0.08)); border: 1px solid rgba(255,107,26,0.4)"
          >
            <svg width="22" height="24" viewBox="0 0 24 28" fill="#ff6b1a">
              <path
                d="M3 0l-2 5v19h6v4h4l4-4h5l7-7V0H3zm22 15l-4 4h-6l-4 4v-4H6V3h19v12zm-8-8h2v5h-2V7zm-5 0h2v5h-2V7z"
              />
            </svg>
          </div>
          <div>
            <div class="font-mono text-[9px] tracking-[0.14em] uppercase text-ink-mute">Twitch</div>
            <div class="font-display text-[20px] leading-none mt-1">/foxy</div>
          </div>
        </a>

        <a href="#" aria-label="YouTube" class="glass glass-hover p-5 flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-xl grid place-items-center"
            style="background: linear-gradient(135deg, rgba(255,0,55,0.3), rgba(255,0,55,0.08)); border: 1px solid rgba(255,0,55,0.4)"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#ff0037">
              <path
                d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"
              />
            </svg>
          </div>
          <div>
            <div class="font-mono text-[9px] tracking-[0.14em] uppercase text-ink-mute">YouTube</div>
            <div class="font-display text-[20px] leading-none mt-1">@foxy-vods</div>
          </div>
        </a>

        <a href="#" aria-label="TikTok" class="glass glass-hover p-5 flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-xl grid place-items-center"
            style="background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.04)); border: 1px solid rgba(255,255,255,0.25)"
          >
            <svg width="20" height="22" viewBox="0 0 24 24" fill="#fff">
              <path
                d="M19.6 6.3a4.8 4.8 0 0 1-3.5-1.6 4.7 4.7 0 0 1-1.2-3H11v13.4a2.8 2.8 0 1 1-2-2.7V8.8a6 6 0 1 0 5.2 5.9V8.6a8 8 0 0 0 5.5 2v-3.4l-.1-.9z"
              />
            </svg>
          </div>
          <div>
            <div class="font-mono text-[9px] tracking-[0.14em] uppercase text-ink-mute">TikTok</div>
            <div class="font-display text-[20px] leading-none mt-1">@foxy</div>
          </div>
        </a>

        <a href="#" aria-label="Discord" class="glass glass-hover p-5 flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-xl grid place-items-center"
            style="background: linear-gradient(135deg, rgba(88,101,242,0.3), rgba(88,101,242,0.08)); border: 1px solid rgba(88,101,242,0.4)"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#5865f2">
              <path
                d="M20.3 4.4a18 18 0 0 0-4.5-1.4c-.2.4-.4.9-.6 1.3a16.8 16.8 0 0 0-5 0c-.2-.4-.4-.9-.6-1.3a18 18 0 0 0-4.5 1.4C2.7 9 2 13.5 2.3 18a18 18 0 0 0 5.5 2.8c.4-.6.8-1.2 1.2-1.9-.7-.3-1.3-.6-1.9-1 .2-.1.3-.3.5-.4a12.8 12.8 0 0 0 11 0l.5.4c-.6.4-1.2.7-1.9 1 .4.7.8 1.3 1.2 1.9A18 18 0 0 0 24 18c.4-5.2-.7-9.7-3.7-13.6zM8.7 15.3c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3zm6.6 0c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3z"
              />
            </svg>
          </div>
          <div>
            <div class="font-mono text-[9px] tracking-[0.14em] uppercase text-ink-mute">Discord</div>
            <div class="font-display text-[20px] leading-none mt-1">foxy.gg/join</div>
          </div>
        </a>
      </div>
    </div>

    <!-- Bottom bar -->
    <div
      class="flex flex-wrap justify-between items-center mt-16 pt-8 border-t border-white/10 font-mono text-[11px] text-ink-mute tracking-[0.14em] uppercase gap-4"
    >
      <div>© 2026 Foxy · Minden klip a saját tulajdona</div>
      <div class="flex items-center gap-2">
        <LiveDot />
        Jelenleg élőben · Urbex felfedezés
      </div>
    </div>
  </footer>
</template>
