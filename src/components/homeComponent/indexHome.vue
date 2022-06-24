<script setup>
// import axios from "axios"

import Categories from '../cateComponent/categories.vue';
import Featured from '../featuredComponent/featured.vue';
import Banner from '../bannerComponent/banner.vue';
import LatestProduct from '../latest-productComponent/latest-product.vue';
import FromBlog from '../from-blogComponent/from-blog.vue';
import HeroVue from '../heroComponent/hero.vue';
// import Footer from '../footerComponent/footer.vue';
// import IndexDetail from '../detailComponent/indexDetail.vue';
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
                dataX:""
            }
        }
   
    }
</script>

<template>
    <div>
        <HeroVue/>
        <Categories/>
        <Featured/>
        <Banner/>
        <LatestProduct/>
        <FromBlog/>
    </div>

</template>

<style scoped>
button {
  font-weight: bold;
}
</style>