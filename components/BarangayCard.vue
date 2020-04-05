<template>
  <div class="flex items-center shadow-md rounded-lg p-4">
    <div class="flex justify-center items-center bg-red-100 p-2 rounded-full font-bold text-primary w-10 h-10 mr-4">
      <span>{{ index }}</span>
    </div>
    <div class="flex flex-col justify-center">
      <p class="text-lg text-primary font-semibold">{{ locationName }}</p>
      <p class="text-xs text-purple-900 font-">{{ `No. of cases: ${total}` }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    locationName: {
      type: String,
      default: ''
    },
    total: {
      type: Number,
      default: 0
    }
  }
}
</script>