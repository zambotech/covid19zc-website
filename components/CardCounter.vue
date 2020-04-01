<template>
  <div
    class="p-8 shadow-md inline-block rounded-md w-full lg:w-auto bg-white lg:mb-0 mb-8"
  >
    <div class="flex items-center">
      <div
        :class="`bg-${legendColor}-400`"
        class="rounded-full w-2 h-2 inline-block mr-2"
      ></div>
      <h3 class="text-gray-600 text-sm inline-block">
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
