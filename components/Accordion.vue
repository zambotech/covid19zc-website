<template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <div
      class="flex justify-between items-center cursor-pointer"
      @click="isVisible = !isVisible"
    >
      <h2 class="text-gray-600 text-xl font-medium">{{ title }}</h2>
      <svg
        v-if="isVisible"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 0L10 10H0L5 0Z" fill="#718096" />
      </svg>
      <svg
        v-else
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 10.3301L1.11265e-06 0.33013L10 0.330131L5 10.3301Z"
          fill="#718096"
        />
      </svg>
    </div>
    <div v-if="isVisible" class="border-b-2 border-gray-100 mt-4"></div>
    <div v-if="isVisible">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isVisible: this.visible
    }
  }
}
</script>
