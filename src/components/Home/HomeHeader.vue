<template>
  <header>
    <Logo :image-height="42" :imageWidth="200" />
    <div class="menu-wrapper" ref="menuWrapper">
      <AvatarButton user="Alessandro" @click="toggleMenu" />
      <ul v-show="menuOpen">
        <li @click="logout">Sair</li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { onUnmounted, ref, watchEffect } from "vue";
import AvatarButton from "../Buttons/AvatarButton.vue";
import Logo from "../Logo.vue";
import router from "../../routes";
export default {
  components: { Logo, AvatarButton },
  setup() {
    const menuOpen = ref(false);
    const menuWrapper = ref();

    function toggleMenu() {
      menuOpen.value = !menuOpen.value;
    }

    function closeMenu(event: Event) {
      if (!menuWrapper.value.contains(event.target)) {
        menuOpen.value = false;
      }
    }

    watchEffect(() => {
      if (menuOpen.value) {
        document.addEventListener("click", closeMenu);
      } else {
        document.removeEventListener("click", closeMenu);
      }
    });

    function logout() {
      router.push("/");
    }

    onUnmounted(() => {
      document.removeEventListener("click", closeMenu);
    });

    return { menuOpen, menuWrapper, toggleMenu, logout };
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-height: 1120px;
  padding: 1.2rem 0;
}

.menu-wrapper {
  position: relative;
  padding: 0 1rem;
}

ul {
  list-style: none;
  padding: 1.5rem 0;
  margin: 0;
  position: absolute;
  top: 64px;
  right: 25%;
  transform: translateY(25%);
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  box-sizing: content-box;
  z-index: 1;
}

ul::before {
  content: "";
  position: absolute;
  top: -5%;
  left: 50%;
  width: 0;
  height: 0;
  transform: translateY(-50%) translateX(-50%);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #ccc;
}

li {
  display: block;
  letter-spacing: 0.1rem;
  padding: 0.7rem 1.4rem;
  font-weight: 700;
  cursor: pointer;
}

li:hover {
  background-color: #ccc;
}
</style>
