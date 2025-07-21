<template>
  <div class="min-h-screen bg-gray-100 px-2 md:px-6">
    <div class="flex gap-6 max-w-7xl mx-auto">
      <!-- Left Sidebar - Event Details (Hidden on mobile) -->
      <div class="hidden lg:block w-80 sticky top-6 h-[calc(100vh-8rem)] overflow-y-auto">
        <!-- Single Event Information Card -->
        <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-8">
          <!-- Event Header -->
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <Code class="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 class="text-xl font-bold text-gray-900">Developer Meetup</h1>
                <p class="text-sm text-gray-500">2025</p>
              </div>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed">
              Join us for an evening of networking, learning, and collaboration with fellow developers
            </p>
          </div>

          <!-- Event Details -->
          <div class="pt-6 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Event Details</h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar class="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-900">March 15, 2025</p>
                  <p class="text-xs text-gray-500">Saturday</p>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock class="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-900">6:00 PM – 9:00 PM</p>
                  <p class="text-xs text-gray-500">3 hours</p>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin class="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-900">Tech Hub Soho</p>
                  <p class="text-xs text-gray-500">London, UK</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Agenda -->
          <div class="pt-6 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Agenda</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <span class="text-sm text-gray-600 font-medium">6:00 PM</span>
                <span class="text-sm text-gray-900">Welcome & Networking</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <span class="text-sm text-gray-600 font-medium">6:30 PM</span>
                <span class="text-sm text-gray-900">Keynote Talk</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <span class="text-sm text-gray-600 font-medium">7:30 PM</span>
                <span class="text-sm text-gray-900">Panel Discussion</span>
              </div>
              <div class="flex justify-between items-center py-2">
                <span class="text-sm text-gray-600 font-medium">8:30 PM</span>
                <span class="text-sm text-gray-900">Closing & Drinks</span>
              </div>
            </div>
          </div>

          <!-- Speakers -->
          <div class="pt-6 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Featured Speakers</h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                <div>
                  <p class="text-sm font-medium text-gray-900">Sarah Chen</p>
                  <p class="text-xs text-gray-500">CTO, TechCorp</p>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                <div>
                  <p class="text-sm font-medium text-gray-900">Marcus Johnson</p>
                  <p class="text-xs text-gray-500">Lead Engineer, StartupXYZ</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="pt-6 border-t border-gray-200">
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center">
                <p class="text-2xl font-bold text-blue-600">150+</p>
                <p class="text-xs text-gray-600">Expected Attendees</p>
              </div>
              <div class="text-center">
                <p class="text-2xl font-bold text-purple-600">25+</p>
                <p class="text-xs text-gray-600">Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Main Content Area -->
      <div class="flex-1 space-y-6 ">
        <!-- Mobile Event Information (Visible only on mobile) -->
        <div class="lg:hidden bg-white rounded-xl shadow-lg p-6">
          <div class="text-center mb-6">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-md mb-4">
              <Code class="w-8 h-8 text-white" />
            </div>
            <h1 class="text-2xl font-bold text-gray-900 mb-2">
              Developer Meetup 2025
            </h1>
            <p class="text-gray-600">
              Join us for an evening of networking, learning, and collaboration with fellow developers
            </p>
          </div>

          <!-- Mobile Event Details -->
          <div class="space-y-4">
            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar class="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">March 15, 2025</p>
                <p class="text-xs text-gray-500">Saturday, 6:00 PM – 9:00 PM</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <MapPin class="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">Tech Hub Soho</p>
                <p class="text-xs text-gray-500">London, UK</p>
              </div>
            </div>
          </div>

          <!-- Mobile Status Badges -->
          <div class="flex items-center justify-center space-x-2 mt-4">
            <span class="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Open</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Free Event</span>
          </div>
        </div>

        <!-- Header Card (Desktop only) -->
        <div class="hidden lg:block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
          <div class="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">Event Registration</h2>
              <p class="text-gray-600 mt-1">Please fill out the form to secure your spot</p>
            </div>
            <div class="flex items-center space-x-2">
              <span class="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full shadow-sm">Open</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full shadow-sm">Free Event</span>
            </div>
          </div>
        </div>

        <!-- Registration Form -->
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Single Form Card -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <!-- Personal Information Section -->
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

            <!-- Preferences & Requirements Section -->
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

            <!-- Networking Interests Section -->
            <div class="mb-8 pt-8 ">
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                  <span class="text-white text-sm font-bold">3</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900">Networking Interests</h3>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                <div
                  v-for="interest in networkingInterests"
                  :key="interest"
                  class="flex items-center space-x-3 cursor-pointer transition-all duration-200"
                  @click="toggleInterest(interest)"
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

            <!-- Additional Information Section -->
            <!-- <div class="pt-8">
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                  <span class="text-white text-sm font-bold">4</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900">Additional Information</h3>
              </div>
            </div> -->

            <!-- Submit Button -->
            <div class="pt-8 border-t border-gray-200 mt-8">
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
        </form>
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