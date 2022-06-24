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
                       src:"img/blog/blog-1.jpg"
                   },
                     {
                       src:"img/blog/blog-2.jpg"
                   },
                     {
                       src:"img/blog/blog-3.jpg"
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
                <div class="col-lg-4 col-md-4 col-sm-6" v-for="data in dataImg">
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
