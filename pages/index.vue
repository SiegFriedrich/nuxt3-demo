<template>
  <div class="banner">
    <!-- <img src="../assets/image/mountain.jpg" alt="banner" /> -->
    <div class="title1">WELCOME</div>
    <div class="title2">SIEG's CREATIVE STUDIO</div>
    <div class="title3">
      I combine creativity, technologies and passion to bring you the best
      results in web design. Contact me to start building your website now.
    </div>
  </div>
  <div class="content">
    <el-button @click="ElMessage('hello')">button</el-button>
    <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
    <LazyElButton type="warning">lazy button</LazyElButton>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  //   display: flex;
  height: 500px;
  //   border: 1px solid;
  overflow: hidden;
  background: url("@/assets/image/mountain.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .title1 {
    margin-top: 9%;
    font-size: 4vh;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .title2 {
    width: 80%;
    margin-left: 12%;
    font-weight: 800;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
    color: #000000;
    font-size: 11vh;
    line-height: 1;
    letter-spacing: 0px;
    margin-bottom: 40px;
  }
  .title3 {
    font-size: 1.5vh;
  }

  div {
    margin-left: 50%;
    width: 30%;
  }
}
</style>
