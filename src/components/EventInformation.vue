<template>
  <div class="glass-card h-full">
    <!-- Header Section -->
    <div class="text-center p-8 border-b border-white/20">
      <div class="inline-flex items-center justify-center w-20 h-20 glass-card-dark mb-6">
        <Code class="w-8 h-8 text-white" />
      </div>
      <h1 class="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
        Developer Meetup 2025.
      </h1>
      <p class="text-lg text-white/90 drop-shadow">
        Join us for an evening of networking, learning, and collaboration with fellow developers
      </p>
    </div>

    <!-- Event Details -->
    <div class="p-8 space-y-8">
      <div class="space-y-6">
        <h2 class="text-xl font-bold text-white border-b border-white/30 pb-2 drop-shadow">
          Event Details
        </h2>
        
        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <div class="glass-card-dark p-2">
              <Calendar class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="font-bold text-white drop-shadow">Date</h3>
              <p class="text-white/90">March 15, 2025</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="glass-card-dark p-2">
              <Clock class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="font-bold text-white drop-shadow">Time</h3>
              <p class="text-white/90">6:00 PM – 9:00 PM</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="glass-card-dark p-2">
              <MapPin class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="font-bold text-white drop-shadow">Location</h3>
              <p class="text-white/90">Tech Hub Soho</p>
              <p class="text-sm text-white/70">123 Innovation Street, London</p>
            </div>
          </div>
        </div>
      </div>

      <!-- What to Expect -->
      <div class="space-y-6">
        <h2 class="text-xl font-bold text-white border-b border-white/30 pb-2 drop-shadow">
          What to Expect
        </h2>
        
        <div class="space-y-4">
          <div class="glass-card-dark p-4">
            <h3 class="font-bold text-white mb-2 drop-shadow">Networking Sessions</h3>
            <p class="text-white/90">Connect with developers from various backgrounds and experience levels</p>
          </div>
          
          <div class="glass-card-dark p-4">
            <h3 class="font-bold text-white mb-2 drop-shadow">Tech Talks</h3>
            <p class="text-white/90">Short presentations on the latest trends in web development</p>
          </div>
          
          <div class="glass-card-dark p-4">
            <h3 class="font-bold text-white mb-2 drop-shadow">Food & Drinks</h3>
            <p class="text-white/90">Complimentary refreshments and light dinner provided</p>
          </div>
        </div>
      </div>

      <!-- Networking Interests Preview -->
      <div class="space-y-6">
        <h2 class="text-xl font-bold text-white border-b border-white/30 pb-2 drop-shadow">
          Topics & Interests
        </h2>
        
        <div class="grid grid-cols-2 gap-2">
          <div v-for="interest in networkingInterests.slice(0, 6)" :key="interest" class="glass-card-dark p-2 text-center">
            <span class="text-sm font-medium text-white">{{ interest }}</span>
          </div>
        </div>
        <p class="text-sm text-white/70">Select your interests in the registration form →</p>
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