<template>
  <RegisterHeader />
  <div class="grid-container">
    <RegisterForm class="el-1" />

    <PackageCard :packageInfo="selected" isCheckout class="el-2">
      <div class="blur"></div>
      <SecondaryButton label="Trocar Plano" @click="changePackage()" />
    </PackageCard>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import PackageCard from "../components/Register/PackageCard.vue";
import RegisterForm from "../components/Register/RegisterForm.vue";
import RegisterHeader from "../components/Register/RegisterHeader.vue";
import { usePackageStore } from "../stores/packageStore";
import router from "../routes";
import SecondaryButton from "../components/Buttons/SecondaryButton.vue";

export default {
  components: { RegisterHeader, RegisterForm, PackageCard, SecondaryButton },
  setup() {
    const { selected } = usePackageStore();

    function changePackage() {
      router.back();
    }

    onMounted(() => {
      if (!selected.id) {
        router.push("/register");
      }
    });

    return {
      selected,
      changePackage,
    };
  },
};
</script>

<style scoped>
.grid-container {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  padding: 0.5rem 0;
  margin: 1.75rem 0;
}

.card {
  width: 20%;
  position: relative;
}

.blur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 50%
  );
}

button {
  z-index: 1;
}

@media only screen and (max-width: 960px) {
  .grid-container {
    flex-direction: column;
    align-items: center;
  }

  .el-2 {
    order: 1;
  }

  .el-1 {
    order: 2;
  }

  .form-contaier {
    width: 50%;
  }

  .card {
    width: 50%;
    
  }
}
</style>
