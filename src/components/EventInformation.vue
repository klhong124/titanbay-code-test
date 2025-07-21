<template>
  <div class="lg:w-1/2 border-r-0 lg:border-r-2 border-black bg-white">
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

    <!-- Event Details -->
    <div class="p-8 space-y-8">
      <div class="space-y-6">
        <h2 class="text-xl font-bold text-black border-b-2 border-black pb-2">
          Event Details
        </h2>
        
        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <Calendar class="w-6 h-6 text-black" />
            <div>
              <h3 class="font-bold text-black">Date</h3>
              <p class="text-black">March 15, 2025</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <Clock class="w-6 h-6 text-black" />
            <div>
              <h3 class="font-bold text-black">Time</h3>
              <p class="text-black">6:00 PM – 9:00 PM</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <MapPin class="w-6 h-6 text-black" />
            <div>
              <h3 class="font-bold text-black">Location</h3>
              <p class="text-black">Tech Hub Soho</p>
              <p class="text-sm text-gray-600">123 Innovation Street, London</p>
            </div>
          </div>
        </div>
      </div>

      <!-- What to Expect -->
      <div class="space-y-6">
        <h2 class="text-xl font-bold text-black border-b-2 border-black pb-2">
          What to Expect
        </h2>
        
        <div class="space-y-4">
          <div class="border-2 border-black p-4">
            <h3 class="font-bold text-black mb-2">Networking Sessions</h3>
            <p class="text-black">Connect with developers from various backgrounds and experience levels</p>
          </div>
          
          <div class="border-2 border-black p-4">
            <h3 class="font-bold text-black mb-2">Tech Talks</h3>
            <p class="text-black">Short presentations on the latest trends in web development</p>
          </div>
          
          <div class="border-2 border-black p-4">
            <h3 class="font-bold text-black mb-2">Food & Drinks</h3>
            <p class="text-black">Complimentary refreshments and light dinner provided</p>
          </div>
        </div>
      </div>

      <!-- Networking Interests Preview -->
      <div class="space-y-6">
        <h2 class="text-xl font-bold text-black border-b-2 border-black pb-2">
          Topics & Interests
        </h2>
        
        <div class="grid grid-cols-2 gap-2">
          <div v-for="interest in networkingInterests.slice(0, 6)" :key="interest" class="border border-black p-2 text-center">
            <span class="text-sm font-medium text-black">{{ interest }}</span>
          </div>
        </div>
        <p class="text-sm text-gray-600">Select your interests in the registration form →</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Code, Calendar, Clock, MapPin } from 'lucide-vue-next'

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
</script>