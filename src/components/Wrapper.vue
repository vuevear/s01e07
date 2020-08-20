<template>
  <section>
    <component
      :is="component"
      v-for="(e, i) in emojis"
      :key="e"
      :emoji="e"
      :show="!randomArray.includes(i)"
      @emoji-click="onEmojiClick(e)">
    </component>
  </section>
</template>

<script>
import Emoji from '@/components/Emoji'
import FunctionalEmoji from '@/components/FunctionalEmoji'

const randomArray = () => Array.from({length: 500}, () => Math.floor(Math.random() * 1600))
let interval

export default {
  name: 'Wrapper',

  components: { Emoji, FunctionalEmoji },

  props: {
    type: { type: String, default: 'normal' },
    emojis: { type: Array, required: true },
    play: { type: Boolean, default: false },
  },

  data () {
    return {
      functional: FunctionalEmoji,
      normal: Emoji,
      randomArray: randomArray()
    }
  },

  computed: {
    component () {
      if (this.type === 'functional') {
        return this.functional
      }

      return this.normal
    },
  },

  watch: {
    play () {
      if (this.play) {
        interval = setInterval(() => {
          this.randomArray = randomArray()
        }, 500)

        return
      }

      clearInterval(interval)
    }
  },

  created () {
    console.time(this.type)
  },

  mounted () {
    const time = console.timeEnd(this.type)
    console.log(time)
    this.$emit('load', time)
  },

  methods: {
    onEmojiClick (e) {
      console.log(this.type, e)
    }
  }
}
</script>
