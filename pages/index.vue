<template>
  <div>
    <Notification />
    <div class="max-w-4xl m-auto px-8 lg:px-0">
      <Header title="COVID-19 Tracker: Zamboanga City"></Header>
      <section
        class="flex justify-between mt-8 mb-8 lg:mb-12 flex-wrap lg:px-0"
      >
        <CardCounter
          legend-color="#F6AD55"
          card-title="Persons Under Investigation"
          last-updated="April 2, 2020"
          :total-cases="55"
        />
        <CardCounter
          legend-color="#F6E05E"
          card-title="Persons Under Monitoring"
          last-updated="April 1, 2020 10:27 PM"
          :total-cases="2381"
        />
        <CardCounter
          legend-color="#F56565"
          card-title="Cases Confirmed"
          last-updated="April 1, 2020 02:59 PM"
          :total-cases="3"
        />
      </section>
      <div class="border-b-2 w-64 m-auto border-gray-200 mt-4"></div>
      <Header class="mb-2" title="Hotline Numbers"></Header>
      <section class="grid gap-4 mb-24">
        <Accordion title="Zamboanga Task Force COVID-19" :visible="true">
          <ZTFCOVID19 />
        </Accordion>
        <Accordion
          title="Zamboanga City Medical Center Teleconsultation"
          :visible="true"
        >
          <ZCMCTeleconsultation />
        </Accordion>
      </section>
    </div>
  </div>
</template>

<script>
import Notification from '@/components/Notification.vue'
import CardCounter from '@/components/CardCounter.vue'
import Header from '@/components/Header.vue'
import Accordion from '@/components/Accordion.vue'
import ZTFCOVID19 from '@/components/hotline/ZTFCOVID19.vue'
import ZCMCTeleconsultation from '@/components/hotline/ZCMCTeleconsultation.vue'

export default {
  components: {
    Notification,
    CardCounter,
    Header,
    Accordion,
    ZTFCOVID19,
    ZCMCTeleconsultation
  }
}
</script>
