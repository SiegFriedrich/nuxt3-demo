import { NuxtLayout, NuxtPage, Avatar, Main } from './.nuxt/components';
<template>
  <div>
    <div v-show="displayProperty" class="title">
      go to watch 👉🏻
      <a
        class="underline"
        href="https://www.youtube.com/watch?v=ww94Jvi8JJo&t=389s"
        ><span class="text-3xl font-bold">NUXT3 LEARNING COURSE</span></a
      >
      <el-button
        class="button"
        round
        @click="displayProperty = !displayProperty"
        >OK</el-button
      >
    </div>
    <Main />
  </div>
</template>

<script setup>
let displayProperty = ref(true);
console.log(displayProperty.value);
console.log(9999);
</script>

<style lang="scss" scoped>
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, Montserrat, sans-serif;
  height: 100%;
  width: 100%;
}

.title {
  padding-left: 4px;
  background-color: #e2e8f0;
  // display: none;
  .button {
    background-color: rgb(41, 48, 60);
    color: rgb(229, 234, 238);
    margin-bottom: 4px;
    margin-left: 10px;
  }
}
</style>
