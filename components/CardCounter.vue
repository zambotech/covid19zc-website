<template>
  <div
    class="p-8 shadow-md inline-block rounded-md w-full lg:w-auto bg-white lg:mb-0 mb-8"
  >
    <div class="flex items-center">
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" :fill="legendColor" />
      </svg>
      <h3 class="text-gray-600 text-sm inline-block ml-2">
        {{ cardTitle }}
      </h3>
    </div>
    <div class="flex justify-center">
      <h4 class="text-gray-800 font-bold text-6xl">{{ totalCases }}</h4>
    </div>
    <div class="flex justify-center">
      <h4 class="text-gray-600 font-light text-xs">As of {{ lastUpdated }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    legendColor: {
      type: String,
      default: 'blue'
    },
    cardTitle: {
      type: String,
      default: ''
    },
    totalCases: {
      type: Number,
      default: 0
    },
    lastUpdated: {
      type: String,
      default: ''
    }
  }
}
</script>
