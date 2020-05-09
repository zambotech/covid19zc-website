<template>
  <div>
    <div class="flex flex-wrap">
      <section class="flex justify-between flex-wrap lg:w-full xl:w-4/6 my-8 lg:mb-12">
        <CardCounter
          class="md:mr-6 w-full md:w-auto flex-none md:flex-1"
          card-title="Suspect"
          :last-updated="suspect.lastUpdated"
          :total-cases="suspect.totalCases"
          :is-fetching="isFetching"
        />
        <CardCounter
          class="md:mr-6 w-full md:w-auto flex-none md:flex-1"
          card-title="Probable"
          :last-updated="probable.lastUpdated"
          :total-cases="probable.totalCases"
          :is-fetching="isFetching"
        />
        <CardCounter
          class="w-full md:w-auto flex-none md:flex-1"
          card-title="Confirmed"
          :last-updated="confirmed.lastUpdated"
          :total-cases="confirmed.totalCases"
          :is-fetching="isFetching"
        />
        <div class="flex flex-wrap w-full bg-white lg:mt-6 p-6 rounded-lg">
          <div class="w-full lg:w-4/6 lg:pr-4">
            <h3 class="text-primary font-semibold text-sm lg:text-base">Map</h3>
            <div id="map-wrap" class="my-2">
              <l-map :zoom="10" :center="[7.083003, 122.0790]">
                <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <template v-if="affectedAreas.length">
                  <l-marker 
                    v-for="(barangay, i) in affectedAreas" 
                    :key="i" 
                    :icon="icon" 
                    :lat-lng="[barangay.lat, barangay.lng]">
                    <l-tooltip>
                      <div>{{ barangay.locationName }}</div>
                      <div v-if="barangay.status">Status: {{ barangay.status }}</div>
                    </l-tooltip>
                  </l-marker>
                </template>
              </l-map>
            </div>
            <h4 class="text-primary font-light text-xs italic">Note: Only those admitted here in Zamboanga</h4>
          </div>
          <div class="w-full lg:w-2/6 mt-6 lg:mt-0">
            <h3 class="text-primary font-semibold text-sm lg:text-base">Affected areas</h3>
            <div class="flex flex-wrap my-2" v-if="affectedAreas.length">
              <BarangayCard 
                v-for="barangay in affectedAreas" 
                :key="barangay.index" 
                :index="barangay.index"
                :location-name="barangay.locationName"
                :total="barangay.total"
                class="w-full mb-4" />
            </div>
          </div>
        </div>
      </section>
      <div class="w-full xl:w-2/6 xl:pl-6 xl:my-8">
        <ArticleCard :articles="article" />
      </div>
    </div>
    <p class="text-purple-900 font-bold text-3xl my-8">Hotline Numbers</p>
    <section class="flex flex-wrap items-start mb-24">
      <div class="flex flex-col lg:flex-row xl:flex-col items-start xl:items-stretch w-full xl:w-auto">
        <ZTFCOVID19 class="mb-6 mr-6 w-full xl:w-auto" />
        <ReliefOperations class="mb-6 mr-6 w-full xl:w-auto" />
      </div>
      <ZCMCTeleconsultation class="mb-6 w-full xl:w-auto lg:mr-6" />
    </section>
  </div>
</template>

<script>
import L from 'leaflet' 

import CardCounter from '@/components/CardCounter.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import BarangayCard from '@/components/BarangayCard.vue'
import ZTFCOVID19 from '@/components/hotline/ZTFCOVID19.vue'
import ZCMCTeleconsultation from '@/components/hotline/ZCMCTeleconsultation.vue'
import ReliefOperations from '@/components/hotline/ReliefOperations.vue'

export default {
  components: {
    CardCounter,
    ArticleCard,
    BarangayCard,
    ZTFCOVID19,
    ZCMCTeleconsultation,
    ReliefOperations
  },
  data() {
    return {
      confirmed: {},
      suspect: {},
      probable: {},
      icon: L.icon({
        iconUrl: '/images/map-virus.svg',
        iconSize: [35, 35]
      }),
      affectedAreas: [],
      isFetching: false,
      article: [
        { 
          id: '1', 
          title: 'UPLB prepares 80% ethyl alcohol for frontliners', 
          sourceName: 'GMA News Online / Lifestyle / Health and Wellness', 
          publishedDate: '2020-04-01' 
        },
        { 
          id: '2', 
          title: "Where did your first 'lockdown sueldo' go?", 
          sourceName: 'philstar.com', 
          publishedDate: '2020-03-31' 
        },
        { 
          id: '3', 
          title: "Doctors: New heroes, posibility saints", 
          sourceName: 'philstar.com', 
          publishedDate: '2020-03-30' 
        },
      ]
    }
  },
  created() {
    this.isFetching = true
    this.$fireDb.ref('covidFigures').on('value', snapshot => {
      let { confirmed, suspect, probable } = snapshot.val()
      this.confirmed = confirmed
      this.suspect = suspect
      this.probable = probable
      this.isFetching = false
    })

    this.$fireDb.ref('affectedAreas').on('value', snapshot => {
      this.affectedAreas = []
      snapshot.forEach(childSnapshot => {
        this.affectedAreas.push(childSnapshot.val())
      })
    })
  }
}
</script>

<style scoped>
#map-wrap {
  height: 400px;
}
</style>