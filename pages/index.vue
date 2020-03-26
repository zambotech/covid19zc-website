<template>
  <div class="max-w-4xl m-auto">
    <section class="flex justify-between pt-8">
      <CardCounter
        legend-color="orange"
        card-title="Persons Under Investigation"
        :total-cases="33"
        :increase="7"
        :decrease="11"
      />
      <CardCounter
        legend-color="yellow"
        card-title="Persons Under Monitoring"
        :total-cases="712"
        :increase="52"
        :decrease="184"
      />
      <CardCounter
        legend-color="red"
        card-title="Case Confirmed"
        :total-cases="1"
        :increase="1"
      />
    </section>
  </div>
</template>

<script>
import CardCounter from '@/components/CardCounter.vue'

export default {
  components: {
    CardCounter
  }
}
</script>
