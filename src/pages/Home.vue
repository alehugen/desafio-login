<template>
  <HomeHeader />
  <main>
    <section>
      <div class="titles">
        <h2>Olá Alessandro</h2>
        <h3>Seja bem vindo a sua conta de hospedagem.</h3>
      </div>
      <img src="../assets/thumbnail.png" alt="video thumbnail" />
      <p>
        Caso tenha alguma dúvida,
        <u>visite nossa central de ajuda</u>
      </p>
    </section>
  </main>
</template>

<script lang="ts">
import HomeHeader from "../components/Home/HomeHeader.vue";

export default {
  components: { HomeHeader },
};
</script>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
}

.titles {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}

h2 {
  font-weight: 700;
  color: #3e3f41;
}

h3 {
  font-weight: 400;
  color: #3e3f41;
}

p {
  padding: 0.75rem;
  color: #3e3f41;
  font-weight: 400;
}

section img {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}

@media only screen and (max-width: 1024px) {
  header {
    display: flex;
  }
  .titles {
    text-align: center;
  }

  section img {
    border-radius: 10px;
    width: 70%;
    transform: translateX(25%);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }

  section p {
    text-align: center;
    font-size: medium;
  }
}

@media only screen and (max-width: 692px) {
  header {
    display: flex;
  }
  header img {
    width: 50%;
    height: 80%;
    margin-left: -40%;
  }

  .titles {
    text-align: center;
    font-size: small;
  }

  section img {
    border-radius: 10px;
    width: 70%;
    transform: translateX(25%);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }

  section p {
    word-wrap: break-word;
    max-width: 20rem;
    margin: 0 9rem;
  }
}
</style>
