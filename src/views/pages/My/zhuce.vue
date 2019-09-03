<template>
  <div class="zhuce">
    <header>
      <i class="fa fa-arrow-left fa-2x" @click="back"></i>
    </header>
    <div class="logo">
      <img src="../../../imgs/logo2.png" alt />
    </div>
    <div class="log_form">
      <input type="text" placeholder="请输入手机号" class="phone" maxlength="11" v-model="phone" />
      <div class="btn_s">
        <input type="text" placeholder="请输入验证码" class="yanzheng" maxlength="4" v-model="code" />
        <button class="send" :disabled="disabled" @click="sendcode">{{btntxt}}</button>
      </div>
      <input type="text" placeholder="请输入邀请码(选填)" class="yanzheng" maxlength="4" v-model="yaoqing" />
      <button class="log_btn" @click="zhuce">注册</button>
      <p class="text">
        注册即表示同意
        <span>《平台服务协议》</span>
        <span>《隐私权政策》</span>
      </p>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  name: "zhuce",
  data() {
    return {
      disabled: false,
      time: 0,
      btntxt: "获取验证码",
      phone: this.phone,
      code: this.code,
      yaoqing: this.yaoqing
    };
  },
  created() {},
  methods: {
    back() {
      this.$router.replace("/login");
    },
    sendcode() {
      var reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (!reg.test(this.phone)) {
        MessageBox({
          title: "提示",
          message: "请输入正确的手机号"
        });
      } else {
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
    zhuce() {
      this.axios({
        url: "/api/appapi/login/register_ajax",
        methods: "post",
        params: {
          phone: this.phone,
          code: this.code,
          source: 1
        }
      }).then(res => {
        console.log(res.data.errcode);
        if (res.data.errcode == 100) {
          MessageBox({
            title: "提示",
            message: "注册成功，请登录"
          }).then(action => {
            this.$router.replace("/login");
          });
          return;
        } else if (res.data.errcode == 101) {
          MessageBox({
            title: "提示",
            message: "注册成功，请登录"
          }).then(action => {
            this.$router.replace("/login");
          });
          return;
        } else if (res.data.errcode == 301) {
          MessageBox({
            title: "提示",
            message: "无效验证码，请重新输入"
          });
          return;
        } else if (res.data.errcode == 201) {
          MessageBox({
            title: "提示",
            message: "注册失败"
          });
          return;
        } else if (res.data.errcode == 500) {
          MessageBox({
            title: "提示",
            message: "存储失败"
          });
          return;
        } else if (res.data.errcode == 600) {
          MessageBox({
            title: "提示",
            message: "验证码失效"
          });
          return;
        } else {
          MessageBox({
            title: "提示",
            message: "登录失败"
          });
          return;
        }
      });
    }
  }
};
</script>

<style scoped>
.zhuce {
  background-image: url(../../../imgs/login.png);
  background-size: 100% 100%;
  height: 45rem;
}
.zhuce header {
  height: 3rem;
  line-height: 4rem;
  text-align: left;
  text-indent: 0.5rem;
}
.fa-arrow-left {
  color: #fff;
}
.logo {
  width: 100%;
  margin-top: 5rem;
}
.logo img {
  width: 6rem;
}
.log_form {
  width: 90%;
  height: 17.375rem;
  margin: 0 auto;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.03);
  border-radius: 0.625rem;
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
.text {
  line-height: 3;
  text-align: left;
  font-size: 0.6rem;
  text-indent: 1rem;
}
p span {
  color: #c88723;
}
</style>