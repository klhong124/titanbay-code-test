<template>
  <div class="min-h-screen flex flex-col lg:flex-row p-4 lg:p-8 gap-6">
    <div class="flex-1 lg:flex-none lg:w-1/2">
      <slot name="left" />
    </div>
    <div class="flex-1 lg:flex-none lg:w-1/2">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Layout component using flexbox for responsive two-column design with glass cards
</script>