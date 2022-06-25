<script setup>
import { mapGetters } from 'vuex'

    defineProps({
    // msg: {
    //     type: String,
    //     required: true
    // }
})
</script>
<script>
    export default {
    
        data() {
            
            // nơi chứa giống state bên reactJS
            return {
                count: 0,
                user: "",
                password:"",
                dataInput:[],
                textClass:true,
                dataX:"",
                productById:'',
                quantity:0,
                valueQuantity:0,
                dataCart:[],
                toTalPrice:0
                
                
            }
        },
        computed:{
            handleCart(){
                this.valueQuantity
            },
              handleAddCart(){
               this.dataCart.push(this.productById)
            },
             ...mapGetters(['getProduct'])
        },

        methods:{
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
        }
        
    }
</script>

<template>
  <div class="header-container">
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="header__top__left">
                            <ul>
                                <li><i class="fa fa-envelope"></i> leduy@gmail.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="header__top__right">
                            <div class="header__top__right__social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                <a href="#"><i class="fa fa-pinterest-p"></i></a>
                            </div>
                            <div class="header__top__right__language">
                                <img src="img/language.png" alt="">
                                <div>English</div>
                                <span class="arrow_carrot-down"></span>
                                <ul>
                                 
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div class="header__top__right__auth">
                                <a href="#"><i class="fa fa-user"></i> Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="header__logo">
                       <router-link to="/"><img src="img/logo.png" alt=""></router-link>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="header__menu">
                        <ul>
                            <li class="active"><router-link to="/">Home</router-link></li>
                            <li><router-link to="/product-detail">Shop</router-link></li>
                            <li><router-link to="/product-detail">Pages</router-link>
                                <ul class="header__menu__dropdown">
                                    <li>
                                        <router-link to="/product-detail">Detail product</router-link>
                                    </li>
                                    <li><a href="">Shoping Cart</a></li>
                                    <li>  <router-link to="/check-out">Checkout product</router-link></li>
                                    <li><a href="">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="header__cart">
                        <ul>
                            <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
                            <li><router-link to="/shopping-cart"><i class="fa fa-shopping-bag"></i> <span>{{getProduct.length}}</span></router-link></li>
                        </ul>
                        <div class="header__cart__price">item: <span>${{totalCart()}}</span></div>
                    </div>
                </div>
            </div>
            <div class="humberger__open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>
    <!-- {{getProduct.length}} -->
  </div>
</template>

<style scoped>

</style>
