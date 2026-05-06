<script setup>
import { ref } from 'vue'

const activeTab = ref('now')

const nowPlaying = [
  {
    title: 'CS2',
    subtitle: 'Counter-Strike 2',
    tags: ['FPS', 'Kompetitív'],
    rating: '8.4',
    img: 'photo-1538481199705-c710c4e965fc',
    desc: 'Esti unwind sessionök rangolásra. Most Supreme környékén küzdök, és mindenki tudja, hogy nem érdemlem meg.',
  },
  {
    title: 'Fortnite',
    subtitle: 'Battle Royale',
    tags: ['BR', 'Multi'],
    rating: '7.8',
    img: 'photo-1551103782-8ab07afd45c1',
    desc: 'A srácokkal squadolunk, építeni nem tudok, lőni se igazán – mégis kötelező nyolc óra hetente.',
  },
  {
    title: 'Urbex',
    subtitle: 'Ez megy most főként',
    tags: ['Felfedezés', 'IRL'],
    rating: '9.7',
    img: 'photo-1499952127939-9bbf5af6c51c',
    desc: 'Ez a fő profilom most – elhagyatott kórházak, gyárak, mozik. Lámpa, kamera, csend, és nagyon sok történet.',
    featured: true,
  },
  {
    title: 'Project Unknown',
    subtitle: 'Indie · Korai hozzáférés',
    tags: ['Horror', 'Indie'],
    rating: '?',
    img: 'photo-1542751371-adc38448a05e',
    desc: 'Egy kis demó, ami valamiért nem ereszt. Még nem tudom mi ez, de minden héten visszatérek.',
  },
  {
    title: 'Roblox',
    subtitle: 'Sandbox',
    tags: ['Multi', 'Casual'],
    rating: '7.0',
    img: 'photo-1493514789931-586cb221d7a7',
    desc: 'Random horror map-ek, obby-k, és olyan játékmódok, amikre sosem gondoltam volna. Nézői kérésre.',
  },
]

const planned = [
  { title: 'FNAF', subtitle: 'Összes széria', tags: ['Horror', 'Sorozat'], img: 'photo-1499952127939-9bbf5af6c51c' },
  { title: 'VRChat', subtitle: 'Social VR', tags: ['VR', 'Social'], img: 'photo-1592478411213-6153e4ebc07d' },
  { title: 'Minecraft', subtitle: 'Hardcore', tags: ['Survival', 'Sandbox'], img: 'photo-1587573089734-09cb69c0f2b4' },
  { title: 'God of War', subtitle: 'Ragnarök', tags: ['Action', 'RPG'], img: 'photo-1538481199705-c710c4e965fc' },
  { title: 'FNAF Fanmade', subtitle: 'Közösségi szériák', tags: ['Horror', 'Indie'], img: 'photo-1542751371-adc38448a05e' },
  { title: 'Airsoft', subtitle: 'IRL session', tags: ['IRL', 'Multi'], img: 'photo-1551103782-8ab07afd45c1' },
  { title: 'Warzone', subtitle: 'Call of Duty', tags: ['BR', 'FPS'], img: 'photo-1493514789931-586cb221d7a7' },
]

