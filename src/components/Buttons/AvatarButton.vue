<template>
  <div class="avatar">
    <p>{{ user.charAt(0) }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  setup(props) {},
};
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  width: 32px;
  height: 32px;
  border: 1px #d9d9d9 solid;
  border-radius: 100%;
  padding: 1rem;
  margin-right: .7rem;
  color: #ffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
}
</style>
