<template>
  <div class="flex items-center flex-col py-6 rounded-lg bg-white lg:mb-0 mb-8">
    <h3 class="text-primary font-semibold text-sm lg:text-base">{{ cardTitle }}</h3>
    <h4 class="text-purple-900 font-bold text-5xl lg:text-6xl">{{ totalCases }}</h4>
    <h4 class="text-primary font-light text-xs">As of {{ lastUpdated }}</h4>
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
