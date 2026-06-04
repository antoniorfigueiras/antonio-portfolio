<template>
  <div class="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans antialiased">
    <Navbar />

    <main class="flex-grow">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
