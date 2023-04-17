<template>
  <div class="text-input">
    <label for="textInput">{{ label }}</label>
    <input
      id="textInput"
      :type="type"
      v-model="value"
      :placeholder="placeholder"
    />
  </div>
</template>
<script lang="ts">
import { computed } from 'vue'

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      require: true
    },
    placeholder: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  emits: ['update:userEmail'],
  setup(props, ctx) {
    const value = computed({
      get() {
        return props.value
      },
      set(value) {
        ctx.emit('update:userEmail', value)
      }
    })

    return {
      value
    }
  }
}
</script>
<style lang="css">
.text-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-weight: 600;
  padding: 1rem;
}

.text-input input {
  text-align: left;
  border: 0.7px #979899 solid;
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 5px;
}
</style>
