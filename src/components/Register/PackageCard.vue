<template>
  <div class="card">
    <h2>{{ packageInfo.title }}</h2>
    <h1>{{ packageInfo.fee === 0 ? "Grátis" : `R$${packageInfo.fee}/mês` }}</h1>
    <span>{{ packageInfo.description }}</span>
    <div class="divider"></div>
    <h3>{{ packageInfo.subTitle }}</h3>
    <div class="divider"></div>
    <GenericButton label="ESCOLHER ESSE PLANO" />
    <p>
      Seu site em servidores <u>nos {{ packageInfo.location }}</u>
    </p>
    <ul class="feature-list">
      <div class="item" v-for="(item, i) in packageInfo.features" :key="i">
        <img src="../../assets/check-icon.svg" alt="check icon" />
        <li>{{ item }}</li>
      </div>
    </ul>
    <p>Suporte 24 horas, 7 dias por semana grátis;</p>
    <ul class="feature-list">
      <p>{{ packageInfo.applications.name }}</p>
      <div
        class="item"
        v-for="(item, i) in packageInfo.applications.features"
        :key="i"
      >
        <img src="../../assets/check-icon.svg" alt="check icon" />
        <li>{{ item }}</li>
      </div>
    </ul>
    <p>{{ packageInfo.migration?.name }}</p>
    <div class="item">
      <img v-if="packageInfo.migration?.name" src="../../assets/check-icon.svg" alt="check icon" />
      <li>{{ packageInfo.migration?.sub }}</li>
    </div>
    <ul class="feature-list">
      <p>{{ packageInfo.pluses.name }}</p>
      <div
        class="item"
        v-for="(item, i) in packageInfo.pluses.features"
        :key="i"
      >
        <img src="../../assets/check-icon.svg" alt="check icon" />
        <li>{{ item }}</li>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import GenericButton from "../Buttons/GenericButton.vue";
interface PackageProps {
  title: string;
  fee: number;
  description: string;
  subTitle: string;
  location: string;
  features: string[];
  applications: {
    name: string;
    features: string[];
  };
  migration: {
    name: string;
    sub: string;
  } | null;
  pluses: {
    name: string;
    features: string[];
  };
  mostWanted: number;
}
export default {
  components: {
    GenericButton,
  },
  props: {
    packageInfo: {
      type: Object as () => PackageProps,
      required: true,
    },
  },
  setup(props) {
    const features = ref(["um", "dois", "tres"]);

    const { packageInfo } = props;

    onMounted(() => {
      console.log(packageInfo);
    });
    return {
      features,
      packageInfo,
    };
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

button {
  font-weight: 700;
}

.divider {
  border-bottom: 1px solid #666262;
  align-self: center;
  margin: 20px 0;
  width: 70%;
}

.item {
  display: flex;
  text-align: start;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.item:last-of-type {
  margin-bottom: 0;
}

.item img {
  height: 14px;
  justify-self: flex-start;
}

ul {
  list-style: none;
}

li {
  list-style: none;
  font-weight: 400;
}

p {
  font-weight: 700;
  text-align: left;
}

h3 {
  word-wrap: break-word;
  max-width: 15rem;
  text-align: center;
}
span {
  word-wrap: break-word;
  max-width: 15rem;
  text-align: center;
}
</style>
