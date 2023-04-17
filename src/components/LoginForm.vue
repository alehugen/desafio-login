<template>
  <div class="form-box">
    <div class="form-titles">
      <p>Entre na sua conta</p>
      <span>Para acessar sua conta informe seu e-mail e senha</span>
    </div>

    <TextInput
      type="email"
      placeholder="Seu e-mail"
      v-model:value="formInputs.user"
      label="E-mail"
    />
    <TextInput
      type="password"
      placeholder="Sua senha"
      v-model:value="formInputs.password"
      label="Senha"
    />

    <GenericButton label="Fazer Login" @click="signIn()" />
  </div>

  <router-link to="/register" class="link"
    >Ainda não tem conta? <span>Cadastre-se</span></router-link
  >
</template>
<script lang="ts">
import router from "../routes";
import GenericButton from "./Buttons/GenericButton.vue";
import TextInput from "./Inputs/TextInput.vue";

export default {
  components: { TextInput, GenericButton },
  setup() {
    const formInputs = {
      user: "",
      password: "",
    };

    async function signIn() {
      console.log(formInputs);
      router.push("/home");
    }
    return {
      formInputs,
      signIn,
    };
  },
};
</script>
<style lang="css">
.form-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  background-color: #ffffff;
  border-radius: 5px;
  width: 600px;
  max-width: 700px;
  min-height: 400px;
  color: rgb(42, 52, 62);
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}

.form-titles {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
}

p {
  font-weight: 700;
  font-size: x-large;
}

span {
  font-weight: 400;
  font-size: medium;
}

.link {
  margin-top: 3rem;
  text-decoration: none;
  font-weight: 600;
  color: rgb(42, 52, 62);
}

.link span {
  text-decoration: underline;
  font-weight: 600;
  color: #f30168;
}
</style>
