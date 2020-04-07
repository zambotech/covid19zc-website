<template>
  <div class="rounded-lg bg-white mb-8 py-6">
    <h3 class="text-primary text-center font-semibold text-sm lg:text-base">Latest News</h3>
    <div v-if="articles">
      <div v-for="article in articles" :key="article.id" class="mx-10 my-5">
        <h4  class="text-purple-900 font-semibold text-base">{{article.title}}</h4>
        <h4  class="text-primary font-semibold text-sm ">{{article.sourceName}}</h4>
        <h4  class="text-primary font-light text-xs">Published on {{article.publishedDate}}</h4>
      </div>
    </div>
    <div v-else class="h-24 w-full mt-2">
      <vue-content-loading :width="90" :height="75" primary="#FFF5F5" secondary="#FED7D7">
        <rect x="2" width="85" height="12" fill="#C4C4C4"/>
      </vue-content-loading>
    </div>
  </div>
</template>

<script>
import VueContentLoading from 'vue-content-loading'

export default {
  props: {
    articles: {
      type: Array,
      default: ['']
    },
  },
  components: {
    VueContentLoading
  }
}
</script>
