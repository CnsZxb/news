<template>
  <div class="bianji">
    <header>
      <i class="fa fa-angle-left fa-2x"></i>
      <span>编辑地址</span>
    </header>
  </div>
</template>

<script>
export default {
  name: "bianji"
};
</script>

<style scoped>
.bianji header {
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(
    270deg,
    rgba(66, 66, 66, 1) 0%,
    rgba(45, 45, 45, 1) 100%
  );
  text-align: center;
  height: 3rem;
  color: #fff;
  line-height: 3rem;
  z-index: 2;
}
header i {
 position: absolute;
 left: 0.75rem;
 top: 0.4rem;
}
</style>