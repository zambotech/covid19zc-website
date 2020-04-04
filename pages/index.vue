<template>
  <div>
    <div>
      <section class="flex justify-between flex-wrap lg:w-full xl:w-4/6 my-8 lg:mb-12">
        <CardCounter
          class="md:mr-6 w-full md:w-auto flex-none md:flex-1"
          card-title="Persons Under Investigation"
          last-updated="April 2, 2020"
          :total-cases="55"
        />
        <CardCounter
          class="md:mr-6 w-full md:w-auto flex-none md:flex-1"
          card-title="Persons Under Monitoring"
          last-updated="April 1, 2020 10:27 PM"
          :total-cases="2381"
        />
        <CardCounter
          class="w-full md:w-auto flex-none md:flex-1"
          card-title="Cases Confirmed"
          last-updated="April 4, 2020 10:09 AM"
          :total-cases="4"
        />
      </section>
      <p class="text-purple-900 font-bold text-3xl">Hotline Numbers</p>
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
import CardCounter from '@/components/CardCounter.vue'
import Accordion from '@/components/Accordion.vue'
import ZTFCOVID19 from '@/components/hotline/ZTFCOVID19.vue'
import ZCMCTeleconsultation from '@/components/hotline/ZCMCTeleconsultation.vue'

export default {
  components: {
    CardCounter,
    Accordion,
    ZTFCOVID19,
    ZCMCTeleconsultation
  }
}
</script>
