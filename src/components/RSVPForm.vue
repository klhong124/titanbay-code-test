<template>
  <Layout>
    <template #left>
      <EventInformation />
    </template>
    <template #right>
      <RegistrationForm />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from './Layout.vue'
import EventInformation from './EventInformation.vue'
import RegistrationForm from './RegistrationForm.vue'
</script>