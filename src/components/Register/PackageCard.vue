<template>
  <div class="card">
    <div class="tag" v-if="packageInfo.mostWanted">MAIS USADO</div>
    <h2>{{ packageInfo.title }}</h2>
    <h1 v-if="packageInfo.fee === 0">Grátis</h1>
    <h1 v-else><small>R$ </small>{{ packageInfo.fee }}<small>/mês</small></h1>
    <span>{{ packageInfo.description }}</span>
    <div class="divider"></div>
    <h3>{{ packageInfo.subTitle }}</h3>
    <div class="divider"></div>
    <GenericButton
      label="ESCOLHER ESSE PLANO"
      @click="selectPackage(packageInfo)"
    />
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
      <img
        v-if="packageInfo.migration?.name"
        src="../../assets/check-icon.svg"
        alt="check icon"
      />
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
import { ref } from "vue";
import GenericButton from "../Buttons/GenericButton.vue";
import { useRouter } from "vue-router";
interface PackageProps {
  id: number;
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

    function selectPackage(pack: PackageProps) {
      console.log(pack);
    }

    return {
      features,
      packageInfo,
      selectPackage,
    };
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: whitesmoke;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.tag {
  position: absolute;
  width: 8%;
  margin-top: -2.75rem;
  text-align: center;
  border-radius: 5px;
  padding: 0.5rem;
  font-weight: 600;
  background-color: #0bc403;
  color: #fff;
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

.feature-list {
  text-align: start;
}
.item {
  display: flex;
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
  align-self: flex-start;
  font-weight: 700;
}

h1 {
  color: #f30168;
}

h1 small {
  font-weight: 400;
  font-size: large;
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
