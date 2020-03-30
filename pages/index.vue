<template>
  <div>
    <Notification />
    <div class="max-w-4xl m-auto px-8 lg:px-0">
      <Header title="COVID19 Tracker: Zamboanga City"></Header>
      <LastUpdated last-updated="Wed, Mar 25, 2020 9:00 PM"></LastUpdated>
      <section class="flex justify-between mt-8 mb-12 flex-wrap lg:px-0">
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
      <div class="border-b-2 w-64 m-auto border-gray-200 mt-4"></div>
      <Header class="mb-2" title="Hotline Numbers"></Header>
      <section>
        <accordion title="Zamboanga Task Force COVID-19" :visible="true">
          <div class="py-6">
            <h1 class="font-semibold text-gray-700">Sample Text</h1>
          </div>
        </accordion>
      </section>
    </div>
  </div>
</template>

<script>
import Notification from '@/components/Notification.vue'
import CardCounter from '@/components/CardCounter.vue'
import Header from '@/components/Header.vue'
import LastUpdated from '@/components/LastUpdated.vue'
import Accordion from '@/components/Accordion.vue'

export default {
  components: {
    Notification,
    CardCounter,
    Header,
    LastUpdated,
    Accordion
  }
}
</script>
