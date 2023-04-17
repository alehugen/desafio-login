<template>
  <header>
    <Logo :image-height="50" :imageWidth="220" />
    <h1>
      Você está muito próximo de mudar a forma de <u>hospedar seu site</u>
    </h1>
  </header>
  <main>
    <template v-for="(card, i) in Packages" :key="i">
      <PackageCard :packageInfo="card" />
    </template>
  </main>
</template>

<script lang="ts">
import Logo from "../components/Logo.vue";
import PackageCard from "../components/Register/PackageCard.vue";
import { Packages } from "../miscellaneous/index";
export default {
  components: { Logo, PackageCard },
  setup() {
    return {
      Packages,
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

main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  padding: 0 4rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 2.75rem;
}

main > * {
  align-self: stretch;
}

</style>
