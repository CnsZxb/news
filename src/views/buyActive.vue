<template>
  <div class="buyActive">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="back"></i>
      <span>抢购活动</span>
    </header>
    <div class="banner">
      <img :src="imgUrl" alt />
    </div>
    <div class="goodsbox goodsbox2">
      <div class="goos_top">
        <span class="now">本期报名</span>
      </div>
      <div class="goos_list">
        <div class="img_box">
          <img src="" alt />
        </div>
        <div class="font_box">
          <p class="title">{{}}</p>
          <p class="money">
            抢购价：
            <span>￥</span>
            <del>￥</del>
          </p>
          <p
            class="sign_time"
          >报名时间：{{$moment().format('MM月DD日 hh:mm')}}-{{$moment().format('MM月DD日 hh:mm') }}</p>
          <p class="rush_time">抢购时间:{{$moment().format('MM月DD日 hh:mm')}}</p>
        </div>
      </div>
    </div>
    <div class="goodsbox goodsbox3">
      <div class="goos_top">
        <span class="last">上期抢购</span>
      </div>
      <div class="goos_list">
        <div class="img_box">
          <img src="" alt />
        </div>
        <div class="font_box">
          <p class="title"></p>
          <p class="money">
            抢购价：
            <span>￥</span>
            <del>￥</del>
          </p>
          <p class="sign_time">报名时间：{{$moment().format('MM月DD日 hh:mm')}}-{{$moment().format('MM月DD日 hh:mm') }}</p>
          <p class="rush_time">抢购时间：{{$moment().format('MM月DD日 hh:mm')}}</p>
        </div>
      </div>
      <div class="shanglucky">
        <span class="title">上期抢中用户</span>
        <ul>
          <li>
            <div class="left">用户：</div>
            <div class="right"></div>
          </li>
        </ul>
      </div>
    </div>
    <footer>
      <div class="tabbar">
        <div class="left_btn">
          <img src="../imgs/activity/btn-icon2.png" alt />
          活动商品
        </div>
        <div class="right_btn" @click="myorder">
          <img src="../imgs/activity/btn-icon1.png" alt />
          我的订单
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "buyActive",
  data() {
    return {
    imgUrl:""
    };
  },
  created() {
    this.bannerImg();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    bannerImg() {
      this.axios.post("/api/appapi/Active/banner_ajax").then(res => {
        console.log(res.data);
        this.imgUrl = res.data.banner[0];
      });
      this.axios.post("/api/appapi/Active/Index_ajax").then(res => {
        console.log(res.data)
        if(res.data.data==100){
          this.$router
        }
      });
    },
    myorder() {
      this.$router.replace("/myorder");
    }
  }
};
</script>

<style scoped>
.buyActive {
  background-color: rgba(245, 245, 245, 1);
  padding-bottom: 3rem;
}
.buyActive header {
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
.banner img {
  width: 100%;
}
.goodsbox {
  position: relative;
  top: 0.7rem;
  width: 94%;
  margin: 0 auto;
  margin-bottom: 1rem;
}

.goos_top {
  width: 100%;
  margin: 0 auto;
  height: 2rem;
  border-radius: 0.7rem 0.7rem 0 0;
  background-image: url(../imgs/Group.png);
  background-size: 100% 100%;
  color: #fff;
  text-align: left;
  line-height: 2rem;
}
.goos_list {
  margin: 0 auto;
  background-color: #fff;
  height: 7rem;
  display: flex;
  padding: 1.1rem 0 0.5rem 0.8rem;
}
.last,
.now {
  position: relative;
  left: 0.8rem;
}
.font_box {
  text-align: left;
  line-height: 1.9;
}
.img_box {
  display: inline-block;
  width: 6rem;
  height: 6rem;
}
.img_box img {
  width: 100%;
}
.title {
  color: #000;
  font-size: 0.95rem;
  font-weight: 600;
}
.money {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgb(76, 76, 76);
}
.money > span {
  color: rgb(252, 76, 87);
  font-weight: 700;
  font-size: 1rem;
  margin-right: 0.5rem;
}
.sign_time {
  font-size: 0.7rem;
  color: #000;
  white-space: nowrap;
}
.rush_time {
  font-weight: 600;
  font-size: 0.9rem;
}
.goodsbox3 {
  margin-bottom: 5rem;
}
.shanglucky {
  text-align: center;
  margin-top: 1rem;
}
.shanglucky > .title {
  font-size: 0.75rem;
  color: #000;
  font-weight: 600;
  margin-bottom: 1rem;
  display: block;
}
.shanglucky ul li {
  display: flex;
  justify-content: space-around;
  font-size: 0.85rem;
  line-height: 2rem;
  list-style: none;
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
.left_btn {
  color: #d7aa5b;
}
</style>
