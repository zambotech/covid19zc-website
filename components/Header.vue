<template>
  <div>
    <p class="text-2xl font-black text-blue-500 mt-8">
      {{ title }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
