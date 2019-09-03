<template>
  <div class="goodsItem">
    <li class="fa fa-chevron-circle-left fa-2x" @click="back"></li>
    <mt-swipe :auto="4000" class="pic">
      <mt-swipe-item v-for="imgs in goodsImg" :key="imgs.id">
        <img :src="imgs.thumb" />
      </mt-swipe-item>
    </mt-swipe>
    <div class="span_box">
      <span>{{goodslist.title}}</span>
      <span class="oldprice">
        原价：¥
        <del>{{goodslist.oldprice}}</del>
      </span>
      <span class="price">
        <div class="left">
          现价：
          <strong>¥{{goodslist.price}}</strong>
        </div>
        <div class="right">
          <span>免运费</span>
          <span>已售：{{goodslist.xiaoliang}}件</span>
        </div>
      </span>
    </div>
    <div class="introduce">
      <p class="title">产品介绍</p>
      <div class="detail_box">
       <div v-html="imgs" class="img_box"></div>
      </div>
    </div>
    <footer class="footers">
      <button class="liji" @click="goumai">立即选购</button>
    </footer>
  </div>
</template>

<script>
import {htmlRestore} from "../../../components/moduls/entiul"
export default {
  name: "goodsItem",
  data() {
    return {
      goodsImg: "",
      goodslist: "",
      imgs:"",
    };
  },
  created() {
    this.goosItem();
  },
  methods: {
    goosItem() {
      var id = this.$route.query.id;
      this.axios({
        methods: "post",
        url: "/api/appapi/Goods/index_ajax",
        params: {
          id: id
        }
      }).then(res => {
        this.goodsImg = res.data.info.pic;
        this.goodslist = res.data.info;
        var abc = this.goodslist.content;
        console.log(res)
        this.imgs = htmlRestore(abc);
        var info = res.data.info
      });
    },
    back() {
      this.$router.go(-1);
    },
    goumai(){
      this.axios({
        url:"/api/appapi/Order/order_post",
        methods:"post",
        params:{
          
        }
      }).then(res=>{
        console.log(res);
        if(res.data.errcode==100){
          this.$router.replace("/")
        }else if(res.data.errcode==301){
          this.$router.replace('/login')
        }
      })
    }
  },
}
</script>

<style scoped>
.goodsItem {
  height: 23.5rem;
}
img {
  width: 100%;
}
.pic {
  border-bottom: 1px solid #ccc;
}
.goodsItem .fa {
  position: fixed;
  top: 0.8rem;
  left: 0.8rem;
  z-index: 99999;
}
.span_box {
  text-align: left;
  padding: 1rem 0.8rem 0 0.8rem;
  position: relative;
  line-height: 2;
  border-bottom: 0.6rem solid rgba(245, 245, 245, 1);
  overflow: hidden;
  background-color: #fff;
}
h3 {
  font-size: 1rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
}
.span_box > span {
  display: block;
}
strong {
  color: red;
  font-size: 1.1rem;
  font-weight: bold;
}
.oldprice {
  font-size: 0.7rem;
  color: #808080;
}
.price {
  font-size: 0.7rem;
  color: #808080;
}
.right > span::before {
  content: "";
  width: 0.15rem;
  height: 0.15rem;
  background: rgba(223, 181, 98, 1);
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.15rem;
}
.right > span:nth-child(1)::after {
  content: "";
  display: inline-block;
  border-right: 1px solid #eee;
  margin-left: 0.575rem;
  height: 0.825rem;
  vertical-align: middle;
}
.left {
  float: left;
}
.right {
  float: right;
  line-height: 3;
}
.right > span {
  margin-left: 0.475rem;
  font-size: 0.7rem;
}
.title {
  height: 2.65rem;
  border-bottom: 1px solid #e5e5e5;
  font-size: 1rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height: 2.65rem;
  background: #fff;
  text-align: center;
}
.title::after {
  content: "";
  margin-left: 0.25rem;
  display: inline-block;
  vertical-align: middle;
  background: url(../../../imgs/right.png) no-repeat;
  background-size: cover;
  width: 0.75rem;
  height: 0.3rem;
}
.title::before {
  content: "";
  margin-right: 0.25rem;
  display: inline-block;
  vertical-align: middle;
  background: url(../../../imgs/left.png) no-repeat;
  background-size: cover;
  width: 0.95rem;
  height: 0.4rem;
}
.detail_box {
  background: #fff;
  color: #4d4d4d;
  font-size: 0.7rem;
  padding: 0.9rem 0.75rem;
  line-height: 1.2rem;
  padding-bottom: 3.5rem;
}
.content {
  font-size: 0.7rem;
  width: 96%;
  margin-left: 2%;
  margin-right: 2%;
}
.content p {
  font-size: 0.7rem;
  width: 96%;
  margin-left: 2%;
  margin-right: 2%;
}
.footers {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.span
.footers button {
  width: 100%;
  height: 3rem;
  background: linear-gradient(
    270deg,
    rgba(66, 66, 66, 1) 0%,
    rgba(45, 45, 45, 1) 100%
  );
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  font-family: "苹方";
}
.liji{
  width: 100%;
  height: 3.125rem;
  border: none;
  background:linear-gradient(270deg,rgba(66,66,66,1) 0%,rgba(45,45,45,1) 100%);
  font-weight: 500;
  font-size: 1rem;
  color: #fff;
}

</style>