const completedGames = [
  'Elden Ring', 'Hollow Knight', 'Cyberpunk 2077', 'The Witcher 3', 'Bloodborne', 'Dark Souls III',
  'Sekiro', 'Disco Elysium', 'Outer Wilds', 'Hades', 'Hades II', 'Stardew Valley', 'Celeste',
  'Undertale', 'Deltarune Ch.1-3', 'Inside', 'Limbo', 'Ori 1', 'Ori 2',
  'Resident Evil 4 Remake', 'RE Village', 'Silent Hill 2 Remake', 'Alan Wake II', 'Alan Wake',
  'Control', 'A Plague Tale: Innocence', 'A Plague Tale: Requiem', 'Death Stranding', 'Returnal',
  'Ghost of Tsushima', 'Horizon Zero Dawn', 'Horizon Forbidden West', 'God of War (2018)',
  'GoW Ragnarök', 'Spider-Man', 'Spider-Man 2', 'Mass Effect 1', 'Mass Effect 2', 'Mass Effect 3',
  'Andromeda', 'Dragon Age: Origins', 'Dragon Age 2', 'Inquisition', 'Veilguard',
  "Baldur's Gate 3", 'Divinity OS2', 'Persona 5 Royal', 'Persona 4 Golden', 'Final Fantasy XVI',
  'FFVII Remake', 'FFVII Rebirth', 'Yakuza 0', 'Yakuza Kiwami', 'Yakuza 6', 'Like a Dragon',
  'Like a Dragon 8', 'Metro Exodus', 'Metro 2033 Redux', 'BioShock', 'BioShock 2',
  'BioShock Infinite', 'Half-Life 2', 'HL2: Episode One', 'HL2: Ep Two', 'Half-Life Alyx',
  'Portal', 'Portal 2', 'Doom (2016)', 'Doom Eternal', 'Wolfenstein TNO', 'Prey', 'Dishonored',
  'Dishonored 2', 'D2:DotO', 'Deathloop', 'Hitman 1', 'Hitman 2', 'Hitman 3', 'Tomb Raider',
  'Rise of TR', 'Shadow of TR', 'Uncharted 1', 'Uncharted 2', 'Uncharted 3', 'Uncharted 4',
  'The Last of Us', 'TLoU Part II', "Death's Door", 'Tunic', 'Cocoon', 'Animal Well',
]

const doneDates = ['2023.04.12', '2023.07.21', '2023.09.30', '2024.01.14', '2024.03.05',
  '2024.06.18', '2024.08.27', '2024.11.02', '2025.01.19', '2025.02.07', '2025.05.14', '2025.10.18']
const doneTags = ['Adventure', 'RPG', 'Indie', 'Horror', 'Action', 'Soulslike', 'Metroidvania',
  'Story-rich', 'Open-world', 'Shooter', 'Stealth', 'Puzzle']
const doneBgs = ['#1a0d05', '#15100a', '#0e1a14', '#1e1509', '#0c1612', '#251207', '#101820', '#0c0705']
</script>

