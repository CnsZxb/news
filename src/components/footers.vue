<template>
  <footer class="footers">
    <mt-tabbar v-model="currentTab" :fixed="true">
      <mt-tab-item id="home" @click.native="$router.push({name:currentTab})">
        <img slot="icon" src="../imgs/home/home1_x.png" v-show="currentTab=='home'" />
        <img slot="icon" src="../imgs/home/home1.png" v-show="currentTab!='home'" />
        首页
      </mt-tab-item>
      <mt-tab-item id="goodstore" @click.native="$router.push({name:currentTab})">
        <img slot="icon" src="../imgs/home/shop1_x.png" v-show="currentTab=='goodstore'"/>
         <img slot="icon" src="../imgs/home/shop1.png" v-show="currentTab!='goodstore'"/>
        商城
      </mt-tab-item>
      <mt-tab-item id="buyActive" @click.native="$router.push({name:currentTab})">
        <img slot="icon" src="../imgs/home/active1_x.png" v-show="currentTab=='buyActive'" />
        <img slot="icon" src="../imgs/home/active1.png" v-show="currentTab!='buyActive'" />
        抢购
      </mt-tab-item>
      <mt-tab-item id="myCenter" @click.native="$router.push({name:currentTab})">
        <img slot="icon" src="../imgs/home/my1_x.png" v-show="currentTab=='myCenter'" />
        <img slot="icon" src="../imgs/home/my1.png" v-show="currentTab!='myCenter'" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </footer>
</template>

<script>
export default {
  name: "footers",
  data() {
    return {
      currentTab: this.selected
    };
  },
   props: ["selected"]
};
</script>

<style>
.footers {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 9999999999999;
}
.footers .mint-tabbar {
  background-color: #fff !important;
}
.footers .mint-tab-item-icon {
  width: 1.75rem !important;
  height: 1.75rem !important;
}
.footers .is-selected {
  background-color: #fff !important;
    color: #000 !important;
}
.footers{
  color:rgb(128, 128, 128) !important;
}
</style>
