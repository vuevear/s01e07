<template>
  <div id="app">
    <header>
      <button @click="play = !play">{{ play ? 'Pause' : 'Play'}} </button>
      <label for="type">
        Tipo de Componente:
        <select id="type" v-model="type">
          <option value="normal">Normal</option>
          <option value="functional">Functional</option>
        </select>
      </label>
    </header>
    <div>
      <h2>{{ type }}</h2>
      <Wrapper v-if="type == 'normal'" type="normal" :emojis="emojis" :play="play"/>
      <Wrapper v-else-if="type === 'functional'" type="functional" :emojis="emojis" :play="play"/>
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
      type: 'normal',
      play: false,
      emojis: hexEmojis,
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
  padding: 20px;

  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  flex-direction: row;
}

header label {
  margin-left: 20px;
}

</style>
