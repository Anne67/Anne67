import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import axios from 'axios'

Vue.use(VueRouter);

axios.default.baseURL = "";

const router = new VueRouter({
  routes,
  mode:'history',
  //滚动行为控制
  scrollBehavior(to,from,savedPosition){
    //return{x:0,y:100}
    //return{selector:'.btn'}

    //点击回退以后停留在之前浏览的地方
    if(savedPosition){
      return savedPosition
    }else{
      return{x:0,y:0}
    }
  }
});

//全局守卫
// router.beforeEach((to,from,next) =>{
 //alert("还没有登录，请先登录！");
 //next();
 //console.log(to);

 //判断store.gettes.isLogin === false
 // if(to.path == "/login" || to.path == "/register"){
 //   next();
 // }else{
 //   alert("还没有登录，请先登录！");
 //   next();  //测试直接显示
 //   // next("/login")
 // }
// });

// 后置钩子
// router.afterEach((to,from) => {
//   alert("after each")
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
