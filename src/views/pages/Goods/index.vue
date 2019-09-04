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
      zifei:"",
      jiagong:"",
      youhui_id:"",
      category_id:"",
      gid:"",
      name:"",
      qian:"",
      baodanfei:"",
      zhouqi:"",
      daimaifei:"",
      shouyi:"",
      addnum:"1"
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
        this.zifei = res.data.zhuang
        this.jiagong = info.jiagong
        this.youhui_id = info.youhui_id
        this.category_id=info.category_id
        this.gid = info.id
        this.name = info.title
        this.qian = info.price
        this.baodanfei = info.fuwu_price
        this.zhouqi = info.zhouqi
        this.daimaifei = info.shouxufei
        this.shouyi = info.shouyi
        this.specjia = info.spec[0].specjia
        this.specName =info.spec[0].specName
        this.specPrice = info.spec[0].specPrice
      });
    },
    back() {
      this.$router.go(-1);
    },
    goumai(){
           
        if(this.zifei=="li"){
          this.axios({
            url:"/api/appapi/Order/order_post",
            methods:"post",
            params:{
              gid:this.gid,
              youhui_id:this.youhui_id,
              total:this.qian,
              name:this.name,
              dai_fei:this.specjia,
              category_id:this.category_id,
              jiagong:this.jiagong,
              baodanfei:this.baodanfei,
              zhuang:"fei",
              specName:this.specName,
              num:this.addnum,
              danjia:this.qian,
              daimaifei:this.daimaifei,
              shouyi:this.shouyi,
              zhouqi:this.zhouqi
            }
          }).then(res=>{
           if(res.data.errcode==100){
             this.$router.replace("/")
           }else if(res.data.errcode==301){
             this.$router.replace("/login")
           }else{
             console.error();  
           }
          })
        }else{
           console.log('addnum='+this.addnum+';total='+this.specPrice+';gid='+this.gid+';category_id='+this.category_id+';danjia='+this.qian);
        	console.log('name='+this.name+';dai_fei='+this.specjia+';youhui_id='+this.youhui_id+';zhuang='+this.zifei+';specName='+this.specName+';specPrice='+this.specPrice);
          this.axios({
              url:"/api/appapi/Order/order_post",
            methods:"post",
            params:{
              gid:this.gid,
              specName:this.specName,
              specPrice:this.specPrice,
              danjia:this.qian,
              dai_fei:this.specjia,
              youhui_id:this.youhui_id,
              category_id:this.category_id,
              name:this.name,
              num:this.addnum,
              total:this.specPrice,
              zhuang:"fei"
            }
          }).then(data=>{
            console.log(data)
              if(data.data.errcode==100){
             this.$router.replace("/")
           }else if(data.data.errcode==301){
             this.$router.replace("/login")
           }else{
             console.error();  
           }
          })
       }
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

