<template>
  <div class="mb-8 pt-8">
    <div class="flex items-center space-x-3 mb-6">
      <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
        <span class="text-white text-sm font-bold">3</span>
      </div>
      <h3 class="text-xl font-semibold text-gray-900">Networking Interests</h3>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        v-for="interest in networkingInterests"
        :key="interest"
        class="flex items-center space-x-3 cursor-pointer transition-all duration-200"
        @click="$emit('toggle-interest', interest)"
      >
        <div
          class="w-5 h-5 rounded border-2 flex items-center justify-center"
          :class="{
            'border-blue-500 bg-blue-500': form.interests.includes(interest),
            'border-gray-300': !form.interests.includes(interest)
          }"
        >
          <Check v-if="form.interests.includes(interest)" class="w-3 h-3 text-white" />
        </div>
        <span class="text-sm font-medium text-gray-700">{{ interest }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import type { RegistrationFormData, NetworkingInterest } from '../types/event.types'

interface Props {
  form: RegistrationFormData
  networkingInterests: NetworkingInterest[]
}

interface Emits {
  'toggle-interest': [interest: NetworkingInterest]
}

defineProps<Props>()
defineEmits<Emits>()
</script>