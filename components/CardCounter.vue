<template>
  <div class="p-8 shadow-md inline-block rounded-md">
    <div class="flex items-center">
      <div
        :class="`bg-${legendColor}-400`"
        class="rounded-full w-2 h-2 inline-block mr-2"
      ></div>
      <h3 class="text-gray-600 text-sm inline-block">
        {{ cardTitle }}
      </h3>
    </div>
    <div class="flex items-center">
      <h4 class="text-gray-800 font-bold text-6xl">{{ totalCases }}</h4>
      <div class="ml-8">
        <div
          class="flex items-center text-red-500 bg-red-100 px-4 py-1 text-sm font-bold rounded-full mb-2"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 0L10 10H0L5 0Z" fill="#F56565" />
          </svg>
          <p class="ml-2">{{ increase }}</p>
        </div>
        <div
          v-if="decrease"
          class="flex items-center text-green-500 bg-green-100 px-4 py-1 text-sm font-bold rounded-full"
        >
          <svg
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10.3301L1.11265e-06 0.33013L10 0.330131L5 10.3301Z"
              fill="#68D391"
            />
          </svg>
          <p class="ml-2">{{ decrease }}</p>
        </div>
      </div>
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
    increase: {
      type: [Number, null],
      default: null
    },
    decrease: {
      type: [Number, null],
      default: null
    }
  }
}
</script>
