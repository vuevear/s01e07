<template>
  <span>
    <span v-html="emoji" @click="$emit('emoji-click')" v-show="show"></span>
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    emoji: { type: String, required: true },
    show: { type: Boolean, default: true }
  },
}
</script>
