<template>
  <div class="flex items-center flex-col py-6 rounded-lg bg-white lg:mb-0 mb-8">
    <h3 class="text-primary font-semibold text-sm lg:text-base">{{ cardTitle }}</h3>
    <h4 v-if="!isFetching" class="text-purple-900 font-bold text-5xl lg:text-6xl">{{ totalCases }}</h4>
    <div v-else class="h-24 w-32 mt-2">
      <vue-content-loading :width="90" :height="75" primary="#FFF5F5" secondary="#FED7D7">
        <rect x="2" width="85" height="45" fill="#C4C4C4"/>
        <rect y="56" width="90" height="11" fill="#C4C4C4"/>
      </vue-content-loading>
    </div>
    <h4 v-if="lastUpdated" class="text-primary font-light text-xs">As of {{ lastUpdated }}</h4>
  </div>
</template>

<script>
import VueContentLoading from 'vue-content-loading'

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
    },
    isFetching: {
      type: Boolean,
      default: false
    }
  },
  components: {
    VueContentLoading
  }
}
</script>
