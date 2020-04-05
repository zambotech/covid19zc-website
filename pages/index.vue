<template>
  <div>
    <div>
      <section class="flex justify-between flex-wrap lg:w-full xl:w-4/6 my-8 lg:mb-12">
        <CardCounter
          class="md:mr-6 w-full md:w-auto flex-none md:flex-1"
          card-title="Persons Under Investigation"
          :last-updated="pui.lastUpdated"
          :total-cases="pui.totalCases"
        />
        <CardCounter
          class="md:mr-6 w-full md:w-auto flex-none md:flex-1"
          card-title="Persons Under Monitoring"
          :last-updated="pum.lastUpdated"
          :total-cases="pum.totalCases"
        />
        <CardCounter
          class="w-full md:w-auto flex-none md:flex-1"
          card-title="Cases Confirmed"
          :last-updated="confirmed.lastUpdated"
          :total-cases="confirmed.totalCases"
        />
      </section>
      <p class="text-purple-900 font-bold text-3xl my-8">Hotline Numbers</p>
      <section class="flex flex-wrap items-start mb-24">
        <div class="flex flex-col lg:flex-row xl:flex-col items-start xl:items-stretch w-full xl:w-auto">
          <ZTFCOVID19 class="mb-6 mr-6 w-full xl:w-auto" />
          <ReliefOperations class="mb-6 mr-6 w-full xl:w-auto " />
        </div>
        <ZCMCTeleconsultation class="mb-6 w-full xl:w-auto lg:mr-6" />
      </section>
    </div>
  </div>
</template>

<script>
import CardCounter from '@/components/CardCounter.vue'
import Accordion from '@/components/Accordion.vue'
import ZTFCOVID19 from '@/components/hotline/ZTFCOVID19.vue'
import ZCMCTeleconsultation from '@/components/hotline/ZCMCTeleconsultation.vue'
import ReliefOperations from '@/components/hotline/ReliefOperations.vue'

export default {
  components: {
    CardCounter,
    Accordion,
    ZTFCOVID19,
    ZCMCTeleconsultation,
    ReliefOperations
  },
  data() {
    return {
      confirmed: {},
      pui: {},
      pum: {}
    }
  },
  created() {
    this.$fireDb.ref('covidFigures').on('value', snapshot => {
      let { confirmed, pui, pum } = snapshot.val()
      this.confirmed = confirmed
      this.pui = pui
      this.pum = pum
    })
  }
}
</script>
