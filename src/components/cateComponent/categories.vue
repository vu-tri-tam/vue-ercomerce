<script setup>
import axios from 'axios'
    defineProps({
    // msg: {
    //     type: String,
    //     required: true
    // }
})
</script>
<script>
  export default {
        data(){
            return{
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
                        ,
                            {
                            src:"img/blog/blog-4.jpg"
                        }
                    ],
                    listSlideShow:[]
            }
        },
        mounted(){
        
          axios.get('https://fakestoreapi.com/products')
             .then(response => this.listSlideShow=response.data)
         

        }
}

</script>

<template>
  <!-- <div class="categories-container"> -->
    <section class="categories">
        <!-- <div class="container">
            <div class="row">
                <div class="categories__slider owl-carousel">
                    <div class="col-lg-3" v-for=" (product,index) in listSlideShow" :key="index">
                        <div class="categories__item set-bg" data-setbg="img/categories/cat-1.jpg" >
                            <img :src="product.image" style="width:100px; height: 100%; object-fit: cover;"/>
                            
                            <h5><a href="#">{{product.title}}</a></h5>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div> -->
        <div class="container my-5">
          <div class="row d-flex justify-content-center">
              <div class="col-12">
                <div id="carousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" class="active bg-secondary"></li>
                        <li data-target="#carousel" data-slide-to="1" class="bg-secondary"></li>
                        <li data-target="#carousel" data-slide-to="2" class="bg-secondary"></li>
                      </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="row">
                            <div class="col-12 col-md-6 col-xl-3 mb-4">
                                <div class="card mr-3">
                                    <img src="https://cdn2.yame.vn/pimg/so-mi-co-danton-y-nguyen-ban-18-ver20-0020896/a821707a-659c-9b00-10fc-00192b108249.jpg?w=540&h=756&c=true" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">Aó thun sọc nam</h5>
                                      <p class="card-text">We’re getting nearer to the end of summer and because we know that this period can make a serious dent in your pocket..</p>
                                      <a href="#" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-xl-3 mb-4">
                                <div class="card mr-3">
                                    <img src="https://cdn2.yame.vn/pimg/so-mi-co-danton-y-nguyen-ban-18-ver20-0020896/a821707a-659c-9b00-10fc-00192b108249.jpg?w=540&h=756&c=true" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">Aó thun trắng</h5>
                                      <p class="card-text">A couple of days ago we got access to the OpenAI’s Beta API platform and I had the occasion to play around with it...</p>
                                      <a href="#" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-xl-3 mb-4">
                                <div class="card mr-3">
                                    <img src="https://cdn2.yame.vn/pimg/ao-thun-co-tron-y-nguyen-ban-18-ver66-0020989/0daea7a2-a2fb-3000-eaf7-0019200954df.jpg?w=540&h=756&c=true" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">Aó thun sọc nam</h5>
                                      <p class="card-text">We’re getting nearer to the end of summer and because we know that this period can make a serious dent in your pocket..</p>
                                      <a href="#" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-xl-3 mb-4">
                                <div class="card mr-3">
                                    <img src="https://cdn2.yame.vn/pimg/so-mi-co-danton-y-nguyen-ban-18-ver20-0020896/a821707a-659c-9b00-10fc-00192b108249.jpg?w=540&h=756&c=true" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">Áo thun sọc nam</h5>
                                      <p class="card-text">If you’ve been using Angular for your web projects I’m glad to let you know that following this major update to version...</p>
                                      <a href="#" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="row">
                            <div class="col-12 col-md-6 col-xl-3 mb-4">
                                <div class="card mr-3">
                                    <img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/bootstrap-themes-summer-sale.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">35% discount for premium Bootstrap Themes, Templates, UI Kits</h5>
                                      <p class="card-text">We’re getting nearer to the end of summer and because we know that this period can make a serious dent in your pocket..</p>
                                      <a href="#" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-xl-3 mb-4">
                                <div class="card mr-3">
                                    <img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/gpt-3-tailwind-css-code-generator.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">We built an OpenAI powered Tailwind CSS code generator using GPT-3</h5>
                                      <p class="card-text">A couple of days ago we got access to the OpenAI’s Beta API platform and I had the occasion to play around with it...</p>
                                      <a href="#" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-xl-3 mb-4">
                                <div class="card mr-3">
                                    <img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/bootstrap-5-tutorial/bootstrap-5-tutorial.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">Bootstrap 5 tutorial: learn how to get started without jQuery</h5>
                                      <p class="card-text">We’re getting nearer to the end of summer and because we know that this period can make a serious dent in your pocket..</p>
                                      <a href="#" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-xl-3 mb-4">
                                <div class="card mr-3">
                                    <img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/angular-10/angular-10-officially-released-dropping-ie-9-10.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">Angular 10 officially released deprecating support for IE 9 and 10</h5>
                                      <p class="card-text">If you’ve been using Angular for your web projects I’m glad to let you know that following this major update to version...</p>
                                      <a href="#" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="row">
                            <div class="col-12 col-md-6 col-xl-3 mb-4">
                                <div class="card mr-3">
                                    <img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/bootstrap-themes-summer-sale.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">35% discount for premium Bootstrap Themes, Templates, UI Kits</h5>
                                      <p class="card-text">We’re getting nearer to the end of summer and because we know that this period can make a serious dent in your pocket..</p>
                                      <a href="#" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-xl-3 mb-4">
                                <div class="card mr-3">
                                    <img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/gpt-3-tailwind-css-code-generator.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">We built an OpenAI powered Tailwind CSS code generator using GPT-3</h5>
                                      <p class="card-text">A couple of days ago we got access to the OpenAI’s Beta API platform and I had the occasion to play around with it...</p>
                                      <a href="#" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-xl-3 mb-4">
                                <div class="card mr-3">
                                    <img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/bootstrap-5-tutorial/bootstrap-5-tutorial.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">Bootstrap 5 tutorial: learn how to get started without jQuery</h5>
                                      <p class="card-text">We’re getting nearer to the end of summer and because we know that this period can make a serious dent in your pocket..</p>
                                      <a href="#" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-xl-3 mb-4">
                                <div class="card mr-3">
                                    <img src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/angular-10/angular-10-officially-released-dropping-ie-9-10.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">Angular 10 officially released deprecating support for IE 9 and 10</h5>
                                      <p class="card-text">If you’ve been using Angular for your web projects I’m glad to let you know that following this major update to version...</p>
                                      <a href="#" class="btn btn-primary">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  <!-- </div> -->
</template>

<style scoped>

</style>
