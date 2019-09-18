<template>
  <div class="tabbar">
    <mt-tabbar v-model="currentTab" class="centbbar">
      <mt-tab-item id="ping" @click.native="$router.push({name:currentTab})">
        <img slot="icon" src="../../../imgs/banner1.png" />
        平台简介
      </mt-tab-item>
      <mt-tab-item id="an" @click.native="$router.push({name:currentTab})">
        <img slot="icon" src="../../../imgs/banner2.png" />
        安全保障
      </mt-tab-item>
      <mt-tab-item id="qiang" @click.native="$router.push({name:currentTab})">
        <img slot="icon" src="../../../imgs/banner3.png" />
        抢购活动
      </mt-tab-item>
      <mt-tab-item id="he" @click.native="$router.push({name:currentTab})">
        <img slot="icon" src="../../../imgs/banner4.png" />
        合作伙伴
      </mt-tab-item>
      <mt-tab-item id="bang" @click.native="$router.push({name:currentTab})">
        <img slot="icon" src="../../../imgs/banner5.png" />
        帮助中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      currentTab: this.selected
    };
  },
  methods: {
  }
};
</script>

<style>
.swipe img {
  width: 100%;
}
.centbbar {
  top: 11.7625rem;
  background-color: #ffffff;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
.img_box .mint-tab-item {
  background-color: #ffffff;
}
.centbbar div {
  width: 100%;
  height: 100%;
}
.centbbar .mint-tab-item-icon {
  width: 2.7rem;
  height: 2.7rem;
  text-align: center;
}
.img_box .mint-tabbar {
  height: 5rem;
  line-height: 5rem
}
.img_box .mint-tab-item{
  height: 5rem;
  padding: 0 !important;
}

</style>
