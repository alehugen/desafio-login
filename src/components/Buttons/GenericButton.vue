<template>
  <button type="button">{{ label }}</button>
</template>
<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {}
  }
}
</script>
<style lang="css">
button {
  background-color: #f30168;
  color: #ffff;
  width: 100%;
  border-radius: 5px;
  border-style: none;
  padding: 1.7rem 0 1.7rem 0;

  font-weight: 400;
  font-size: large;
  text-transform: uppercase;

  cursor: pointer;
}
</style>
