<template>
  <div class="container">
    <header class="header">
      <Logo :image-height="40" :image-width="180" />
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
  width: 100%;
  margin-top: 5%;
  padding: 1%;
}
</style>
