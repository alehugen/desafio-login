<template>
  <label>
    <input type="checkbox" v-model="check" class="my-checkbox" />
    <span class="checkbox-style"></span>
  </label>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  props: {
    check: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:check"],
  setup(props, ctx) {
    const check = computed({
      get() {
        return props.check;
      },
      set(check) {
        ctx.emit("update:check", check);
      },
    });

    return {
      check,
    };
  },
};
</script>

<style scoped>
.my-checkbox {
  display: none;
}

.checkbox-style {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  vertical-align: middle;
  position: relative;
}

.checkbox-style::after {
  opacity: 0;
  position: absolute;
  content: "";
  width: 5px;
  height: 10px;
  border-bottom: 2px solid #f30168;
  border-right: 2px solid #f30168;
  top: 40%;
  left: 25%;
  transform: rotate(45deg) translate(-50%, -50%);
  transition: all ease-out 0.3s;
}

.my-checkbox:checked + .checkbox-style {
  background-color: #ffe4f9;
  border-color: #f30168;
}

.my-checkbox:checked + .checkbox-style::after {
  opacity: 1;
}

label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}
</style>
