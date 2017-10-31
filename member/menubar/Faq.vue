<template>
    <div>
        <div class="">
            <Carousel autoplay :autoplay-speed="5000">
                <Carousel-item v-for="carousel in carousels" :key="carousel.id">
                    <a class="img-block">
                        <img :src="carousel.thumb" alt="">
                    </a>
                </Carousel-item>
            </Carousel>
        </div>
        <Tabs value="all" class="offset-top-30">
            <Tab-pane label="常见问题" name="all">
                <section>
                    <Row :gutter="24">
                        <Col span="12" v-for="i in 5" :key="i">
                        <article class="ivu-faq-list">
                            <h4 class="ivu-faq-title">Vue.js 如何添加全局函数或变量? </h4>
                            <p class="ivu-faq-desc">
                                2016年12月17日 - Vue.js 如何添加全局函数或变量? 使用了 vue-loader 构建一个大一点的应用, 但是这里好像没有后端常见的中间件或自定义基础类库.
                                有许多组件都涉及到...
                                <a href="">阅读更多</a>
                            </p>
                            <div class="ivu-faq-sns">
                                <a href="">
                                    <i class="fa fa-thumbs-up" aria-hidden="true"></i> 23
                                </a>
                                <a href="">
                                    <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i class="fa fa-comment" aria-hidden="true"></i> 13 条评论
                                </a>
                                <a href="">
                                    <i class="fa fa-send" aria-hidden="true"></i> 分享
                                </a>
                                <a href="">
                                    <i class="fa fa-star" aria-hidden="true"></i> 收藏
                                </a>
                                <a href="">
                                    <i class="fa fa-heart" aria-hidden="true"></i> 感谢
                                </a>
                                <a href="">
                                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                </a>
                                <div class="clearfix"></div>
                            </div>
                        </article>
                        </Col>
                        <div class="clearfix"></div>
                    </Row>
                </section>
            </Tab-pane>
            <Tab-pane label="我的问题" name="ask">
                <section>
                    <Row :gutter="24">
                        <Col span="12" v-for="i in 3" :key="i">
                        <article class="ivu-faq-list">
                            <h4 class="ivu-faq-title">Vue.js 如何添加全局函数或变量? </h4>
                            <p class="ivu-faq-desc">
                                2016年12月17日 - Vue.js 如何添加全局函数或变量? 使用了 vue-loader 构建一个大一点的应用, 但是这里好像没有后端常见的中间件或自定义基础类库.
                                有许多组件都涉及到...
                                <a href="">阅读更多</a>
                            </p>
                            <div class="ivu-faq-sns">
                                <a href="">
                                    <i class="fa fa-thumbs-up" aria-hidden="true"></i> 23
                                </a>
                                <a href="">
                                    <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i class="fa fa-comment" aria-hidden="true"></i> 13 条评论
                                </a>
                                <a href="">
                                    <i class="fa fa-send" aria-hidden="true"></i> 分享
                                </a>
                                <a href="">
                                    <i class="fa fa-star" aria-hidden="true"></i> 收藏
                                </a>
                                <a href="">
                                    <i class="fa fa-heart" aria-hidden="true"></i> 感谢
                                </a>
                                <a href="">
                                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                </a>
                                <div class="clearfix"></div>
                            </div>
                        </article>
                        </Col>
                        <div class="clearfix"></div>
                    </Row>
                </section>
            </Tab-pane>
            <Tab-pane label="我的回答" name="answer">
                <section>
                    <Row :gutter="24">
                        <Col span="12" v-for="i in 4" :key="i">
                        <article class="ivu-faq-list">
                            <h4 class="ivu-faq-title">Vue.js 如何添加全局函数或变量? </h4>
                            <p class="ivu-faq-desc">
                                2016年12月17日 - Vue.js 如何添加全局函数或变量? 使用了 vue-loader 构建一个大一点的应用, 但是这里好像没有后端常见的中间件或自定义基础类库.
                                有许多组件都涉及到...
                                <a href="">阅读更多</a>
                            </p>
                            <div class="ivu-faq-sns">
                                <a href="">
                                    <i class="fa fa-thumbs-up" aria-hidden="true"></i> 23
                                </a>
                                <a href="">
                                    <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i class="fa fa-comment" aria-hidden="true"></i> 13 条评论
                                </a>
                                <a href="">
                                    <i class="fa fa-send" aria-hidden="true"></i> 分享
                                </a>
                                <a href="">
                                    <i class="fa fa-star" aria-hidden="true"></i> 收藏
                                </a>
                                <a href="">
                                    <i class="fa fa-heart" aria-hidden="true"></i> 感谢
                                </a>
                                <a href="">
                                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                </a>
                                <div class="clearfix"></div>
                            </div>
                        </article>
                        </Col>
                        <div class="clearfix"></div>
                    </Row>
                </section>
            </Tab-pane>
        </Tabs>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                carousels: [
                    {thumb : "images/banner_one.jpg"},
                    {thumb : "images/banner_two.jpg"},
                    {thumb : "images/banner_three.jpg"},
                ],
            }
        },
        components: {},
        mounted:function () {
            document.body.scrollTop = 0;
        }
    }
</script>