<template>
  <div id="app">
    <header>
      <button @click="play = !play">{{ play ? 'Pause' : 'Play'}} </button>
      <input type="number" v-model="qty">
      <select v-model="type">
        <option value="normal">Normal</option>
        <option value="functional">Functional</option>
      </select>
      <h1>Load Time: {{ loadTime }}</h1>
    </header>
    <div>
      <h2>{{ type }}</h2>
      <Wrapper v-for="i in parseInt(qty)"
      @load="setLoadTime"
      :type="type" :emojis="emojis" :play="play" :key="i"/>
    </div>
  </div>
</template>

<script>
import Wrapper from './components/Wrapper.vue'
import emojis from '@/emojis'

const hexEmojis = Object.values(emojis).map(e => e.b
  .split('-')
  .map(code => `&#x${code};`)
  .join('')
)

export default {
  name: 'App',
  components: {
    Wrapper
  },

  data () {
    return {
      qty: 1,
      type: 'normal',
      play: false,
      emojis: hexEmojis,
      loadTime: 0,
    }
  },

  watch: {
    qty () {
      this.play = false
    }
  },

  methods: {
    setLoadTime(time) {
      this.loadTime = time
    }
  }
}
</script>

<style>

#app {
  font-family: sans-serif;
  display: flex;
  padding-top: 20px;
}

</style>
