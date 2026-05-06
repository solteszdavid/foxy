<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="frame-border"></div>
  <div class="bg-ambient"></div>
  <div class="stars"></div>

  <div
    class="orb orb-a"
    style="position: fixed; width: 340px; height: 340px; background: #ff6b1a; left: 70%; top: 10%; opacity: 0.35"
  ></div>
  <div
    class="orb orb-b"
    style="position: fixed; width: 280px; height: 280px; background: #ffc26e; left: 5%; top: 40%; opacity: 0.22"
  ></div>
  <div
    class="orb orb-c"
    style="position: fixed; width: 220px; height: 220px; background: #c94a12; left: 55%; top: 75%; opacity: 0.18"
  ></div>

  <RouterView />
</template>
