<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../assets/001.gif">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                >
            </div>
            <div class="form-group">
              <label for="email">密码</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                >
            </div>
            <div class="form-group">
              <label for="confirm-password">确认密码</label>
              <input
                type="passwordl"
                class="form-control"
                v-model="confirmPassword"
                >
            </div>
            <button type="submit" class="btn btn-block btn-success">注册</button>
          </form>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
  export default{
    data(){
      return{
        email:"",
        password:"",
        confirmPassword:""
      }
    },
    methods:{
      onSubmit(){
          //console.log("asdsa")
          if(this.password === this.confirmPassword){
            const formData = {
              email:this.email,
              password:this.password,
              confirmPassword:this.confirmPassword

            }
            axios.post('/users.json',formData)
             // .then(res => {
             //    console.log(res)
             // })

             //若注册成功直接跳往登录页面
                .then(res =>this.$router.push({name:"loginLink"}))
          }else{
            alert("两次密码不一致！")
          }
      }
    }
  }
</script>

