<template>
  <div class="lg:hidden bg-white rounded-xl shadow-lg p-6">
    <div class="text-center mb-6">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-md mb-4">
        <Code class="w-8 h-8 text-white" />
      </div>
      <h1 class="text-2xl font-bold text-gray-900 mb-2">
        {{ eventDetails.title }} {{ eventDetails.subtitle }}
      </h1>
      <p class="text-gray-600">
        {{ eventDetails.description }}
      </p>
    </div>

    <!-- Mobile Event Details -->
    <div class="space-y-4">
      <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <Calendar class="w-4 h-4 text-blue-600" />
        </div>
        <div>
          <p class="text-sm font-medium text-gray-900">{{ eventDetails.date }}</p>
          <p class="text-xs text-gray-500">Saturday, {{ eventDetails.time }}</p>
        </div>
      </div>
      <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
        <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
          <MapPin class="w-4 h-4 text-purple-600" />
        </div>
        <div>
          <p class="text-sm font-medium text-gray-900">{{ eventDetails.location.name }}</p>
          <p class="text-xs text-gray-500">{{ eventDetails.location.city }}, {{ eventDetails.location.country }}</p>
        </div>
      </div>
    </div>

    <!-- Mobile Status Badges -->
    <div class="flex items-center justify-center space-x-2 mt-4">
      <span class="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
        {{ eventDetails.status === 'open' ? 'Open' : 'Closed' }}
      </span>
      <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
        {{ eventDetails.type === 'free' ? 'Free Event' : 'Paid Event' }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar, MapPin, Code } from 'lucide-vue-next'
import { useEventData } from '../composables/useEventData'

const { eventDetails } = useEventData()
</script>