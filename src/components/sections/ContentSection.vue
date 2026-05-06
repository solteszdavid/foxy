<script setup>
import { ref, onMounted } from 'vue'
import { useRevealObserver } from '@/composables/useRevealObserver.js'

const cardEls = []
const { observe } = useRevealObserver()

onMounted(() => {
  cardEls.forEach((el) => el && observe(el))
})
</script>

<template>
  <section id="deepdives" class="relative z-[2] px-6 md:px-14 py-20">
    <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
      <div>
        <div
          class="section-kicker font-mono text-[11px] tracking-[0.22em] uppercase text-ink-dim mb-6"
        >
          002 · Tartalom
        </div>
        <h2 class="font-display text-[56px] md:text-[80px] leading-[0.95]">
          <span class="grad-text">MÉLYEBBRE.</span>
        </h2>
      </div>
      <p class="text-ink-dim text-[14px] max-w-[400px]">
        Három fő irány, három teljesen különböző hangulat – válassz, és nézz bele.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

      <!-- Gaming card -->
      <a
        href="#jatekok"
        :ref="(el) => cardEls.push(el)"
        class="game-card glass overflow-hidden flex flex-col reveal"
      >
        <div class="relative aspect-[16/10] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=80"
            alt="Gaming setup"
            class="cover absolute inset-0 w-full h-full object-cover"
          />
          <div
            class="absolute inset-0"
            style="background: linear-gradient(180deg, rgba(12,7,5,0.1) 30%, rgba(12,7,5,0.85) 80%, rgba(12,7,5,0.98) 100%)"
          ></div>
          <span class="absolute top-4 left-4 pill pill-twitch">Játék</span>
          <h3
            class="absolute bottom-4 left-5 right-5 font-display text-[44px] leading-[0.95] tracking-[0.01em] grad-text drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            GAMING
          </h3>
        </div>
        <div class="p-6 flex-1 flex flex-col">
          <p class="text-ink-dim text-[14px] leading-[1.7] mb-6 flex-1">
            Soulslike-tól a metroidvaniáig – minden hosszabb futás kap egy alapos elemzést,
            post-mortem VOD-ot és egy hangulatos képgyűjteményt.
          </p>
          <div class="grid grid-cols-3 gap-3 pt-5 border-t border-white/10">
            <div>
              <div
                class="font-mono text-[10px] tracking-[0.18em] uppercase text-twitch font-semibold mb-1"
              >
                Játék
              </div>
              <div class="big-stat grad-text">127</div>
            </div>
            <div>
              <div
                class="font-mono text-[10px] tracking-[0.18em] uppercase text-twitch font-semibold mb-1"
              >
                Óra
              </div>
              <div class="big-stat grad-text">4 812</div>
            </div>
            <div>
              <div
                class="font-mono text-[10px] tracking-[0.18em] uppercase text-twitch font-semibold mb-1"
              >
                Klip
              </div>
              <div class="big-stat grad-text">1,2K</div>
            </div>
          </div>
        </div>
      </a>

      <!-- Urbex card -->
      <a
        href="#"
        :ref="(el) => cardEls.push(el)"
        class="game-card glass overflow-hidden flex flex-col reveal"
      >
        <div class="relative aspect-[16/10] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=900&q=80"
            alt="Urbex location"
            class="cover absolute inset-0 w-full h-full object-cover"
          />
          <div
            class="absolute inset-0"
            style="background: linear-gradient(180deg, rgba(12,7,5,0.1) 30%, rgba(12,7,5,0.85) 80%, rgba(12,7,5,0.98) 100%)"
          ></div>
          <span class="absolute top-4 left-4 pill pill-cyan">Felfedezés</span>
          <h3
            class="absolute bottom-4 left-5 right-5 font-display text-[44px] leading-[0.95] tracking-[0.01em] grad-text-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            URBEX
          </h3>
        </div>
        <div class="p-6 flex-1 flex flex-col">
          <p class="text-ink-dim text-[14px] leading-[1.7] mb-6 flex-1">
            Elhagyatott helyek, kórházak, gyárak és kastélyok – a legjobb felfedezések kamerával
            és lámpával, történelemmel és csendel.
          </p>
          <div class="grid grid-cols-3 gap-3 pt-5 border-t border-white/10">
            <div>
              <div
                class="font-mono text-[10px] tracking-[0.18em] uppercase text-cyan font-semibold mb-1"
              >
                Helyszín
              </div>
              <div class="big-stat grad-text-2">68</div>
            </div>
            <div>
              <div
                class="font-mono text-[10px] tracking-[0.18em] uppercase text-cyan font-semibold mb-1"
              >
                Videó
              </div>
              <div class="big-stat grad-text-2">42</div>
            </div>
            <div>
              <div
                class="font-mono text-[10px] tracking-[0.18em] uppercase text-cyan font-semibold mb-1"
              >
                Megye
              </div>
              <div class="big-stat grad-text-2">14</div>
            </div>
          </div>
        </div>
      </a>

      <!-- Webshop card -->
      <a
        href="#webshop"
        :ref="(el) => cardEls.push(el)"
        class="game-card glass mint-border overflow-hidden flex flex-col reveal"
      >
        <div class="relative aspect-[16/10] overflow-hidden bg-[#0e1a14]">
          <div class="absolute inset-0 hex-grid opacity-50"></div>
          <div
            class="absolute inset-0"
            style="background: radial-gradient(500px 300px at 60% 40%, rgba(62,224,163,0.25), transparent 65%)"
          ></div>
          <div
            class="absolute inset-0"
            style="background: linear-gradient(180deg, rgba(12,7,5,0.05) 30%, rgba(12,7,5,0.85) 80%, rgba(12,7,5,0.98) 100%)"
          ></div>
          <span class="absolute top-4 left-4 pill pill-mint">Hamarosan</span>
          <div class="absolute inset-0 grid place-items-center pb-12 pointer-events-none">
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3ee0a3"
              stroke-width="1.2"
              class="opacity-90"
            >
              <path d="M3 3h2l1 12h12l2-9H6" />
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="17" cy="20" r="1.4" />
            </svg>
          </div>
          <h3
            class="absolute bottom-4 left-5 right-5 font-display text-[44px] leading-[0.95] tracking-[0.01em] grad-mint drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            WEBSHOP
          </h3>
        </div>
        <div class="p-6 flex-1 flex flex-col">
          <p class="text-ink-dim text-[14px] leading-[1.7] mb-6 flex-1">
            Hivatalos Foxy merch – pólók, sapkák, matricák és limitált poszterek. Még főzzük az
            első kollekciót.
          </p>
          <div class="grid grid-cols-3 gap-3 pt-5 border-t border-white/10">
            <div>
              <div
                class="font-mono text-[10px] tracking-[0.18em] uppercase text-mint font-semibold mb-1"
              >
                Drop
              </div>
              <div class="big-stat big-stat-mint grad-mint">Q3</div>
            </div>
            <div>
              <div
                class="font-mono text-[10px] tracking-[0.18em] uppercase text-mint font-semibold mb-1"
              >
                Termék
              </div>
              <div class="big-stat big-stat-mint grad-mint">12+</div>
            </div>
            <div>
              <div
                class="font-mono text-[10px] tracking-[0.18em] uppercase text-mint font-semibold mb-1"
              >
                Várólist
              </div>
              <div class="big-stat big-stat-mint grad-mint">2,1K</div>
            </div>
          </div>
        </div>
      </a>

    </div>
  </section>
</template>
