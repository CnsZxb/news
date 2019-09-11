<template>
  <div class="myorders">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="back"></i>
      <span>我的订单</span>
    </header>
    <ul class="my_list">
      <li>
        <p>订单个数(个)</p>
        <span>{{toplist.zong_ding}}</span>
      </li>
      <li>
        <p>可返预付金额(元)</p>
        <span>{{toplist.zong_keshou}}</span>
      </li>
      <li>
        <p>累计优惠(元)</p>
        <span>{{toplist.zong_yh}}</span>
      </li>
    </ul>
    <ul class="my_tab">
      <li
        v-for="(item,index) in mytab"
        :key="index"
        :class="{active:index==num}"
        @click="tabbtn(index)"
      >{{item}}</li>
    </ul>
    <div class="content">
      <div v-show="num==0">
        <ul>
          <li class="content_top" v-for="item in goodslist" :key="item.id">
            <div class="cont_title">
              <div class="state">订单号:{{item.order_id}}</div>
              <div class="fukuan">带付款</div>
            </div>
            <div class="con_mes">
              <div class="img_box" v-for="(img,index) in itemImg" :key="index">
                <div class="con_img" v-if="img.id==item.gid">
                  <img :src="img.pic" alt />
                </div>
              </div>
              <div class="con_list">
                <span class="con_name">{{item.name}}</span>
                <p class="con_money">
                  实付金额：
                  <span>¥{{item.shifu}}</span>
                </p>
              </div>
              <div class="con_list2">
                <span class="name">¥{{item.shifu}}</span>
                <span>×{{item.shuliang}}</span>
              </div>
            </div>
            <!-- <span class="clock">{{ `${day}天 ${hr}小时 ${min}分钟 ${sec}秒` }}</span> -->
            <div class="d_btn">
              <router-link class="puy" :to="{path:'/submit_order',query:{id:item.id}}">立即支付</router-link>
              <button class="quit">取消订单</button>
            </div>
          </li>
        </ul>
      </div>
      <div v-show="num==1">2</div>
      <div v-show="num==2">3</div>
      <div v-show="num==3">4</div>
      <div v-show="num==4">5</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myorders",
  data() {
    return {
      mytab: ["带付款", "定制中", "已定制", "待收货", "已完成"],
      num: 0,
      toplist: "",
      goodslist: "",
      itemImg: "",
      time: "",
      day: 0,
      hr: 0,
      min: 0,
      sec: 0,
      times:"",
    };
  },
  created() {
    this.orderlist();
    // this.countdown();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    tabbtn(index) {
      this.num = index;
    },
    orderlist() {
      this.axios({
        url: "/api/appapi/Order/order_list_page",
        methods: "post",
        params: {}
      }).then(res => {
        console.log(res.data);
        this.toplist = res.data.res_data;
        this.goodslist = res.data.res_data.list;
        this.itemImg = res.data.res_data.goods_list;
      });
    },
    // countdown() {
    //   const now = Date.parse(new Date());
    //   const end = Date.parse(new Date(this.times)) + 86400 * 1000;//静态时间
    //   const msec = end - now;
    //   let day = parseInt(msec / 1000 / 60 / 60 / 24);
    //   let hr = parseInt((msec / 1000 / 60 / 60) % 24);
    //   let min = parseInt((msec / 1000 / 60) % 60);
    //   let sec = parseInt((msec / 1000) % 60);
    //   this.day = day;
    //   this.hr = hr > 9 ? hr : "0" + hr;
    //   this.min = min > 9 ? min : "0" + min;
    //   this.sec = sec > 9 ? sec : "0" + sec;
    //   const that = this;
    //   setTimeout(function() {
    //     that.countdown();
    //   }, 1000);
    // }
  }
};
</script>

<style scoped>
.myorders {
  overflow-x: hidden;
}
.myorders header {
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

i {
  float: left !important;
  position: relative;
  top: 0.4rem;
}
.my_list {
  position: fixed;
  top: 0rem;
  width: 100%;
  display: flex;
  margin-top: 3rem;
  justify-content: space-around;
  align-items: center;
  font-size: 0.7rem;
  height: 3rem;
  color: #d4d4d4;
  text-align: center;
  background: -webkit-linear-gradient(
    270deg,
    rgba(45, 45, 45, 1) 0%,
    rgba(66, 66, 66, 1) 100%
  );
  z-index: 99;
  list-style: none;
}
.my_list span {
  font-size: 0.8rem;
  color: #f3c36f;
}
.my_tab {
  width: 100%;
  margin-top: 3.1rem;
  display: flex;
  justify-content: space-around;
  list-style: none;
  height: 2.8125rem;
  background-color: #fff;
}
.my_tab li {
  width: 20%;
  line-height: 2.8125rem;
}
.active {
  border-bottom: 2px solid #d7aa5b;
  color: #d7aa5b;
}
.content_top {
  list-style: none;
  width: 94%;
  height: 12.03125rem;
  font-size: 0.9rem;
  margin: 0 auto;
  margin-top: 0.9375rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.03);
  border: 1px solid #eee;
  border-radius: 0.6rem;
  overflow: hidden;
  background-color: #fff;
}
.cont_title {
  text-align: left;
  padding: 0 0.9375rem;
  height: 2.75rem;
  line-height: 2.75rem;
  border-bottom: 1px solid #eee;
  border-radius: 0.3rem 0.3rem 0 0;
}
.state {
  float: left;
}
.state::before {
  content: "";
  height: 0.7rem;
  border-left: 0.2rem solid #d4a657;
  display: inline-block;
  position: relative;
  top: 0.1rem;
  margin-right: 0.5rem;
}
.fukuan {
  float: right;
  color: #d4a657;
}
.con_mes {
  padding: 0.9375rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  border-top: none;
}
.con_img {
  height: 4.375rem;
  width: 4.375rem;
  display: inline-block;
}
.con_img img {
  width: 100%;
}
.con_list,
.con_list2 {
  display: inline-block;
  text-align: left;
  height: 4.375rem;
  line-height: 2.5;
  position: relative;
  left: 1.25rem;
}
.con_money {
  color: #666666;
}
.con_money span {
  color: #d0021b;
  font-weight: 600;
}
.con_list2 {
  position: relative;
  left: 5rem;
  text-align: right;
}
.money {
  float: right;
}
.name {
  display: block;
}
.d_btn {
  overflow: hidden;
  height: 2.5rem;
  display: flex;
  align-items: center;
  float: right;
  margin-right: 0.6rem;
}
.puy,
.quit {
  width: 3.9rem;
  height: 1.35rem;
  outline: none;
  cursor: pointer;
  font-size: 0.7rem;
  color: #fff;
  text-decoration: none;
  text-align: center;
  line-height: 1.35rem;
  float: right;
  margin-left: 0.5rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(77, 77, 77, 1);
  background: rgba(255, 255, 255, 1);
  border-radius: 0.2rem;
  border: 1px solid rgba(153, 153, 153, 1);
}
.clock {
  overflow: hidden;
  height: 2.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  float: left;
  margin-left: 0.6rem;
  color: red;
}
</style>