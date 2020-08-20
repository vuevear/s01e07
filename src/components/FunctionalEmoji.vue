<template functional>
  <span>
    <span v-html="props.emoji" @click="listeners['emoji-click']" v-show="props.show"></span>
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    emoji: { type: String, required: true },
    show: { type: Boolean, default: true }
  },

  test () {
    return 'test'
  }
}
</script>

<style scoped>
  span {
    background: #ccc;
  }
</style>