<template>
  <div class="min-h-screen bg-gray-100 px-2 md:px-6">
    <div class="flex gap-6 max-w-7xl mx-auto">
      <!-- Left Sidebar - Event Details (Hidden on mobile) -->
      <EventDetailsSidebar />

      <!-- Main Content Area -->
      <div class="flex-1 space-y-6">
        <!-- Mobile Event Header (Visible only on mobile) -->
        <EventMobileHeader />

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
        <RegistrationForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EventDetailsSidebar from './event.details-sidebar.vue'
import EventMobileHeader from './event.mobile-header.vue'
import RegistrationForm from './registration.form.vue'
</script>