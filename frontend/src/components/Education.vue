<template>
  <section id="pendidikan" class="py-20 bg-gradient-to-r from-blue-100 via-blue-50 to-green-100 min-h-screen font-sans">
    <div class="container mx-auto px-6">
      <SectionTitle title="PENDIDIKAN" />
      <div class="relative">
        <div class="absolute h-full border-r-2 border-gray-300" style="left: 50%"></div>
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-8 flex justify-between items-center w-full"
        >
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 flex justify-end">
              <div
                class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 flex items-center gap-4 max-w-md"
              >
                <img :src="edu.logo" class="w-16 h-16 object-contain" />
                <div class="text-right">
                  <p class="text-sm font-semibold text-blue-600 mb-1">
                    {{ edu.period }}
                  </p>
                  <h3 class="text-2xl font-bold text-gray-800 mb-1">
                    {{ edu.institution }}
                  </h3>
                  <p class="text-gray-600">{{ edu.major }}</p>
                </div>
              </div>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-4 h-4 bg-blue-600 rounded-full z 10"></div>
            </div>
          </div>
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
            </div>
            <div class="w-1/2 pl-8 flex justify-start">
              <div
                class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 flex flex-row-reverse items-center gap-4 max-w-md"
              >
                <img
                  :src="edu.logo"
                  class="w-16 h-16 object-contain"
                />
                <div class="text-left">
                  <p class="text-sm font-semibold text-blue-600 mb-1">
                    {{ edu.period }}
                  </p>
                  <h3 class="text-2xl font-bold text-gray-800 mb-1">
                    {{ edu.institution }}
                  </h3>
                  <p class="text-gray-600">{{ edu.major }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const educationHistory = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error(error)
  }
})

</script>
