<template>
  <div class="mb-8">
    <div class="flex items-center space-x-3 mb-6">
      <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
        <span class="text-white text-sm font-bold">1</span>
      </div>
      <h3 class="text-xl font-semibold text-gray-900">Personal Information</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          First Name <span class="text-red-500">*</span>
        </label>
        <input
          v-model="form.firstName"
          type="text"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
          :class="{ 'border-red-300 focus:ring-red-500 focus:border-red-500': errors.firstName }"
          placeholder="Enter your first name"
          required
        />
        <p v-if="errors.firstName" class="text-red-600 text-sm mt-1">
          {{ errors.firstName }}
        </p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Last Name <span class="text-red-500">*</span>
        </label>
        <input
          v-model="form.lastName"
          type="text"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
          :class="{ 'border-red-300 focus:ring-red-500 focus:border-red-500': errors.lastName }"
          placeholder="Enter your last name"
          required
        />
        <p v-if="errors.lastName" class="text-red-600 text-sm mt-1">
          {{ errors.lastName }}
        </p>
      </div>

      <div class="md:col-span-2">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Email Address <span class="text-red-500">*</span>
        </label>
        <input
          v-model="form.email"
          type="email"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
          :class="{ 'border-red-300 focus:ring-red-500 focus:border-red-500': errors.email }"
          placeholder="your.email@company.com"
          required
        />
        <p v-if="errors.email" class="text-red-600 text-sm mt-1">
          {{ errors.email }}
        </p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Company <span class="text-red-500">*</span>
        </label>
        <input
          v-model="form.company"
          type="text"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
          :class="{ 'border-red-300 focus:ring-red-500 focus:border-red-500': errors.company }"
          placeholder="Your company name"
          required
        />
        <p v-if="errors.company" class="text-red-600 text-sm mt-1">
          {{ errors.company }}
        </p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Job Title <span class="text-red-500">*</span>
        </label>
        <input
          v-model="form.role"
          type="text"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
          :class="{ 'border-red-300 focus:ring-red-500 focus:border-red-500': errors.role }"
          placeholder="Your job title"
          required
        />
        <p v-if="errors.role" class="text-red-600 text-sm mt-1">
          {{ errors.role }}
        </p>
      </div>

      <div class="md:col-span-2">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Experience Level <span class="text-red-500">*</span>
        </label>
        <select
          v-model="form.experienceLevel"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
          :class="{ 'border-red-300 focus:ring-red-500 focus:border-red-500': errors.experienceLevel }"
          required
        >
          <option value="">Select your experience level</option>
          <option value="student">Student</option>
          <option value="entry">Entry Level (0–2 years)</option>
          <option value="mid">Mid Level (3–5 years)</option>
          <option value="senior">Senior Level (6–10 years)</option>
          <option value="lead">Lead/Principal (10+ years)</option>
          <option value="executive">Executive/CTO</option>
        </select>
        <p v-if="errors.experienceLevel" class="text-red-600 text-sm mt-1">
          {{ errors.experienceLevel }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RegistrationFormData, FormErrors } from '../types/event.types'

interface Props {
  form: RegistrationFormData
  errors: FormErrors
}

defineProps<Props>()
</script>