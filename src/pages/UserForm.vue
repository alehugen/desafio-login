<template>
  <h1>DADOS DO USUARIOS</h1>
</template>

<script lang="ts">
import { usePackageStore } from "../stores/packageStore";

export default {
  setup() {
    const store = usePackageStore();

    return {
      store,
    };
  },
};
</script>

<style></style>
