<script setup>
    import axios from "axios"
import { mapActions } from "vuex";
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
            return {
                dataProduct:[],
                datax:"",
                idProduct:null,
                catalogies:null,
                dataFilter:[]
               
            }
        },
        methods:{
            handleGetIdProduct(idProduct){
                this.idProduct =idProduct
                // console.log(idProduct,88);
            },
            handleFilter(idCatelogies){
              axios.get(`https://fakestoreapi.com/products/category/${idCatelogies}`)
             .then(response => this.dataProduct=response.data)
            }
            // ...mapActions(['addToCart'])
        },
        computed:{
            objectData:function () {
                return this.datax="ok"
            
            },
           

        },
        mounted(){
          axios.get('https://fakestoreapi.com/products')
             .then(response => this.dataProduct=response.data)
          axios.get('https://fakestoreapi.com/products/categories')
             .then(response => this.catalogies=response.data)

        }
       
    }
</script>

<template>
  <div class="featured-container">
    <section class="featured spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div class="featured__controls">
                        <ul>
                            <li class="active" data-filter="*">All</li>
                            <!-- <li ><router-link to="#"   v-for="(data,index) in catalogies" :key="index">{{data}}</router-link></li> -->
                            <li  v-for="(data,index) in catalogies" :key="index" @click="handleFilter(data)">{{data}}</li>
                        
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row featured__filter">
                <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables" v-for="(data,index) in dataProduct" :key="index">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" >
                            <img :src="data.image" style="width:100%; height: 100%; object-fit: cover;"/>
                            <ul class="featured__item__pic__hover">
                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                <li>
                                    <router-link :to="{ name:'product-detail', params: {id: data.id}}" v-on:click="handleGetIdProduct(data.id)">
                                    <i class="fa fa-shopping-cart"></i>
                                    </router-link>
                                    </li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">{{data.title}}</a></h6>
                            <h5>{{data.price}}$</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<style scoped>

</style>
