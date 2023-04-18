<template>
  <RegisterHeader />
  <main>
    <template v-for="(card, i) in Packages" :key="i">
      <PackageCard :packageInfo="card" />
    </template>
  </main>
</template>

<script lang="ts">
import Logo from "../components/Logo.vue";
import PackageCard from "../components/Register/PackageCard.vue";
import RegisterHeader from "../components/Register/RegisterHeader.vue";
import { Packages } from "../miscellaneous/index";
export default {
  components: { Logo, PackageCard, RegisterHeader },
  setup() {
    return {
      Packages,
    };
  },
};
</script>

<style scoped>
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

@media only screen and (max-width: 1289px) {
  main {
    width: 80%;
  }
  
}
</style>
