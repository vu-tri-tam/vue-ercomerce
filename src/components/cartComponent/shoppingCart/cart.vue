<template>
  <section class="shoping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                  <!-- 1213{{getProduct.length}} -->
                    <div class="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(data,index) in getProduct" :key="index">
                                    <td class="shoping__cart__item">
                                        <img :src="data.image" alt="" width="100" height="100">
                                        <h5>{{handleLimitString(data.title)}}</h5>
                                    </td>
                                    <td class="shoping__cart__price">
                                        ${{data.price}}
                                    </td>
                                    <td class="shoping__cart__quantity">  
                                        <div class="quantity">
                                            <div class="pro-qty">
                                                <input type="text" :value="data.quantity">
                                            </div>
                                        </div>
                                    </td>
                                    <td class="shoping__cart__total">
                                        ${{data.totalPrice}}
                                    </td>
                                    <td class="shoping__cart__item__close">
                                        <span class="icon_close"></span>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="shoping__cart__btns">
                        <a href="#" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                        <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                            Upadate Cart</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="shoping__continue">
                        <div class="shoping__discount">
                            <h5>Discount Codes</h5>
                            <form action="#">
                                <input type="text" placeholder="Enter your coupon code">
                                <button type="submit" class="site-btn">APPLY COUPON</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="shoping__checkout">
                        <h5>Cart Total:  </h5>
                        <ul>
                            <li>Subtotal <span>$0</span></li>
                            <li>Total <span>${{totalCart()}}</span></li>
                        </ul>
                     
                            <router-link to="/check-out" class="primary-btn">PROCEED TO CHECKOUT</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  methods:{
    handleLimitString(str){
      let stringLimit 
      if(str.length>10){
        stringLimit = str.substring(0,40).concat('....')
      }
      return stringLimit
    },
    totalCart(){
        let total=0
        for(let index = 0; index < this.getProduct.length; index++) {
           total+= this.getProduct[index].totalPrice
               console.log(this.getProduct[index].totalPrice,'dd');
            
        }
    return total
        //   let total=this.getProduct.reduce((privateElement, nextElement)=>{
        //         //    return privateElement.totalPrice + nextElement.totalPrice
        //                  console.log(privateElement,'total');
        //         },0)
        // // console.log(this.getProduct[0].totalPrice);
    }
  },
  computed:{
    ...mapGetters(['getProduct'])
  }
}
</script>

<style>

</style>