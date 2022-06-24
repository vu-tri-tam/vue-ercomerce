<script setup>
// import axios from "axios"
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
        //  mounted() {
        //     // get api from server 
        //       axios
        //         .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        //         .then(response => (this.dataInput.push(response.data)))
        // }
    }
</script>

<template>
    <div>
        <section class="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>Vegetable’s Package</h2>
                        <div class="breadcrumb__option">
                            <a href="./index.html">Home</a>
                            <a href="./index.html">Vegetables</a>
                            <span>Vegetable’s Package</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    </div>

</template>

<style scoped>
button {
  font-weight: bold;
}
</style>