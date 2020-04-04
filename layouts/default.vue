<template>
  <div>
    <Notification />
    <div class="px-8 md:px-16 lg:px-24">
      <nav class="flex justify-between items-center pt-8 md:pt-12">
        <div class="text-purple-900">
          <p class="font-bold text-xs md:text-sm">COVID-19 Tracker</p>
          <p class="font-bold text-2xl md:text-3xl leading-none">Zamboanga City</p>
        </div>
        <div class="hidden md:block flex items-center text-primary font-bold">
          <nuxt-link exact to="/" class="nav-link px-4 py-2 relative">Home</nuxt-link>
          <nuxt-link exact to="/cases" class="nav-link px-4 py-2 relative">Cases</nuxt-link>
          <nuxt-link exact to="/stats" class="nav-link px-4 py-2 relative">Stats</nuxt-link>
          <nuxt-link exact to="/symptoms" class="nav-link px-4 py-2 relative">Symptoms</nuxt-link>
        </div>
        <div @click="isMobileNavActive = !isMobileNavActive" v-click-outside="onClickOutside" class="mobile-navbar-container cursor-pointer block md:hidden relative outline-none">
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="#FF5A6F"/>
            <circle cx="5" cy="22" r="5" fill="#FF5A6F"/>
            <circle cx="22" cy="5" r="5" fill="#FF5A6F"/>
            <circle cx="22" cy="22" r="5" fill="#FF5A6F"/>
          </svg>
          <transition name="fade">
            <div v-if="isMobileNavActive" class="mobile-navbar absolute right-0 p-6 mt-4 bg-white shadow-md rounded-lg text-primary font-bold">
              <nuxt-link exact to="/" class="mobile-nav-link inline-block p-2 relative">Home</nuxt-link>
              <nuxt-link exact to="/cases" class="mobile-nav-link inline-block p-2 relative">Cases</nuxt-link>
              <nuxt-link exact to="/stats" class="mobile-nav-link inline-block p-2 relative">Stats</nuxt-link>
              <nuxt-link exact to="/symptoms" class="mobile-nav-link inline-block p-2 relative">Symptoms</nuxt-link>
            </div>
          </transition>
        </div>
      </nav>
      <nuxt />
    </div>
    <div class="flex justify-center text-purple-900 mb-8">
      Made by Zamboanga Tech Community for Zamboangueños
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import Notification from '@/components/Notification.vue'

export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  components: {
    Notification
  },
  data() {
    return {
      isMobileNavActive: false
    }
  },
  methods: {
    onClickOutside () {
      this.isMobileNavActive = false
    }
  }
}
</script>

<style>
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 50%;
  opacity: 0;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background-color: #FF5A6F;
  transition: all 200ms ease-in-out;
}

.nuxt-link-active.nav-link::after,
.nav-link:hover::after {
  opacity: 1;
}

.mobile-navbar-container {
  -webkit-tap-highlight-color: transparent;
}

.mobile-nav-link::after {
  content: '';
  position: absolute;
  right: -5%;
  top: 45%;
  opacity: 0;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background-color: #FF5A6F;
  transition: all 200ms ease-in-out;
}

.nuxt-link-active.mobile-nav-link::after,
.mobile-nav-link:hover::after {
  opacity: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
