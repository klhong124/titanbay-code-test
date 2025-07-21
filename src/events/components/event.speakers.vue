<template>
  <div class="pt-6 border-t border-gray-200">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">Featured Speakers</h3>
    <div class="space-y-4">
      <div
        v-for="(speaker, index) in speakers"
        :key="index"
        class="flex items-center space-x-3"
      >
        <div
          class="w-10 h-10 rounded-full"
          :class="getAvatarClass(index)"
        ></div>
        <div>
          <p class="text-sm font-medium text-gray-900">{{ speaker.name }}</p>
          <p class="text-xs text-gray-500">{{ speaker.title }}, {{ speaker.company }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EventSpeaker } from '../types/event.types'

interface Props {
  speakers: EventSpeaker[]
}

defineProps<Props>()

const getAvatarClass = (index: number): string => {
  const gradients = [
    'bg-gradient-to-r from-blue-500 to-purple-600',
    'bg-gradient-to-r from-green-500 to-blue-500',
    'bg-gradient-to-r from-purple-500 to-pink-500',
    'bg-gradient-to-r from-orange-500 to-red-500'
  ]
  return gradients[index % gradients.length]
}
</script>