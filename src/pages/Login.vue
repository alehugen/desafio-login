<template>
  <div class="container">
    <header>
      <Logo :image-height="36" :image-width="180" />
    </header>
    <LoginForm />
  </div>
</template>
<script lang="ts">
import Logo from '../components/Logo.vue'
import LoginForm from '../components/LoginForm.vue'

export default {
  components: {
    Logo,
    LoginForm
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container header {
  margin-top: 5%;
  padding: 1%;
  width: .7rem;
}
</style>
