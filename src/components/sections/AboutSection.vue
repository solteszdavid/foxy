<script setup>
import { ref, onMounted } from 'vue'
import { useRevealObserver } from '@/composables/useRevealObserver.js'

const statsCard = ref(null)
const setupCard = ref(null)
const { observe } = useRevealObserver()

onMounted(() => {
  observe(statsCard.value)
  observe(setupCard.value)
})
</script>

<template>
  <section id="about" class="relative z-[2] px-6 md:px-14 py-20">
    <div class="section-kicker font-mono text-[11px] tracking-[0.22em] uppercase text-ink-dim mb-6">
      001 · Rólam
    </div>
    <h2 class="font-display text-[56px] md:text-[80px] leading-[0.95] mb-12">
      <span class="grad-text">ÉJSZAKAI BAGOLY.</span><br />
      <span class="grad-text-2">JÁTÉKMEGSZÁLLOTT.</span>
    </h2>

    <div class="grid lg:grid-cols-[1.7fr_1fr] gap-10">
      <!-- Text -->
      <div class="space-y-5 text-ink-dim text-[16px] leading-[1.75] max-w-[68ch]">
        <p>
          Foxy vagyok – variety streamer, valahol egy mechanikus billentyűzet és egy kihűlt kávé
          között. SNES platformerekkel nőttem fel, és igazából sosem tudtam továbblépni; a
          streamelés az ürügy arra, hogy hajnal négyig vitatkozzak egy bossal a második fázis
          tisztességességéről.
        </p>
        <p>
          A csatorna fő profilja a single-player RPG, soulslike és metroidvania, némi narratív
          indie-vel megspékelve. Ha egy játéknak hangulatos a soundtrackje és a főhősének traumája,
          valószínűleg végigjátszom.
        </p>
        <p>
          Engem a játékok
          <span class="text-cyan">elemzése</span>
          érdekel – minden komolyabb végigjátszás kap egy elemzést, egy post-mortem VOD-ot, és egy
          hangulatképet azokról a pillanatokról, amik megfogtak.
        </p>
      </div>

      <!-- Stats & setup -->
      <aside class="space-y-4">
        <!-- Stats card -->
        <div ref="statsCard" class="glass p-6 reveal">
          <div class="flex items-center justify-between mb-5">
            <div class="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-mute">
              Statisztikák
            </div>
            <div class="font-mono text-[10px] text-cyan">ÉLŐ</div>
          </div>

          <div class="space-y-5">
            <div class="flex items-baseline justify-between border-b border-white/5 pb-4">
              <div>
                <div class="font-display text-[36px] leading-none glow-num grad-text">4 812</div>
                <div class="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-mute mt-1">
                  Streamelt óra
                </div>
              </div>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff6b1a"
                stroke-width="1.5"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>

            <div class="flex items-baseline justify-between border-b border-white/5 pb-4">
              <div>
                <div class="font-display text-[36px] leading-none glow-num grad-text-2">127</div>
                <div class="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-mute mt-1">
                  Befejezett játék
                </div>
              </div>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffc26e"
                stroke-width="1.5"
              >
                <path d="M5 3v4a7 7 0 0 0 14 0V3M8 21h8M12 14v7" />
              </svg>
            </div>

            <div class="flex items-baseline justify-between border-b border-white/5 pb-4">
              <div>
                <div class="font-display text-[36px] leading-none glow-num grad-text">3,2K</div>
                <div class="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-mute mt-1">
                  Átlag néző
                </div>
              </div>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff6b1a"
                stroke-width="1.5"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>

            <div class="flex items-baseline justify-between">
              <div>
                <div class="font-display text-[36px] leading-none glow-num grad-text-2">248K</div>
                <div class="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-mute mt-1">
                  Követő
                </div>
              </div>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffc26e"
                stroke-width="1.5"
              >
                <path
                  d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Setup card -->
        <div ref="setupCard" class="glass p-5 reveal">
          <div class="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-mute mb-3">
            Jelenleg fut
          </div>
          <div class="space-y-2 text-[13px]">
            <div class="flex justify-between">
              <span class="text-ink-mute">GÉP</span><span>RTX 4090 / 13900K</span>
            </div>
            <div class="flex justify-between">
              <span class="text-ink-mute">KIJELZŐ</span><span>OLED · 240Hz</span>
            </div>
            <div class="flex justify-between">
              <span class="text-ink-mute">MIKROFON</span><span>Shure SM7B</span>
            </div>
            <div class="flex justify-between">
              <span class="text-ink-mute">IDŐPONT</span><span>K–Szo · 20:00</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
