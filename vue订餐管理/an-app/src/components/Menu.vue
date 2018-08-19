<template>
  <div class="row">

  <!--菜单-->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>规格大小</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="foodItem in foodItems" :key="foodItem.name">
            <tr>
              <td><strong>{{foodItem.name}}</strong></td>
            </tr>
            <tr v-for="option in foodItem.options" :key="option.size">
              <td>{{option.size}}</td>
              <td>{{option.price}}</td>
              <td>
                <button
                  @click="addToCart(foodItem,option)"
                  class="btn btn-sm btn-outline-success">+
                </button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>


  <!--购物车-->
  <div class="col-sm-12 col-md-4 cart">
    <div v-if="cart.length > 0">
      <table class="table">
        <thead>
        <tr>
          <th>数量</th>
          <th>名称/规格</th>
          <th>价格</th>
        </tr>
        </thead>
        <tbody v-for="item in cart" >
        <tr>
          <td>
            <button
              @click="reduceNum(item)"
              class="btn btn-sm">-
            </button>
            <span>{{item.number}}</span>
            <button
              @click="increaseNum(item)"
              class="btn btn-sm">+
            </button>
          </td>
          <td>{{item.name}}{{item.size}}</td>
          <td>{{item.price*item.number}}</td>
        </tr>
        </tbody>
        <p>总价：{{allPrice}}RMB</p>
        <button class="btn btn-success btn-block">提交</button>
      </table>
    </div>
    <div v-else>
      <img src="http://cdns2.freepik.com/free-photo/add-to-cart-e-commerce-interface-symbol_318-59853.jpg" alt="" class="cart01">
      <h5>购物车空空如也~</h5>
    </div>
  </div>

    <!--测试点击是否成功-->
    {{cart}}

  </div>

</template>
<script>
export default{
  data(){
    return{
      cart:[],
      foodItems:{
        1:{
          'name':"鱼香肉丝",
          'description':"味道香甜/微辣",
          'options':[{
            'size':"小份",
            'price':12
          },{
            'size':"大份",
            'price':24
          }]
        },
        2:
          {
            'name':"蚂蚁上树",
            'description':"油而不腻香",
            'options':[{
              'size':"小份",
              'price':13
            },{
              'size':"大份",
              'price':26
            }]
          },
        3:
          {
            'name':"清蒸鱼",
            'description':"上好鲈鱼,蒸煮",
            'options':[{
              'size':"小份",
              'price':15
            },{
              'size':"大份",
              'price':30
            }]
          },
      }
   }
 },
  computed:{

    //计算方法获取总价
    allPrice(){
      let allPriceCost = 0;
      for (let index in this.cart){
        //获取数组里面的每一项food
        let food = this.cart[index];
        allPriceCost += food.price*food.number
      }
      return allPriceCost
    }

  },
  methods:{
    addToCart(foodItem,option){
      //实现点击以后将相关数据添加到cart数组
      //此处稍微复杂,先判断cart里面有没有,没有则直接添加carts,有的话进行过滤判断有没有相同项
      let carts ={
        'name':foodItem.name,
        'size':option.size,
        'price':option.price,
        'number':1
      };

      if (this.cart.length > 0){
        //过滤
        let result = this.cart.filter((carts) => {
            return (carts.name === foodItem.name && carts.price === option.price)
          });

        if(result.length > 0){
          result[0].number++;
        }else{
          this.cart.push(carts)
        }

      }else{
        this.cart.push(carts)
      }



    },
    reduceNum(item){
      item.number--;
      if(item.number<=0){
        this.stopReduce(item)
      }
    },
    increaseNum(item){
      item.number++;
    },
    stopReduce(item){
      this.cart.splice(this.cart.indexOf(item),1)
    }
  }

}
</script>

<style>
.cart01{
  width:100px;
  height:100px;
}
h5{
  display:inline-block;
}
</style>
