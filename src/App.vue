<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Layout from './components/Layout.vue';
</script>

<template>
  <Layout>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <RouterView />
  </Layout>
</template>

