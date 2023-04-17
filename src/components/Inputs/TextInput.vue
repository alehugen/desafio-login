<template>
  <div class="text-input">
    <label for="textInput">{{ label }}</label>
    <input
      id="textInput"
      :type="type"
      v-model="value"
      :placeholder="placeholder"
    />
    <p v-if="type === 'password'">Esqueci minha senha</p>
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
<style lang="css" scoped>
.text-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-weight: 400;
  padding: 1rem;
}

.text-input input {
  text-align: left;
  border: 0.7px #979899 solid;
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 5px;
}

input::placeholder {
  font-weight: 400;
  letter-spacing: 0.3px;
}

label {
  font-weight: 400;
  font-style: normal;
}

p {
  margin-top: 5px;
  text-align: end;
  font-size: medium;
  font-weight: 600;
}
</style>
