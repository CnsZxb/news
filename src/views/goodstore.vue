<template>
  <div class="goodstore">
    <div class="header">商城</div>
    <yushou class="yushou"></yushou>
    <footers :selected="'goodstore'"></footers>
    <div class="bgcImg">
      <shopping></shopping>
    </div>
  </div>
</template>

<script>
import footers from "../components/footers";
import yushou from "../components/common/Home/yushou";
import shopping from "../components/common/Home/shopping";
export default {
  name: "goodstore",
  components: {
    footers: footers,
    yushou: yushou,
    shopping: shopping
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.header {
  height: 2.5rem;
  background: linear-gradient(
    270deg,
    rgba(66, 66, 66, 1) 0%,
    rgba(45, 45, 45, 1) 100%
  );
  color: #fff;
  line-height: 2.5rem;
}
.bgcImg {
  position: relative;
  background: url(../imgs/index_bg.png) repeat-y;
  padding-bottom: 2rem;
}
</style>
