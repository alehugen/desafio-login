<template>
  <button type="button" :disabled="isDisabled">{{ label }}</button>
</template>
<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    return {};
  },
};
</script>
<style lang="css" scoped>
button {
  background-color: #f30168;
  color: #ffff;
  width: 100%;
  border-radius: 5px;
  border-style: none;
  padding: 1.7rem 0 1.7rem 0;

  font-weight: 600;
  font-size: large;
  text-transform: uppercase;

  cursor: pointer;
}

button:hover {
  background-color: #f3016ac7;
}

button:disabled {
  cursor: not-allowed;
  background-color: #9c0245c7;
}
</style>
