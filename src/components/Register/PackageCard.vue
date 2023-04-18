<template>
  <div class="card">
    <div class="tag" v-if="packageInfo.mostWanted && !isCheckout">
      MAIS USADO
    </div>
    <div class="tag black" v-if="isCheckout">PLANO ESCOLHIDO</div>
    <h2>{{ packageInfo.title }}</h2>
    <h1 v-if="packageInfo.fee === 0">Grátis</h1>
    <h1 v-else><small>R$ </small>{{ packageInfo.fee }}<small>/mês</small></h1>
    <span>{{ packageInfo.description }}</span>
    <div class="divider"></div>
    <h3>{{ packageInfo.subTitle }}</h3>
    <div class="divider"></div>
    <GenericButton
      v-if="!isCheckout"
      label="ESCOLHER ESSE PLANO"
      @click="selectPackage(packageInfo)"
    />
    <p>
      Seu site em servidores <u>no {{ packageInfo.location }}</u>
    </p>
    <ul class="feature-list">
      <div class="item" v-for="(item, i) in packageInfo.features" :key="i">
        <img src="../../assets/check-icon.svg" alt="check icon" />
        <li>{{ item }}</li>
      </div>
    </ul>
    <p>Suporte 24 horas, 7 dias por semana grátis;</p>
    <ul class="feature-list">
      <p>{{ packageInfo.applications?.name }}</p>
      <div
        class="item"
        v-for="(item, i) in packageInfo.applications?.features"
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
      <p>{{ packageInfo.pluses?.name }}</p>
      <div
        class="item"
        v-for="(item, i) in packageInfo.pluses?.features"
        :key="i"
      >
        <img src="../../assets/check-icon.svg" alt="check icon" />
        <li>{{ item }}</li>
      </div>
    </ul>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import GenericButton from "../Buttons/GenericButton.vue";
import { usePackageStore } from "../../stores/packageStore";
import { PackageProps } from "../../DTO/Package";
import router from "../../routes";
export default {
  components: {
    GenericButton,
  },
  props: {
    packageInfo: {
      type: Object as () => PackageProps,
      required: true,
    },
    isCheckout: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const store = usePackageStore();
    const { packageInfo } = props;

    function selectPackage(pack: PackageProps) {
      store.$patch({ selected: pack });
      router.push("/register/user");
    }

    return {
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
  width: 12%;
  margin-top: -2.75rem;
  text-align: center;
  border-radius: 5px;
  padding: 0.5rem;
  font-weight: 600;
  background-color: #0bc403;
  color: #fff;
}

.tag.black {
  width: 70%;
  background-color: #000000;
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

@media only screen and (max-width: 967px) {
  .tag {
    width: 18%;
  }

  .tag.black {
    width: 60%;
  }

  h2 {
    font-size: medium;
  }

  h3 {
    font-size: medium;
  }

  button {
    font-size: medium;
    padding: 0.75rem 0.25rem;
  }

  p {
    align-self: center;
    font-weight: 600;
    font-size: medium;
  }
}

@media only screen and (max-width: 726px) {
  .tag {
    width: 20%;
  }

  .tag.black {
    width: 70%;
  }
  .card {
    height: 18%;
    padding: 1rem 1rem;
    overflow: hidden;
  }

  h2 {
    font-size: medium;
  }

  h3 {
    font-size: medium;
    word-break: break-all;
    max-width: 7rem;
  }

  button {
    font-size: medium;
    padding: 0.75rem 0;
    margin-bottom: 10rem;
  }

  p {
    align-self: center;
    font-weight: 600;
    font-size: medium;
  }
}

@media only screen and (max-width: 662px) {
  .tag {
    width: 20%;
  }

  .card {
    height: 18%;
    padding: 1rem 1rem;
    overflow: hidden;
  }

  h1 {
    font-size: medium;
  }

  h2 {
    font-size: small;
  }

  h3 {
    font-size: medium;
    word-break: break-all;
    max-width: 9rem;
  }

  button {
    font-size: medium;
    padding: 0.75rem 0;
    margin-bottom: 10rem;
  }

  p {
    align-self: center;
    font-weight: 600;
    font-size: medium;
  }
}

</style>
