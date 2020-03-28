<template>
  <label class="block text-gray-500 text-sm">
    Last Updated: {{ lastUpdated }}
  </label>
</template>
<script>
export default {
  props: {
    lastUpdated: {
      type: Date,
      default: ''
    }
  }
}
</script>
