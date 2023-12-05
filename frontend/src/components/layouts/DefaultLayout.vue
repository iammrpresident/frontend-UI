<script setup>
import Header from '../shared/Header.vue'
import Footer from '../shared/Footer.vue'
import Features from '../Features.vue'
import Hero from '../Hero.vue'
</script>

<template>

  <header>
    <Header />
  </header>

  <main>
    <Hero />
    <Features />
  </main>

  <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
    <Footer />
  </footer>

</template>