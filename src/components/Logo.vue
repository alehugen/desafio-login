<template>
  <div class="logo-box">
    <img
      src="../assets/locaweb.png"
      :width="imageWidth"
      :height="imageHeight"
      alt="logotipo"
    />
  </div>
</template>
<script lang="ts">
export default {
  props: {
    imageWidth: {
      type: Number,
      default: 100,
      required: true
    },
    imageHeight: {
      type: Number,
      default: 100,
      required: true
    }
  },
  setup(props) {
    const { imageHeight, imageWidth } = props
    return {
      imageHeight,
      imageWidth
    }
  }
}
</script>
<style lang="css">
.logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
</style>
