<template>
  <div class="main">
    <div>main base</div>
    <NuxtLayout>
      <header class="header">
        <IconsAvatar class="avatar" />
        <div class="sieg"><span>Sieg'</span>s</div>
        <NuxtLink class="button" to="/">HOME</NuxtLink>
        <NuxtLink class="button" to="/about">ABOUT</NuxtLink>
        <NuxtLink class="button" to="/gallery">GALLERY</NuxtLink>
        <NuxtLink class="button" to="/contacts">CONTACTS</NuxtLink>
        <NuxtLink class="button" to="/teks">TEKs</NuxtLink>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { sayHello } = useUtils();
sayHello();
</script>

<style lang="scss" scoped>
.main {
  background-color: rgb(229, 234, 238);
}
.header {
  //   background-color: rgb(229, 234, 238);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .avatar {
    height: 40px;
    width: 40px;
    margin-left: 20px;
  }

  .button {
    display: inline-block;
    font-size: 12px;
    margin-right: 6%;
    padding: 4px 10px 4px 10px;
    transition: background-color 1s, box-shadow 1s;
  }

  .button:hover {
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .sieg {
    font-size: 26px;
    margin-left: 20px;
    span {
      font-weight: bold;
    }
  }
}
</style>
