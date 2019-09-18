<template>
  <div class="myaddress">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="back"></i>
      <span>地址管理</span>
      <span class="addadd">添加新地址</span>
    </header>
    <div class="add_box">
       <div class="address" v-for="(item,index) in name" :key="index">
      <div class="add_left">
        <p><span class="moren" v-if="index==0">默认</span> {{name[index].receipt_username}} {{name[index].receipt_phone}}</p>
        <p>{{name[index].receipt_address}}</p>
      </div>
      <router-link class="add_right" :to="{path:'/bianji',query:{id:name[index].id}}">
        编辑
      </router-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"myaddress",
  data(){
    return{
      name:""
    }
  },
  created(){
    this.address()
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    address(){
      this.axios({
        url:"/api/appapi/My/myaddress_info",
        methods:"post"
      }).then(res=>{
        console.log(res)
        var res = res.data
        this.name = res.list
      })
    }
  }
}
</script>

<style scoped>
  .myaddress header {
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
  z-index: 2;
}
.add_box{
  margin-top: 5rem;
}
.moren{
  background-color: #ffd700;
  padding: 0.3rem;
  border-radius: 0.4rem;
  font-size: 0.7rem;
}
i {
  float: left !important;
  position: relative;
  top: 0.4rem;
  left: 0.8rem;
}
.addadd{
 position: absolute;
 right: 0.75rem;
 font-size: 0.6rem;
}
.address{
  width: 90%;
  margin: 0 auto;
  height: 6rem;
  border-radius: 0.6rem;
  background-color: #fff;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content:space-between;
}
.add_left{
  flex: 0.7;
  line-height: 2;
  border-right: 1px solid #cccccc;
  text-align: left;
  text-indent: 1rem;
}
.add_right{
  flex: 0.3;
}
</style>