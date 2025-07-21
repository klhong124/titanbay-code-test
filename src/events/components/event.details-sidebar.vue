<template>
  <div class="hidden lg:block w-80 sticky top-6 h-[calc(100vh-8rem)] overflow-y-auto">
    <!-- Single Event Information Card -->
    <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-8">
      <!-- Event Header -->
      <EventHeader
        :title="eventDetails.title"
        :subtitle="eventDetails.subtitle"
        :description="eventDetails.description"
      />

      <!-- Event Details -->
      <EventDetailsSection
        :date="eventDetails.date"
        :time="eventDetails.time"
        :location="eventDetails.location"
        :duration="eventDetails.duration"
      />

      <!-- Agenda -->
      <EventAgenda :agenda="agenda" />

      <!-- Speakers -->
      <EventSpeakers :speakers="speakers" />

      <!-- Stats -->
      <EventStatsComponent :stats="stats" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEventData } from '../composables/useEventData'
import EventHeader from './event.header.vue'
import EventDetailsSection from './event.details-section.vue'
import EventAgenda from './event.agenda.vue'
import EventSpeakers from './event.speakers.vue'
import EventStatsComponent from './event.stats.vue'

const { eventDetails, agenda, speakers, stats } = useEventData()
</script>