<template>
  <div class="pt-6 border-t border-gray-200">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">Event Details</h3>
    <div class="space-y-4">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <Calendar class="w-4 h-4 text-blue-600" />
        </div>
        <div>
          <p class="text-sm font-medium text-gray-900">{{ date }}</p>
          <p class="text-xs text-gray-500">Saturday</p>
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
          <Clock class="w-4 h-4 text-green-600" />
        </div>
        <div>
          <p class="text-sm font-medium text-gray-900">{{ time }}</p>
          <p class="text-xs text-gray-500">{{ duration }}</p>
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
          <MapPin class="w-4 h-4 text-purple-600" />
        </div>
        <div>
          <p class="text-sm font-medium text-gray-900">{{ location.name }}</p>
          <p class="text-xs text-gray-500">{{ location.city }}, {{ location.country }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar, Clock, MapPin } from 'lucide-vue-next'
import type { EventDetails } from '../types/event.types'

interface Props {
  date: string
  time: string
  location: EventDetails['location']
  duration: string
}

defineProps<Props>()
</script>