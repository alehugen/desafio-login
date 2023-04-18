<template>
  <header>
    <Logo
      :image-height="50"
      :imageWidth="220"
      @click="goHome()"
      style="cursor: pointer"
    />
    <h1>
      Você está muito próximo de mudar a forma de <u>hospedar seu site</u>
    </h1>
  </header>
</template>
<script lang="ts">
import router from "../../routes";
import Logo from "../Logo.vue";
export default {
  components: { Logo },
  setup() {
    function goHome() {
      router.push({ name: "Login" });
    }

    return {
      goHome,
    };
  },
};
</script>

<style scoped>
header {
  margin: 1.75rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin: 1.75rem 0;
  hyphens: auto;
  text-align: center;
  color: #2b2c31;
  font-weight: 700;
}

h1 u {
  display: block;
  margin: 0 auto;
  color: #f30168;
}
</style>
