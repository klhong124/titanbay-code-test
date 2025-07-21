<template>
  <div class="pt-6 border-t border-gray-200">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">Agenda</h3>
    <div class="space-y-3">
      <div
        v-for="(item, index) in agenda"
        :key="index"
        class="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
      >
        <span class="text-sm text-gray-600 font-medium">{{ item.time }}</span>
        <span class="text-sm text-gray-900">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EventAgendaItem } from '../types/event.types'

interface Props {
  agenda: EventAgendaItem[]
}

defineProps<Props>()
</script>