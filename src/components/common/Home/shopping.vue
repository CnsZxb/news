<template>
  <div class="shopping">
    <div class="top">
      <h1>在售商品</h1>
    </div>
    <span class="more">
      更多
      <li class="fa fa-angle-right fa-2x"></li>
    </span>
    <div class="shopList">
      <ul>
        <li class="guangjin_box" v-for="list in goods" :key="list.id">
         <router-link :to="{path:'/goodsItem',query:{id:list.id}}" class="around">
            <img :src="list.pic[0]" alt/>
            <span class="goodsname1">{{list.title}}</span>
            <del>¥ {{list.oldprice}}</del>
            <div class="price">¥ {{list.price}}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping",
  data() {
    return {
      goods: []
    };
  },
  created() {
    this.goodslist();
  },
  methods: {
    goodslist() {
      this.axios.post("/api/appapi/Index/index_post").then(res => {
        this.goods = res.data.goodslist;
      });
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
  display: inline-block;
}
.top {
  width: 92%;
  margin: 0 auto;
  line-height: 2;
  text-align: center;
}
.shopping {
  width: 96%;
  margin: 0 auto;
  position: relative;
  top: 1rem;
}
.more {
  line-height: 2.2;
  position: absolute;
  right: 0;
  top: 0.1rem;
}
.fa,
.more {
  float: right;
}
ul {
  list-style: none;
  margin-bottom: 1rem;
  text-align: left;
  width: 100%;
  overflow: hidden;
}

ul a {
  text-decoration: none;
  line-height: 1.5rem;
}
.guangjin_box {
  width: 48%;
  background-color: #fff;
  float: left;
  margin-bottom: 4%;
  border-radius: 0.6rem;
  overflow: hidden;
  padding-bottom: 0.3rem;
}
.guangjin_box:nth-child(even) {
  margin-left: 4%;
}
.guangjin_box img {
  width: 100%;
}
.goodsname1 {
  color: #000;
  display: block;
  font-weight: 500;
  font-size: 0.925rem;
  padding-left: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
del {
  font-size: 0.8rem;
  color: #666;
  padding-left: 0.5rem;
}
.price {
  color: rgba(221, 163, 72, 1);
  font-weight: 600;
  padding-left: 0.5rem;
}
.shopList {
  padding-bottom: 2rem;
}
</style>
