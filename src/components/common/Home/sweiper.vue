<template>
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in urlImg" :key="item.id">
        <img :src="item.thumb" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "swiper",
  data(){
    return{
      urlImg:[]
    }
  },
  created() {
    this.swpImg();
  },
  methods: {
    swpImg(){
      this.axios.get("/api/appapi/Index/index_post").then(response => {
        console.log(response.data);
        var res = response.data.goodslist;
        this.lists = res;
        var banImg = response.data.aa;
        this.urlImg = banImg;
      });
    }
  }
};
</script>

<style scoped>
.swiper {
  width: 94%;
  height: 100%;
  margin: 0 auto;
}
.swiper img{
  width: 100%;
}
.swiper {
  width: 92%;
  margin: 0 auto;
  position: relative;
  top: 0.9rem;
  padding-top: env(safe-area-inset-top);
  cursor: pointer;
}
</style>
