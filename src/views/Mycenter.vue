<template>
  <div class="myCenter">
    <header>
      <p class="top_header">
        我的
        <router-link :to="{path:'/myset'}">
          <i class="fa fa-cog"></i>
        </router-link>
      </p>
      <div class="my_top">
        <div class="my_icon">
          <img src="../imgs/My/default.png" alt />
        </div>
        <div class="my_name">
          <span>{{myname}}</span>
        </div>
      </div>
    </header>
    <div class="my_tab">
      <div class="tab_top">
        <i class="fa fa-list"></i>
        我的订单
      </div>
      <div class="tab_tab">
        <div class="fukuan">
          <router-link :to="{path:'/myorders'}">
          <img src="../imgs/My/daifu.png" alt />
          <span>带付款</span>
          </router-link>
        </div>
        <div class="dingzhi">
          <img src="../imgs/My/yifu.png" alt />
          <span>定制中</span>
        </div>
        <div class="yiding">
          <img src="../imgs/My/daiqu.png" alt />
          <span>已定制</span>
        </div>
        <div class="shouhuo">
          <img src="../imgs/My/daimai2.png" alt />
          <span>待收货</span>
        </div>
        <div class="wancheng">
          <img src="../imgs/My/lishi.png" alt />
          <span>已完成</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div>
        <i class="fa fa-ticket"></i> 优惠券
        <i class="fa fa-caret-right"></i>
      </div>
      <div>
        <i class="fa fa-user-plus"></i> 邀请好友
        <i class="fa fa-caret-right"></i>
      </div>
      <div>
        <i class="fa fa-question-circle-o"></i> 帮助中心
        <i class="fa fa-caret-right"></i>
      </div>
    </div>
    <footers :selected="'myCenter'"></footers>
  </div>
</template>
<script>
import footers from "../components/footers";
export default {
  name: "myCenter",
  data() {
    return {
      myname: ""
    };
  },
  components: {
    footers: footers
  },
  created() {
    this.myInfo();
  },
  methods: {
    myInfo() {
      this.axios.post("/api/appapi/My/my_ajax").then(data => {
        console.log(data);
        if(data.data.is_login==false){
          this.$router.replace("/submit_order")
        }
      });
      this.axios({
        url: "/api/appapi/My/my_info",
        methods: "post"
      }).then(res => {
        console.log(res);
        var info = res.data.data;
        if (info.username == null) {
          this.myname = info.phone;
        }else{
           this.myname = info.username;
        }
      });
    },
    myset() {
      this.$router.replace("/myset");
    }
  }
};
</script>

<style scoped>
.myCenter header {
  width: 100%;
  height: 10.5rem;
  background: url(../imgs/My/GroupMy.png) round;
  background-size: 100%;
}
.top_header {
  color: #fff;
  height: 3.2rem;
  line-height: 3.2rem;
  font-size: 1.2rem;
  font-weight: 500;
  position: relative;
}
.top_header i {
  position: absolute;
  right: 5%;
  top: 30%;
}
.my_top {
  width: 90%;
  margin: 0 auto;
  text-align: left;
  display: flex;
  align-items: center;
}
.my_icon {
  width: 4rem;
  height: 4rem;
  display: inline-block;
}
.my_name {
  color: #fff;
  display: inline-block;
  position: relative;
  left: 1.5rem;
}
.my_tab {
  width: 90%;
  margin: 0 auto;
  background-color: #fff;
  height: 9rem;
  border-radius: 0.625rem;
  margin-top: -1.275rem;
}
.tab_top {
  height: 3rem;
  text-align: left;
  text-indent: 0.6rem;
  line-height: 3rem;
  border-bottom: 1px solid #eee;
}
.tab_tab {
  display: flex;
  justify-content: space-around;
  font-size: 0.7rem;
}
.tab_tab div {
  width: 20%;
  padding: 4%;
}
.tab_tab span {
  position: relative;
  top: 0.6rem;
}
.tab_tab a{
  text-decoration: none;
  color: #000;
}
.content {
  width: 90%;
  margin: 0 auto;
  text-align: left;
  position: relative;
  top: 1.6rem;
  background-color: #fff;
  border-radius: 0.625rem;
}
.content div {
  padding: 0 5% 0 5%;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid #eee;
  border-radius: 0.625rem;
}
.content i {
  display: inline-block;
  width: 1.5rem;
}
.content .fa-caret-right {
  width: 0;
  color: #9a9a9a;
  float: right;
  position: relative;
  top: 25%;
}
.fa-cog {
  width: 1rem;
  height: 1rem;
  color: #fff;
}
</style>