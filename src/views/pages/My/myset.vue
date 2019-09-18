<template>
  <div class="myset">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="back"></i>
      <span>设置</span>
    </header>
    <div class="content">
      <div>
        <i class="fa fa-drivers-license-o"></i> 实名认证
        <i class="fa fa-angle-right fa-2x"></i>
      </div>
      <div>
        <i class="fa fa-credit-card"></i> 我的银行卡
        <i class="fa fa-angle-right fa-2x"></i>
      </div>
      <router-link :to="{path:'/myaddress'}">
      <div class="addre">
        <i class="fa fa-map-marker"></i> 收货地址管理
        <i class="fa fa-angle-right fa-2x"></i>
      </div>
      </router-link>
      <div>
        <i class="fa fa-user-o"></i> 设置邀请人
        <i class="fa fa-angle-right fa-2x"></i>
      </div>
      <div>
        <i class="fa fa-phone"></i> 联系我们
        <i class="fa fa-angle-right fa-2x"></i>
      </div>
    </div>
    <div>
      <button class="my_quit" @click="quit">
        <span class="quit">退出登录</span>
        <span class="quit_user">{{user.phone}}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  name: "myset",
  data() {
    return {
      user: ""
    };
  },
  created() {
    this.myuser();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    myuser() {
      this.axios({
        url: "/api/appapi/My/my_info",
        methods: "post"
      }).then(res => {
        console.log(res);
        this.user = res.data.data;
      });
    },
    quit() {
      MessageBox({
        title: "提示",
        message: "确定要退出么",
        showCancelButton: false
      }).then(action => {
        this.axios({
          url: "/api/appapi/My/tuichu",
          methods: "post"
        }).then(res => {
          console.log(res.data);
          if (res.data.errcode == 100) {
            this.$router.replace("/");
          }
        });
      });
    }
  }
};
</script>

<style scoped>
.myset header {
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
header i {
  float: left !important;
  position: relative;
  top: 0.4rem;
}
.content {
  width: 100%;
  margin: 0 auto;
  text-align: left;
  position: relative;
  top: 0.8rem;
  background-color: #fff;
}
.content div {
  padding: 0 5% 0 5%;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid #eee;
  border-radius: 0.625rem;
}
.addre{
  color: #2c3e50;
}
.content i {
  display: inline-block;
  width: 1.5rem;
}
.content .fa-angle-right {
  width: 0;
  color: #9a9a9a;
  float: right;
  position: relative;
  top: 15%;
  right: 3%;
}
.my_quit {
  width: 100%;
  height: 3.75rem;
  background: rgba(255, 255, 255, 1);
  border: none;
  position: relative;
  top: 2rem;
  color: #c88723;
}
.my_quit span {
  display: block;
}
.quit {
  font-size: 1rem;
}
.quit_user {
  color: #666666;
}
</style>