<template>
  <section id="jatekok" class="relative z-[2] px-6 md:px-14 py-20">
    <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
      <div>
        <div
          class="section-kicker font-mono text-[11px] tracking-[0.22em] uppercase text-ink-dim mb-6"
        >
          003 · Játékok
        </div>
        <h2 class="font-display text-[56px] md:text-[80px] leading-[0.95]">
          <span class="grad-text">A KOLLEKCIÓ.</span>
        </h2>
      </div>
      <p class="text-ink-dim text-[14px] max-w-[420px]">
        Amit most játszom, ami a tervben van, és amit már lezártam – minden végigjátszáshoz egy
        rövid sztori.
      </p>
    </div>

    <!-- Tabs -->
    <div role="tablist" class="flex flex-wrap gap-2 mb-10">
      <button
        class="tab-btn h-11 px-5 rounded-xl border border-white/10 bg-white/[0.02] text-[12px] font-semibold tracking-[0.14em] uppercase"
        role="tab"
        :aria-selected="activeTab === 'now'"
        @click="activeTab = 'now'"
      >
        Jelenleg játszom
      </button>
      <button
        class="tab-btn h-11 px-5 rounded-xl border border-white/10 bg-white/[0.02] text-[12px] font-semibold tracking-[0.14em] uppercase text-ink-dim hover:text-white"
        role="tab"
        :aria-selected="activeTab === 'plan'"
        @click="activeTab = 'plan'"
      >
        Tervben van
      </button>
      <button
        class="tab-btn h-11 px-5 rounded-xl border border-white/10 bg-white/[0.02] text-[12px] font-semibold tracking-[0.14em] uppercase text-ink-dim hover:text-white"
        role="tab"
        :aria-selected="activeTab === 'done'"
        @click="activeTab = 'done'"
      >
        Már kijátszott
      </button>
    </div>

    <!-- Now playing -->
    <div
      v-show="activeTab === 'now'"
      class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
    >
      <article
        v-for="game in nowPlaying"
        :key="game.title"
        class="game-card glass overflow-hidden flex flex-col"
        :style="game.featured ? 'border-color: rgba(255,194,110,0.5); box-shadow: 0 0 0 1px rgba(255,194,110,0.18), 0 8px 30px rgba(255,194,110,0.12)' : ''"
      >
        <div class="relative aspect-[3/4] overflow-hidden bg-[#15100a]">
          <img
            :src="`https://images.unsplash.com/${game.img}?w=600&q=80`"
            class="cover w-full h-full object-cover"
            :alt="game.title"
          />
          <div
            class="absolute inset-0"
            style="background: linear-gradient(180deg, transparent 50%, rgba(12,7,5,0.95) 100%)"
          ></div>
          <div
            v-if="game.featured"
            class="absolute top-3 left-3 pill pill-cyan"
          >
            Fő profil
          </div>
          <div
            class="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 border border-white/15 font-mono text-[10px] text-cyan"
          >
            ★ {{ game.rating }}
          </div>
        </div>
        <div class="p-4 flex-1 flex flex-col">
          <h3 class="font-display text-[22px] leading-[0.95] tracking-[0.01em] mb-1">
            {{ game.title }}
          </h3>
          <div class="font-mono text-[10px] text-ink-mute mb-3">{{ game.subtitle }}</div>
          <div class="flex flex-wrap gap-1.5 mb-3">
            <span v-for="tag in game.tags" :key="tag" class="pill">{{ tag }}</span>
          </div>
          <p class="text-ink-dim text-[12.5px] leading-[1.6] flex-1">{{ game.desc }}</p>
        </div>
      </article>
    </div>

    <!-- Planned -->
    <div
      v-show="activeTab === 'plan'"
      class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
    >
      <article
        v-for="game in planned"
        :key="game.title"
        class="game-card glass overflow-hidden flex flex-col"
      >
        <div class="relative aspect-[3/4] overflow-hidden bg-[#15100a]">
          <img
            :src="`https://images.unsplash.com/${game.img}?w=600&q=80`"
            class="cover w-full h-full object-cover"
            :alt="game.title"
          />
          <div
            class="absolute inset-0"
            style="background: linear-gradient(180deg, transparent 50%, rgba(12,7,5,0.95) 100%)"
          ></div>
          <div
            class="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 border border-white/15 font-mono text-[10px] text-cyan"
          >
            ★ TERV
          </div>
        </div>
        <div class="p-4 flex-1 flex flex-col">
          <h3 class="font-display text-[22px] leading-[0.95] tracking-[0.01em] mb-1">
            {{ game.title }}
          </h3>
          <div class="font-mono text-[10px] text-ink-mute mb-3">{{ game.subtitle }}</div>
          <div class="flex flex-wrap gap-1.5">
            <span v-for="tag in game.tags" :key="tag" class="pill">{{ tag }}</span>
          </div>
        </div>
      </article>
    </div>

    <!-- Done -->
    <div v-show="activeTab === 'done'">
      <p class="text-ink-mute font-mono text-[11px] tracking-[0.16em] uppercase mb-6">
        {{ completedGames.length }} cím · görgess
      </p>
      <div
        class="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-h-[820px] overflow-y-auto pr-3"
        style="scrollbar-color: #ff6b1a #15100a; scrollbar-width: thin"
      >
        <article
          v-for="(title, i) in completedGames"
          :key="title"
          class="game-card glass overflow-hidden flex flex-col"
        >
          <div
            class="relative aspect-[3/4] overflow-hidden grid place-items-center"
            :style="`background: ${doneBgs[i % doneBgs.length]}`"
          >
            <span
              class="font-display text-[20px] tracking-[0.02em] text-center px-3 leading-[0.95] grad-text-2"
            >{{ title }}</span>
            <div
              class="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/60 border border-white/15 font-mono text-[9px] text-cyan"
            >
              ✓
            </div>
          </div>
          <div class="p-3">
            <h4 class="font-display text-[15px] leading-[1.1] mb-1 truncate">{{ title }}</h4>
            <div class="font-mono text-[9px] text-ink-mute mb-2">
              {{ doneDates[i % doneDates.length] }}
            </div>
            <div class="flex flex-wrap gap-1">
              <span class="pill" style="font-size: 8.5px; padding: 2px 7px">
                {{ doneTags[(i * 3) % doneTags.length] }}
              </span>
              <span
                v-if="i % 3 === 0"
                class="pill"
                style="font-size: 8.5px; padding: 2px 7px"
              >
                {{ doneTags[(i * 5 + 1) % doneTags.length] }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
