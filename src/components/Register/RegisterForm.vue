<template>
  <div class="container">
    <div class="titles">
      <h1>Dados Pessoais</h1>
      <h2>Informe seus dados para acesso à sua conta</h2>
    </div>
    <form>
      <TextInput
        type="text"
        label="Nome completo"
        placeholder="Informe seu nome completo"
        v-model:value="formInputs.full_name"
      />
      <TextInput
        type="text"
        label="Celular"
        placeholder="(99) 9999-0000"
        v-model:value="formInputs.phone"
      />
      <TextInput
        type="text"
        label="E-mail"
        placeholder="Informe seu e-mail"
        v-model:value="formInputs.email"
      />
      <TextInput
        type="password"
        label="Senha"
        placeholder=""
        v-model:value="formInputs.password"
      />
      <TextInput
        type="password"
        label="Confirme sua senha"
        placeholder=""
        v-model:value="formInputs.confirmedPassword"
      />
      <div class="divider"></div>
      <div class="site-data">
        <h1>Dados do seu site</h1>
        <TextInput
          type="text"
          label="Nome do seu site"
          placeholder="Meu site"
          v-model:value="formInputs.website"
        />
        <p style="font-weight: 400; font-size: medium; margin-top: -3%">
          Exatamente igual ao título do seu site
        </p>
      </div>
      <div class="divider"></div>
      <div class="terms">
        <Checkbox v-model:check="formInputs.terms" />
        <h3>
          Ao concluir com seu cadastro você concorda com nossos
          <u>temos de uso</u> e <u>politicas de privacidade</u>.
        </h3>
      </div>
    </form>
    <GenericButton
      label="CRIA CONTA"
      :isDisabled="Object.values(formInputs).includes('') || !formInputs.terms"
      @click="signUp(formInputs)"
    />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import GenericButton from "../Buttons/GenericButton.vue";
import Checkbox from "../Inputs/Checkbox.vue";
import TextInput from "../Inputs/TextInput.vue";
import { API } from "../../services/axios";
import axios from "axios";
import router from "../../routes";
interface FormInput {
  full_name: string;
  phone: string;
  email: string;
  password: string;
  confirmedPassword: string;
  website: string;
  terms: Boolean;
}
export default {
  components: { TextInput, GenericButton, Checkbox },
  setup() {
    const formInputs = ref({
      full_name: "",
      phone: "",
      email: "",
      password: "",
      confirmedPassword: "",
      website: "",
      terms: false,
    });

    async function signUp(data: FormInput) {
      const { full_name, phone, email, password, website } = data;
      try {
        const response = await API.post("/users", {
          email,
          username: email,
          password: password,
          name: full_name,
          address: website,
          phone,
        });

        if (response.data.id) {
          sessionStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR");
          router.push('/home')
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data ? error.response?.data : "CRITICAL ERROR");
        }
      }
    }

    return {
      formInputs,
      signUp,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  max-width: 700px;
  border-radius: 5px;
  padding: 1.75rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}

.titles {
  display: flex;
}

form {
  width: 90%;
  display: flex;
  flex-direction: column;
}

.divider {
  border-bottom: 0.5px solid #666262;
  margin: 10px 0;
  width: 110%;
  overflow: hidden;
}

.site-data {
  margin: 1rem 0;
}

.terms {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
}

button {
  font-weight: 600;
  width: 95%;
}
</style>
