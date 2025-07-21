<template>
  <div class="min-h-screen bg-white p-4 md:p-8">
    <div class="max-w-4xl mx-auto">
      <!-- Main Form Container -->
      <div class="border-2 border-black bg-white">
        <!-- Header Section -->
        <div class="text-center p-8 border-b-2 border-black">
          <div class="inline-flex items-center justify-center w-20 h-20 border-2 border-black rounded-full mb-6">
            <Code class="w-8 h-8 text-black" />
          </div>
          <h1 class="text-3xl md:text-4xl font-bold text-black mb-2">
            Developer Meetup 2025.
          </h1>
          <p class="text-lg text-black">
            Join us for an evening of networking, learning, and collaboration with fellow developers
          </p>
        </div>

        <!-- Success Screen -->
        <div v-if="showSuccess" class="p-8 text-center">
          <div class="inline-flex items-center justify-center w-20 h-20 border-2 border-black rounded-full mb-6">
            <Check class="w-8 h-8 text-black" />
          </div>
          <h2 class="text-2xl font-bold text-black mb-4">Registration Successful!</h2>
          <p class="text-black mb-6">
            Thank you for registering for Developer Meetup 2025. We'll send you a confirmation email shortly.
          </p>
          <button
            @click="resetForm"
            class="border-2 border-black bg-white text-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
          >
            Register Another Person
          </button>
        </div>

        <!-- Form -->
        <form v-else @submit.prevent="submitForm" class="p-8 space-y-8">
          <!-- Personal Information Section -->
          <div class="space-y-6">
            <h2 class="text-xl font-bold text-black border-b-2 border-black pb-2">
              Personal Information
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-black mb-2">
                  First Name *
                </label>
                <input
                  v-model="form.firstName"
                  type="text"
                  class="w-full p-3 border-2 border-black bg-white text-black focus:border-black"
                  :class="{ 'border-red-500': errors.firstName }"
                  required
                />
                <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">
                  {{ errors.firstName }}
                </p>
              </div>

              <div>
                <label class="block text-sm font-medium text-black mb-2">
                  Last Name *
                </label>
                <input
                  v-model="form.lastName"
                  type="text"
                  class="w-full p-3 border-2 border-black bg-white text-black focus:border-black"
                  :class="{ 'border-red-500': errors.lastName }"
                  required
                />
                <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">
                  {{ errors.lastName }}
                </p>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-black mb-2">
                Email Address *
              </label>
              <input
                v-model="form.email"
                type="email"
                class="w-full p-3 border-2 border-black bg-white text-black focus:border-black"
                :class="{ 'border-red-500': errors.email }"
                required
              />
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                {{ errors.email }}
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-black mb-2">
                  Company *
                </label>
                <input
                  v-model="form.company"
                  type="text"
                  class="w-full p-3 border-2 border-black bg-white text-black focus:border-black"
                  :class="{ 'border-red-500': errors.company }"
                  required
                />
                <p v-if="errors.company" class="text-red-500 text-sm mt-1">
                  {{ errors.company }}
                </p>
              </div>

              <div>
                <label class="block text-sm font-medium text-black mb-2">
                  Role *
                </label>
                <input
                  v-model="form.role"
                  type="text"
                  class="w-full p-3 border-2 border-black bg-white text-black focus:border-black"
                  :class="{ 'border-red-500': errors.role }"
                  required
                />
                <p v-if="errors.role" class="text-red-500 text-sm mt-1">
                  {{ errors.role }}
                </p>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-black mb-2">
                Experience Level *
              </label>
              <select
                v-model="form.experienceLevel"
                class="w-full p-3 border-2 border-black bg-white text-black focus:border-black"
                :class="{ 'border-red-500': errors.experienceLevel }"
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
              <p v-if="errors.experienceLevel" class="text-red-500 text-sm mt-1">
                {{ errors.experienceLevel }}
              </p>
            </div>
          </div>

          <!-- Preferences & Requirements Section -->
          <div class="space-y-6">
            <h2 class="text-xl font-bold text-black border-b-2 border-black pb-2">
              Preferences & Requirements
            </h2>

            <div>
              <label class="block text-sm font-medium text-black mb-2">
                Dietary Restrictions
              </label>
              <input
                v-model="form.dietaryRestrictions"
                type="text"
                class="w-full p-3 border-2 border-black bg-white text-black focus:border-black"
                placeholder="e.g., Vegetarian, Gluten-free, etc."
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-black mb-2">
                Special Requirements or Accommodations
              </label>
              <textarea
                v-model="form.specialRequirements"
                rows="4"
                class="w-full p-3 border-2 border-black bg-white text-black focus:border-black resize-none"
                placeholder="Please let us know if you need any special accommodations..."
              ></textarea>
            </div>
          </div>

          <!-- Networking Interests Section -->
          <div class="space-y-6">
            <h2 class="text-xl font-bold text-black border-b-2 border-black pb-2">
              Networking Interests
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="interest in networkingInterests"
                :key="interest"
                class="border-2 border-black p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                :class="{ 'bg-black text-white': form.interests.includes(interest) }"
                @click="toggleInterest(interest)"
              >
                <div class="flex items-center space-x-3">
                  <div
                    class="w-4 h-4 border-2 border-black"
                    :class="{ 'bg-white': form.interests.includes(interest) }"
                  >
                    <Check v-if="form.interests.includes(interest)" class="w-3 h-3 text-black" />
                  </div>
                  <span class="font-medium">{{ interest }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Information Section -->
          <div class="space-y-6">
            <h2 class="text-xl font-bold text-black border-b-2 border-black pb-2">
              Additional Information
            </h2>
          </div>

          <!-- Submit Button -->
          <div class="pt-6">
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full md:w-auto px-8 py-4 border-2 border-black bg-white text-black font-bold hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <span v-if="isLoading" class="loading-spinner w-5 h-5 border-2 border-black border-t-transparent rounded-full"></span>
              <span>{{ isLoading ? 'Submitting...' : 'Submit Registration' }}</span>
            </button>
          </div>
        </form>
      </div>

      <!-- Event Details -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div class="border-2 border-black bg-white p-6 text-center">
          <Calendar class="w-8 h-8 text-black mx-auto mb-4" />
          <h3 class="font-bold text-black mb-2">Date</h3>
          <p class="text-black">March 15, 2025</p>
        </div>

        <div class="border-2 border-black bg-white p-6 text-center">
          <Clock class="w-8 h-8 text-black mx-auto mb-4" />
          <h3 class="font-bold text-black mb-2">Time</h3>
          <p class="text-black">6:00 PM – 9:00 PM</p>
        </div>

        <div class="border-2 border-black bg-white p-6 text-center">
          <MapPin class="w-8 h-8 text-black mx-auto mb-4" />
          <h3 class="font-bold text-black mb-2">Location</h3>
          <p class="text-black">Tech Hub Soho</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Code, Check, Calendar, Clock, MapPin } from 'lucide-vue-next'

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  role: string
  experienceLevel: string
  dietaryRestrictions: string
  specialRequirements: string
  interests: string[]
}

