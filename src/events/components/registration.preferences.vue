<template>
  <div class="mb-8 pt-8">
    <div class="flex items-center space-x-3 mb-6">
      <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
        <span class="text-white text-sm font-bold">2</span>
      </div>
      <h3 class="text-xl font-semibold text-gray-900">Preferences & Requirements</h3>
    </div>

    <div class="space-y-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Dietary Restrictions
        </label>
        <input
          v-model="form.dietaryRestrictions"
          type="text"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
          placeholder="e.g., Vegetarian, Gluten-free, etc."
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Special Requirements or Accommodations
        </label>
        <textarea
          v-model="form.specialRequirements"
          rows="4"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none shadow-sm"
          placeholder="Please describe any accessibility needs or special accommodations"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RegistrationFormData } from '../types/event.types'

interface Props {
  form: RegistrationFormData
}

defineProps<Props>()
</script>