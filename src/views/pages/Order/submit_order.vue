<template>
  <div class="submit_order">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="back"></i>
      <span>提交订单</span>
    </header>
    <router-link :to="{path:'/'}" class="addadd" v-if="shouhuo==''">请添加收货地址</router-link>
    <div class="submit_top" v-if="shouhuo!=''">
      <i class="fa fa-map-marker fa-2x"></i>
      <div class="user_info">
        <p class="user_name">
          收货人：
          <span class="name">{{shouhuo.receipt_username}}</span>
          <span class="phone">{{shouhuo.receipt_phone}}</span>
        </p>
        <p class="user_add">
          地址：
          <span class="add">{{shouhuo.receipt_address}}</span>
        </p>
      </div>
      <i class="fa fa-angle-right fa-2x"></i>
    </div>
    <div class="order_num" v-if="show">
      <i class="fa fa-file-text"></i>
      <span>订单号：{{dingdan.order_id}}</span>
    </div>
    <div class="goods" v-if="show">
      <div class="img_box">
        <img :src="goods.pic" alt />
      </div>
      <div class="goods_list">
        <p class="goods_name">{{goods.title}}</p>
        <p class="goods_price">¥{{goods.price}}</p>
      </div>
    </div>
    <div class="goods_num" v-if="show">
      <span>购买数量</span>
      <div class="goods_btn">
        <i class="fa fa-minus-circle" @click="minus"></i>
        <span class="goodsint">{{goodsnum}}</span>
        <i class="fa fa-plus-circle" @click="plus"></i>
      </div>
    </div>
    <div class="goods_list2" v-if="show">
      <div class="list1">
        <div class="list_num">数量</div>
        <span class="number">{{goodsnum}}个</span>
      </div>
      <div class="list2">
        <div class="list_num">商品总额</div>
        <span class="total">{{this.goodsnum * this.goods.price|addZero}}元</span>
      </div>
      <div class="list3">
        <div class="list_num">优惠金额</div>
        <span class="total">0元</span>
      </div>
      <div class="list4">
        <div class="list_num">共计：</div>
        <span class="total">{{this.goodsnum * this.goods.price|addZero}}元</span>
      </div>
    </div>
    <footer v-if="show">
      <router-link to="#" class="link">提交订单</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "submit_order",
  data() {
    return {
      goodsnum: "1",
      totalnum: "",
      shouhuo: "",
      dingdan: "",
      goods: "",
      show: false
    };
  },
  created() {
    this.total();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    minus() {
      if (this.goodsnum > 1) {
        this.goodsnum--;
      }
    },
    plus() {
      this.goodsnum++;
    },
    total() {
      var id = this.$route.query.id;
      this.axios({
        url: "/api/appapi/Order/order_li_ajax",
        methods: "post",
        params: {
          id: id
        }
      }).then(res => {
        console.log(res);
        this.shouhuo = res.data.res_data.rec;
        console.log(this.shouhuo);
        this.dingdan = res.data.res_data.orderdata;
        this.goods = res.data.res_data.goodsdata;
        this.show = true;
      });
    }
  },
  filters: {
    addZero: function(data) {
      return data.toFixed(2);
    }
  }
};
</script>

<style scoped>
.submit_order header {
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
  padding: 0 2%;
  z-index: 2;
}
.addadd {
  display: block;
  text-decoration: none;
  background-color: #fff;
  margin-top: 3rem;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid #cccccc;
}
.submit_top {
  height: 7rem;
  width: 100%;
  background-color: #fff;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.2rem solid transparent;
  border-image: url("../../../imgs/row.png") 6 0 round;
}
.user_info {
  text-align: left;
  margin-left: -5rem;
  line-height: 2;
}
.fa-angle-left {
  float: left !important;
  position: relative;
  top: 0.4rem;
}
.fa-angle-right {
  margin-right: 0.75rem;
}
.fa-map-marker {
  margin-left: 0.75rem;
}
.order_num {
  height: 3rem;
  line-height: 3rem;
  text-align: left;
  padding-left: 0.75rem;
  border-bottom: 1px solid #cccccc;
  background-color: #fff;
}
.fa-file-text {
  margin-right: 0.5rem;
}
.goods {
  padding: 0.75rem;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #cccccc;
}
.img_box {
  width: 6rem;
  height: 6rem;
  background-color: #000;
}
.goods_list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
}
.goods_price {
  color: #d0021b;
  font-weight: 600;
}
.goods_num {
  height: 3rem;
  line-height: 3rem;
  text-align: left;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-bottom: 1px solid #cccccc;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
.goodsint {
  text-align: center;
  margin: 0 0.4rem;
}
.fa-minus-circle {
  color: #d8d8d8;
  font-size: 1.5rem;
}
.fa-plus-circle {
  color: #d1a150;
  font-size: 1.5rem;
}
.goods_btn {
  display: flex;
  align-items: center;
}
.goods_list2 {
  padding: 0 0.75rem;
  text-align: left;
  background-color: #fff;
}
.list1,
.list2,
.list3 {
  height: 3rem;
  line-height: 3rem;
  display: flex;
  justify-content: space-between;
}
.total {
  color: #d0021b;
  font-weight: 600;
}
.list4 {
  height: 3rem;
  line-height: 3rem;
  text-align: right;
}
.list4 div {
  display: inline-block;
}
footer {
  width: 100%;
  height: 4rem;
  border-top: 1px solid #cccccc;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.link {
  display: block;
  width: 90%;
  height: 3rem;
  margin: 0 auto;
  line-height: 3rem;
  background-color: #3c3c3c;
  color: #fff;
  text-decoration: none;
  border-radius: 0.6rem;
}
</style>