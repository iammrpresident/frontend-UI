<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Footer from './components/Footer.vue'

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
