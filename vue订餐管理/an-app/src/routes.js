/**
 * Created by Administrator on 2018/3/25.
 */
//将路由代码抽离到文件routes.js
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'


//三极路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'


export const routes = [
  {path:'/',name:"homeLink",components:{

    //复用
    default:Home,
    'orderingGuide':OrderingGuide,
    'delivery':Delivery,
    'history':History
  }},
  {path:'/menu',name:"menuLink",component:Menu},
  {path:'/admin',name:"adminLink",component:Admin
    //,beforeEnter:(to,from,next) => {
    //路由独享守卫
    //   alert("非登录状态，不能访问此页面！");
    //   next(false);
    //判断store.gettes.isLogin === false
    //if(to.path == "/login" || to.path == "/register"){
    //  next();
    //}else{
    //  alert("还没有登录，请先登录！");
    //  next("/login")
    //}
    //}
  },
  {path:'/about',name:"aboutLink",component:About,redirect:'/history',children:[
    {path:'/about/contact',name:"contactLink",component:Contact,redirect:'/about/contact/phone',children:[
      {path:'/about/contact/personName',name:"personName",component:PersonName},
      {path:'/about/contact/phone',name:"phone",component:Phone}
    ]},
    {path:'/delivery',name:"deliveryLink",component:Delivery},
    {path:'/history',name:"historyLink",component:History},
    {path:'/orderingGuide',name:"orderingGuideLink",component:OrderingGuide}
  ]},
  {path:'/login',name:"loginLink",component:Login},
  {path:'/register',name:"registerLink",component:Register},
  {path:'*',redirect:'/'}
]
