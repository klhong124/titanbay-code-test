<template>
  <form @submit.prevent="submitForm" class="space-y-6">
    <!-- Single Form Card -->
    <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 lg:p-8 mb-20 lg:mb-0">
      <!-- Mobile Form Header -->
      <div class="lg:hidden mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-2">Event Registration</h2>
        <div class="flex items-center space-x-2">
          <span class="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Open</span>
          <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Free Event</span>
        </div>
      </div>

      <!-- Personal Information Section -->
      <RegistrationPersonalInfo
        :form="form"
        :errors="errors"
      />

      <!-- Preferences & Requirements Section -->
      <RegistrationPreferences
        :form="form"
      />

      <!-- Networking Interests Section -->
      <RegistrationNetworkingInterests
        :form="form"
        :networking-interests="networkingInterests"
        @toggle-interest="toggleInterest"
      />

      <!-- Submit Button - Desktop version -->
      <div class="hidden lg:block pt-8 border-t border-gray-200 mt-8">
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
        >
          <span v-if="isLoading" class="loading-spinner w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
          <span>{{ isLoading ? 'Submitting...' : 'Submit RSVP' }}</span>
        </button>
        <p class="text-center text-sm text-gray-500 mt-4">
          By registering, you agree to our terms and conditions
        </p>
      </div>
    </div>

    <!-- Mobile Sticky Submit Button -->
    <div class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <button
        type="submit"
        :disabled="isLoading"
        class="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg active:scale-95"
      >
        <span v-if="isLoading" class="loading-spinner w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
        <span>{{ isLoading ? 'Submitting...' : 'Submit RSVP' }}</span>
      </button>
      <p class="text-center text-sm text-gray-500 mt-2">
        By registering, you agree to our terms and conditions
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useRegistrationForm } from '../composables/useRegistrationForm'
import RegistrationPersonalInfo from './registration.personal-info.vue'
import RegistrationPreferences from './registration.preferences.vue'
import RegistrationNetworkingInterests from './registration.networking-interests.vue'

const {
  form,
  errors,
  isLoading,
  networkingInterests,
  toggleInterest,
  submitForm
} = useRegistrationForm()
</script>