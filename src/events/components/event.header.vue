<template>
  <div>
    <div class="flex items-center space-x-3 mb-4">
      <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
        <Code class="w-6 h-6 text-white" />
      </div>
      <div>
        <h1 class="text-xl font-bold text-gray-900">{{ title }}</h1>
        <p class="text-sm text-gray-500">{{ subtitle }}</p>
      </div>
    </div>
    <p class="text-sm text-gray-600 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Code } from 'lucide-vue-next'

interface Props {
  title: string
  subtitle: string
  description: string
}

defineProps<Props>()
</script>