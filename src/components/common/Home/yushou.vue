<template>
  <div class="yushou">
    <div class="yu_top">
      <h2>预售商品</h2>
      <ul>   
        <li v-for="acim in itmeImg" :key="acim.id">
          <router-link  :to="{path:'/goodsItem',query:{id:acim.gid,zhuang}}">
          <div class="img_list">
            <img :src="acim.pic" alt />
          </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "yushou",
  data() {
    return {
      itmeImg: [],
      zhuang:"li"
    };
  },
  created() {
    this.yushouList();
  },
  methods: {
    yushouList() {
      this.axios.post("/api/appapi/Index/index_post").then(res => {
        this.itmeImg = res.data.list_a;
      });
    }
  }
};
</script>

<style>
.yu_top {
  position: relative;
  background: rgba(250, 229, 192, 1);
  overflow: hidden;
}
h2 {
  position: relative;
  top: 1rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: #000;
}
.img_list img {
  width: 100%;
}

.yu_top>ul>li {
  position: relative;
  margin: 0.4rem 0.75rem 0;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  overflow: hidden;
}
.yu_top ul{
  position: relative;
  top: 1.5rem;
  padding-bottom: 5rem;
}
</style>
