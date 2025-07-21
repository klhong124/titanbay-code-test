<template>
  <div class="pt-6 border-t border-gray-200">
    <div class="grid grid-cols-2 gap-4">
      <div class="text-center">
        <p class="text-2xl font-bold text-blue-600">{{ stats.expectedAttendees }}+</p>
        <p class="text-xs text-gray-600">Expected Attendees</p>
      </div>
      <div class="text-center">
        <p class="text-2xl font-bold text-purple-600">{{ stats.companiesCount }}+</p>
        <p class="text-xs text-gray-600">Companies</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EventStats } from '../types/event.types'

interface Props {
  stats: EventStats
}

defineProps<Props>()
</script>