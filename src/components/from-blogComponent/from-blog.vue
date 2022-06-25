<script setup>
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
               dataImg:[
                   {
                       src:"https://cmsv2.yame.vn/uploads/f12045d4-ad31-4585-9c9e-50a558997a8c/Banner_web_BB_1280x1000.jpg?quality=80&w=350&h=0"
                   },
                     {
                       src:"https://cmsv2.yame.vn/uploads/be95d51a-5b11-4069-a19c-3f309000b9ea/thum_Poly_Freshgear.jpg?quality=80&w=350&h=0"
                   },
                     {
                       src:"https://cmsv2.yame.vn/uploads/80f24eae-5963-4d35-b7d4-99c42df887e9/thum_JEAN_COTTON_SPANDEX.jpg?quality=80&w=350&h=0"
                   }
               ]
            }
        }
       
    }
</script>
<template>
  <div class="from-blog-container">
    <section class="from-blog spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title from-blog__title">
                        <h2>From The Blog</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6" v-for="(data,index) in dataImg" :key="index">
                    <div class="blog__item">
                        <div class="blog__item__pic">
                            <img :src="data.src" alt="">
                        </div>
                        <div class="blog__item__text">
                            <ul>
                                <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i class="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="#">Cooking tips make cooking simple</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
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