const form = reactive<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  role: '',
  experienceLevel: '',
  dietaryRestrictions: '',
  specialRequirements: '',
  interests: []
})

const errors = ref<Partial<Record<keyof FormData, string>>>({})
const isLoading = ref(false)
const showSuccess = ref(false)

const networkingInterests = [
  'Frontend Development',
  'Backend Development',
  'DevOps & Cloud',
  'Mobile Development',
  'Data Science & AI',
  'Cybersecurity',
  'Product Management',
  'UX/UI Design',
  'Startup Ecosystem',
  'Open Source Projects'
]

const toggleInterest = (interest: string) => {
  const index = form.interests.indexOf(interest)
  if (index > -1) {
    form.interests.splice(index, 1)
  } else {
    form.interests.push(interest)
  }
}

const validateForm = (): boolean => {
  errors.value = {}

  if (!form.firstName.trim()) {
    errors.value.firstName = 'First name is required'
  }

  if (!form.lastName.trim()) {
    errors.value.lastName = 'Last name is required'
  }

  if (!form.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.value.email = 'Please enter a valid email address'
  }

  if (!form.company.trim()) {
    errors.value.company = 'Company is required'
  }

  if (!form.role.trim()) {
    errors.value.role = 'Role is required'
  }

  if (!form.experienceLevel) {
    errors.value.experienceLevel = 'Experience level is required'
  }

  return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isLoading.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))

  isLoading.value = false
  showSuccess.value = true

  // Log the form data (in real app, would send to server)
  console.log('Form submitted:', form)
}

const resetForm = () => {
  Object.assign(form, {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    experienceLevel: '',
    dietaryRestrictions: '',
    specialRequirements: '',
    interests: []
  })
  errors.value = {}
  showSuccess.value = false
}
</script>