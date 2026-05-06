<script setup>
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import DivLine from '@/components/ui/DivLine.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ContentSection from '@/components/sections/ContentSection.vue'
import GamesSection from '@/components/sections/GamesSection.vue'
import EquipmentSection from '@/components/sections/EquipmentSection.vue'
import ClipsSection from '@/components/sections/ClipsSection.vue'
import WebshopSection from '@/components/sections/WebshopSection.vue'
</script>

<template>
  <div class="relative p-4.5">
    <SiteHeader />
    <HeroSection />
    <DivLine />
    <AboutSection />
    <DivLine />
    <ContentSection />
    <DivLine />
    <GamesSection />
    <DivLine />
    <EquipmentSection />
    <DivLine />
    <ClipsSection />
    <DivLine />
    <WebshopSection />
    <DivLine />
    <SiteFooter />
  </div>
</template>
