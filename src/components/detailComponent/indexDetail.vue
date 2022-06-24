<script setup>
import axios from 'axios';

import BreadcrumVue from './breadCrumComponent/breadcrum.vue';
import ProductDetailVue from './productDetailComponent/productDetail.vue';

</script>

<script>
    export default {
        // props: ['productById'],
        data() {
            // nơi chứa giống state bên reactJS
            return {
                productById: null
                
            }
        }
        
        // methods: {
        //     handleClick(e){
        //          this.count++
        //     },
        //     getData(){
        //         this.dataInput.push(this.info)
        //     },
            
        // },
        //  computed:{
        //      // để phân biệt thì khi nào cần tạo function có params truyền vào thì dùng methods ngược lại dùng computed
        //      // giống methods nhưng nó hạn chế sự render lặp lại toàn bộ method bên trong, nó chỉ hoạt động từng cái theo yêu cầu
        //     objectData:function () {
        //         return this.datax="ok"
        //     }
        // },
       
    }
</script>

<template>
    <div>
       <BreadcrumVue/>
       <ProductDetailVue />
    </div>

</template>

<style scoped>
button {
  font-weight: bold;
}
</style>