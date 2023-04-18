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

@media only screen and (max-width: 769px) {
  .form-box {
    width: 60%;
  }
}

@media only screen and (max-width: 500px) {
  .form-box {
    margin: 1rem 0;
    width: 50%;
  }
}
</style>
