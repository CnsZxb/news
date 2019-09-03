<template>
  <div class="myorder">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="back"></i>
      <span>抢购活动</span>
    </header>
    <ul class="tab_top">
      <li
        v-for="(item,index) in tabs"
        :key="index"
        :class="{active:index == num}"
        @click="tabbtn(index)"
      >{{item}}</li>
    </ul>
    <div class="tabCon">
      <div v-show="num==0">1</div>
      <div v-show="num==1">2</div>
      <div v-show="num==2">3</div>
      <div v-show="num==3">4</div>
      <div v-show="num==4">5</div>
    </div>
    <footer>
      <div class="tabbar">
        <div class="left_btn" @click="tab">
          <img src="../../../imgs/activity/btn-icon4.png" alt />
          活动商品
        </div>
        <div class="right_btn" @click="myorder">
          <img src="../../../imgs/activity/btn-icon3.png" alt />
          我的订单
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "myorder",
  data() {
    return {
      tabs: ["待付款", "未开始", "进行中", "以结束", "以完成"],
      num: 0
    };
  },
  created() {
    this.orderList();
  },
  methods: {
    tabbtn(index) {
      this.num = index;
      console.log(index);
    },
    tab() {
      this.$router.replace("/buyActive");
    },
    myorder() {
      this.$router.replace("/myorder");
    },
    back() {
      this.history.back();
    },
    orderList() {
      this.axios.post("/api/appapi/Active/order_list_ajax").then(res => {
        console.log(res);
        if (res.data.errcode == 301) {
          console.log("未登录");
          window.location.href = "/login";
        }
      });
    }
  }
};
</script>

<style scoped>
.myorder header {
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
}
i {
  float: left !important;
  position: relative;
  top: 0.4rem;
}
footer {
  height: 3rem;
  width: 100%;
  position: fixed;
  background: #fff;
  bottom: 0;
}
.tabbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.tabbar div {
  width: 50%;
  line-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
footer div img {
  width: 2rem;
  position: relative;
  right: 0.3rem;
}
.right_btn img {
  width: 1.7rem;
}
.right_btn {
  color: #d7aa5b;
}
.tab_top {
  display: flex;
  list-style: none;
  justify-content: space-around;
  height: 3rem;
  line-height: 3rem;
  background-color: #fff;
  font-size: 1rem;
}
.tab_top li {
  display: inline-block;
  width: 20%;
  cursor: pointer;
}
.active {
  border-bottom: 2px solid #d7aa5b;
  color: #d7aa5b;
}
</style>