<template>
  <div class="form-box">
    <div class="form-titles">
      <h2>Entre na sua conta</h2>
      <h4>Para acessar sua conta informe seu e-mail e senha</h4>
    </div>

    <TextInput
      type="email"
      placeholder="Seu e-mail"
      :value="formInputs.user"
      label="E-mail"
    />
  </div>
</template>
<script lang="ts">
import TextInput from './Inputs/TextInput.vue'

export default {
  components: { TextInput },
  setup() {
    const formInputs = {
      user: '',
      password: ''
    }

    return {
      formInputs
    }
  }
}
</script>
<style lang="css">
.form-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.75rem;
  background-color: #ffffff;
  border: 2px solid;
  border-color: #979899;
  border-radius: 5px;
  max-width: 500px;
  min-height: 400px;
  color: '#2A343E';
}

.form-titles {
  text-align: left;
}
</style>
