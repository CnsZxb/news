<template>
  <div class="logins">
    <header>
      <img src="../imgs/close.png" alt class="close" @click="back" />
    </header>
    <div class="icon">
      <img src="../imgs/logo2.png" alt />
    </div>
    <div class="log_form">
      <input type="text" placeholder="请输入手机号" class="phone" maxlength="11" v-model="phone" />
      <div class="btn_s">
        <input type="text" placeholder="请输入验证码" class="yanzheng" maxlength="4" v-model="code" />
        <button class="send" :disabled="disabled" @click="sendcode">{{btntxt}}</button>
      </div>
      <button class="log_btn" @click="query">登录</button>
      <p class="no_num">
        没有账号？
        <router-link :to="{path:'/zhuce'}">立即注册></router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";

export default {
  name: "login",
  data() {
    return {
      disabled: false,
      time: 0,
      btntxt: "获取验证码",
      phone: this.phone,
      code: this.code
    };
  },
  methods: {
    back() {
      window.location.href = "/";
    },
    sendcode() {
      var reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (!reg.test(this.phone)) {
        MessageBox({
          title: "提示",
          message: "请输入正确的手机号"
        });
        return;
      } else if (reg.test(this.phone)) {
        this.axios({
          url: "/api/appapi/Login/testUser",
          methods: "post",
          params: {
            phone: this.phone
          }
        }).then(res => {
          console.log(res.data.errcode);
          if (res.data.errcode == 100) {
            MessageBox({
              title: "提示",
              message: "用户未注册，请先注册"
            }).then(acthion => {
              this.$router.replace("/zhuce");
            });
          } else if (reg.test(this.phone)) {
            this.time = 60;
            this.disabled = true;
            this.timer();
            this.axios({
              methods: "post",
              url: "/api/alisms/SmsCl.php",
              params: {
                phone: this.phone
              }
            }).then(data => {
              console.log(data);
              if (data.data.errcode == 100) {
                this.code = data.num;
              } else {
                MessageBox({
                  title: "提示",
                  message: "获取验证码失败，请重新获取"
                });
              }
            });
          }
        });
      }
    },
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btntxt = this.time + "s后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    },
    query() {
      this.axios({
        url: "/api/appapi/Login/login_ajax",
        methods: "post",
        params: {
          phone: this.phone,
          code: this.code,
          source: 1
        }
      }).then(data => {
        console.log(data);
        if (data.data.errcode == 100) {
          this.$router.replace("/");
        } else if (data.data.errcode == 101) {
          MessageBox({
            title: "提示",
            message: "用户尚未注册"
          });
          return;
        } else if (data.data.errcode == 500) {
          MessageBox({
            title: "提示",
            message: "存储失败"
          });
          return;
        } else if (data.data.errcode == 600) {
          MessageBox({
            title: "提示",
            message: "验证码失效"
          });
          return;
        } else {
          MessageBox({
            title: "提示",
            message: "登录失败，请重新登录"
          });
          return;
        }
      });
    }
  }
};
</script>

<style scoped>
.logins {
  height: 100%;
  background-image: url(../imgs/login.png);
}
.logins header {
  padding: 1rem 0 0 1rem;
  overflow: hidden;
}
.close {
  float: left;
  width: 1.5rem;
  height: 1.5rem;
}
.icon {
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  margin-top: 5rem;
}
.icon img {
  width: 4rem;
}
.log_form {
  width: 90%;
  height: 14.375rem;
  margin: 0 auto;

  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.03);
  border-radius: 0.625rem;
  margin-bottom: 10rem;
}
.phone,
.yanzheng {
  width: 90%;
  height: 3.5rem;
  border: 0px;
  font-size: 0.8em;
  line-height: 3.5rem;
  border-bottom: 1px solid #cacaca;
  box-sizing: border-box;
  outline: none;
  margin-top: 1.25rem;
}
.yanzheng {
  margin-top: 0rem;
}
.log_btn {
  width: 90%;
  height: 2.75rem;
  background: linear-gradient(
    298deg,
    rgba(230, 190, 107, 1) 0%,
    rgba(208, 160, 79, 1) 100%
  );
  border: none;
  border-radius: 4px;
  margin-top: 0.8rem;
  font-size: 1rem;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
}
.no_num {
  width: 94%;
  margin-top: 0.3rem;
  height: 2rem;
  line-height: 2rem;
  text-align: right;
}
.no_num a {
  text-decoration: none;
  color: #c88723;
}
.btn_s {
  position: relative;
}
.send {
  width: 5.875rem;
  height: 1.8125rem;
  border-radius: 4px;
  border: 1px solid rgba(102, 102, 102, 1);
  background-color: #fff;
  float: right;
  position: absolute;
  right: 5%;
  top: 25%;
}
</style>

