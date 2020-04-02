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
          last-updated="April 1, 2020 10:27 PM"
          :total-cases="59"
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
        <accordion title="Zamboanga Task Force COVID-19" :visible="true">
          <div class="flex flex-wrap py-6 justify-center">
            <div class="my-4 lg:my-0 mx-0 lg:mx-4 text-center w-1/2 lg:w-auto">
              <h1 class="font-semibold text-gray-700">Globe Hotlines</h1>
              <div class="text-gray-700 font-light mt-2 text-sm">
                <p>0975-073-0150</p>
                <p>0975-073-0151</p>
                <p>0975-073-7221</p>
              </div>
            </div>
            <div class="my-4 lg:my-0 mx-0 lg:mx-4 text-center w-1/2 lg:w-auto">
              <h1 class="font-semibold text-gray-700">Smart Hotlines</h1>
              <div class="text-gray-700 font-light mt-2 text-sm">
                <p>0998-175-8705</p>
                <p>0998-175-8709</p>
                <p>0938-300-4110</p>
                <p>0938-300-4007</p>
                <p>0938-300-4004</p>
              </div>
            </div>
            <div class="my-4 lg:my-0 mx-0 lg:mx-4 text-center w-1/2 lg:w-auto">
              <h1 class="font-semibold text-gray-700">Health Lines</h1>
              <div class="text-gray-700 font-light mt-2 text-sm">
                <p>0966-175-4298</p>
                <p>975-3802</p>
              </div>
            </div>
            <div class="my-4 lg:my-0 mx-0 lg:mx-4 text-center w-1/2 lg:w-auto">
              <h1 class="font-semibold text-gray-700">PLDT Hotlines</h1>
              <div class="text-gray-700 font-light mt-2 text-sm">
                <p>975-3800</p>
                <p>975-3801</p>
              </div>
            </div>
            <div class="my-4 lg:my-0 mx-0 lg:mx-4 text-center w-1/2 lg:w-auto">
              <h1 class="font-semibold text-gray-700">ZCDRRMO</h1>
              <div class="text-gray-700 font-light mt-2 text-sm">
                <p>955-9601</p>
              </div>
            </div>
          </div>
        </accordion>
        <accordion
          title="Zamboanga City Medical Center Teleconsultation"
          :visible="true"
        >
          <div class="flex flex-wrap py-6 justify-center text-center">
            <div class="my-4 w-full lg:w-1/2">
              <div class="font-semibold text-gray-700 mb-6">
                <p>8:00AM to 12:00NN (Monday to Saturday)</p>
              </div>
              <div class="mb-6">
                <p class="italic text-gray-700">Smart / Talk N’ Text / Sun</p>
                <div
                  class="flex justify-center text-gray-700 font-light mt-2 text-sm"
                >
                  <div class="mr-6">
                    <p>0938-3004-011</p>
                    <p>0938-3004-012</p>
                    <p>0938-3004-013</p>
                    <p>0938-3004-014</p>
                    <p>0938-3004-015</p>
                    <p>0938-3004-016</p>
                  </div>
                  <div>
                    <p>0938-3004-017</p>
                    <p>0938-3004-018</p>
                    <p>0938-3004-019</p>
                    <p>0938-3004-020</p>
                    <p>0938-3004-021</p>
                    <p>0938-3004-022</p>
                  </div>
                </div>
              </div>
              <div>
                <p class="italic text-gray-700">Globe / TM</p>
                <div
                  class="flex justify-center text-gray-700 font-light mt-2 text-sm"
                >
                  <div class="mr-6">
                    <p>0906-6538-602</p>
                    <p>0953-1489-518</p>
                    <p>0926-9684-935</p>
                    <p>0955-3309-551</p>
                    <p>0955-9103-830</p>
                    <p>0975-0737-270</p>
                  </div>
                  <div>
                    <p>0955-9103-876</p>
                    <p>0955-3309-569</p>
                    <p>0955-3309-582</p>
                    <p>0975-0737-267</p>
                    <p>0975-0730-159</p>
                    <p>0926-9684-980</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="my-4 w-full lg:w-1/2">
              <div class="font-semibold text-gray-700">
                <p>12:00NN to 4:00PM (Monday to Friday)</p>
                <p>8:00AM to 12:00NN (Sunday)</p>
              </div>
              <div class="mb-6">
                <p class="italic text-gray-700">Smart / Talk N’ Text / Sun</p>
                <div
                  class="flex justify-center text-gray-700 font-light mt-2 text-sm"
                >
                  <div class="mr-6">
                    <p>0938-3004-023</p>
                    <p>0938-3004-024</p>
                    <p>0938-3004-025</p>
                    <p>0938-3004-026</p>
                    <p>0938-3004-027</p>
                    <p>0938-3004-028</p>
                  </div>
                  <div>
                    <p>0938-3004-029</p>
                    <p>0938-3004-030</p>
                    <p>0938-3004-031</p>
                    <p>0938-3004-032</p>
                    <p>0938-3004-033</p>
                    <p>0938-3004-034</p>
                  </div>
                </div>
              </div>
              <div>
                <p class="italic text-gray-700">Globe / TM</p>
                <div
                  class="flex justify-center text-gray-700 font-light mt-2 text-sm"
                >
                  <div class="mr-6">
                    <p>0975-0737-268</p>
                    <p>0906-6538-608</p>
                    <p>0955-9103-850</p>
                    <p>0955-9103-911</p>
                    <p>0955-9103-863</p>
                    <p>0975-0730-147</p>
                    <p>0975-0730-148</p>
                  </div>
                  <div>
                    <p>0975-0730-149</p>
                    <p>0975-0730-150</p>
                    <p>0975-0730-151</p>
                    <p>0975-0730-152</p>
                    <p>0975-0730-153</p>
                    <p>0975-0730-154</p>
                    <p>0975-0730-155</p>
                  </div>
                </div>
              </div>
            </div>
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
import Accordion from '@/components/Accordion.vue'

export default {
  components: {
    Notification,
    CardCounter,
    Header,
    Accordion
  }
}
</script>
