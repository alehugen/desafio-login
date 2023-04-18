<template>
  <div class="form-box">
    <div class="form-titles">
      <p>Entre na sua conta</p>
      <span>Para acessar sua conta informe seu e-mail e senha</span>
    </div>

    <TextInput
      type="email"
      placeholder="Seu e-mail"
      v-model:value="formInputs.username"
      label="E-mail"
    />
    <TextInput
      type="password"
      placeholder="Sua senha"
      v-model:value="formInputs.password"
      label="Senha"
    />
    <p class="password">Esqueci minha senha</p>
    <GenericButton
      label="Fazer Login"
      @click="signIn()"
      :isDisabled="Object.values(formInputs).includes('')"
    />
  </div>

  <router-link to="/register" class="link"
    >Ainda não tem conta? <span>Cadastre-se</span></router-link
  >
</template>
<script lang="ts">
import { ref } from "vue";
import router from "../routes";
import { API } from "../services/axios";
import GenericButton from "./Buttons/GenericButton.vue";
import TextInput from "./Inputs/TextInput.vue";
import axios from "axios";

export default {
  components: { TextInput, GenericButton },
  setup() {
    const formInputs = ref({
      username: "",
      password: "",
    });

    async function signIn() {
      const { username, password } = formInputs.value;
      try {
        const response = await API.post("/auth/login", {
          username,
          password,
        });
        if (response.data.token) {
          sessionStorage.setItem("token", response.data.token);
          router.push("/home");
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data ? error.response?.data : "CRITICAL ERROR");
        }
      }
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
  width: 500px;
  color: rgb(42, 52, 62);
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}

.form-box .password {
  display: flex;
  align-self: flex-end;
  font-weight: 600;
  font-size: medium;
  margin-top: -3%;
  margin-bottom: 3%;
}

.form-titles {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
}

p {
  font-weight: 600;
  font-size: x-large;
}

span {
  font-weight: 400;
  font-size: medium;
}

.link {
  margin: 1.75rem;
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
