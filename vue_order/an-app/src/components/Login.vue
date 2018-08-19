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
            <button type="submit" class="btn btn-block btn-success">登录</button>
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
        password:""
      }
    },
    methods:{
      onSubmit(){
        // console.log("wqqeq")
        axios.get('/users.json')
          .then(res => {
              console.log(res.data)
          })
      }

    }
  }
</script>
