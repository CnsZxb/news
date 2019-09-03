<template>
  <div class="home">
    <header class="headers">
      <span>金宝缘</span>
    </header>
    <div class="img_box">
    <swiper></swiper>
    <tabbar></tabbar>
     </div>
    <div class="goodslist">
      <div class="hotshoping">
        <a>
          <img :src="minbanner.pic" alt />
        </a>
      </div>
      <shopping></shopping>
    </div>
    <yushou></yushou>
   <footers :selected="'home'"></footers>
  </div>
</template>
<script>
// @ is an alias to /src
import tabbar from "../components/common/Home/tabbar"
import swiper from "../components/common/Home/sweiper"
import shopping from "../components/common/Home/shopping"
import footers from "../components/footers"
import yushou from "../components/common/Home/yushou"

export default {
  name: "home",
  components: {
    "tabbar":tabbar,
    "swiper":swiper,
    "shopping":shopping,
    "footers":footers,
    "yushou":yushou
  },
  data() {
    return {
      currentTab: this.selected,
      lists: [],
      urlImg: [],
      minbanner: []
    };
  },
  created() {
    this.getLists();
  },
  methods: {
    getLists() {
      this.axios.get("/api/appapi/Index/index_post").then(response => {
        console.log(response.data);
        var res = response.data.goodslist;
        this.lists = res;
        var banImg = response.data.aa;
        this.urlImg = banImg;
        console.log(banImg);
        this.minbanner = response.data.active_banner;
      });
    },
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home {
  height: 100%;
  margin: 0 auto;
}
.lis {
  list-style: none;
  text-align: left;
}
.headers {
  height: 3.5rem;
  text-align: center;
  font-size: 0.95rem;
  line-height: 3.5rem;
  background: linear-gradient(
    270deg,
    rgba(66, 66, 66, 1) 0%,
    rgba(45, 45, 45, 1) 100%
  );
  z-index: 1;
}
.headers span {
  color: #fff;
}
.img_box {
  width: 100%;
  height: 8.7rem;
  margin-top: -1.2rem;
  background-image: url(../imgs/Group21.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.goodslist {
  width: 100%;
  position: relative;
  top: 5rem;
  background: url(../imgs/index_bg.png) repeat-y;
  background-size: 100%;
  overflow: hidden;
  padding-bottom: 3rem;
}
.hotshoping {
  width: 94%;
  position: relative;
  top: 0.4rem;
  margin: 0 auto;
}
.hotshoping img {
  width: 100%;
}
.home .yushou{
  padding-bottom: 1rem;
}
</style>


