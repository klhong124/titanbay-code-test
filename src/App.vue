<template>
  <div id="app">
    <EventRegistrationPage />
  </div>
</template>

<script setup lang="ts">
import EventRegistrationPage from './events/components/event.registration-page.vue'
</script>

<style>
#app {
  min-height: 100vh;
}

.loading-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>