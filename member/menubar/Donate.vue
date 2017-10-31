<template>
    <div>
        <div class="">
            <Carousel autoplay :autoplay-speed="5000">
                <Carousel-item v-for="donate in donates" :key="donate.id">
                    <a class="img-block">
                        <img :src="donate.thumb" alt="">
                    </a>
                </Carousel-item>
            </Carousel>
        </div>
        <Tabs class="offset-top-30">
            <Tab-pane label="公益" icon="heart">
                <section class="offset-top-10">
                    1
                </section>
            </Tab-pane>
            <Tab-pane label="乐捐" icon="donate">
                <section class="offset-top-10">
                    <Row :gutter="24">
                        <Col span="6" v-for="i in 5" :key="i">
                        <Card class="ivu-donate-qr">
                            <p slot="title">
                                <Icon type="ios-film-outline"></Icon>
                                缘分小队
                            </p>
                            <a href="#" slot="extra">
                                <Icon type="ios-loop-strong"></Icon>
                                换一换
                            </a>
                            <div class="img-block">
                                <img src="images/qrcode_for_gh_cfede58a217e.jpg" alt="">
                            </div>
                        </Card>
                        </Col>
                    </Row>
                </section>
            </Tab-pane>
            <Tab-pane label="公益课堂" icon="event">
                <section class="offset-top-10">
                    <article class="ivu-donate-news" v-for="i in 2">
                        <div class="ivu-dn-thumb">
                            <a href="" class="img-block">
                                <img src="/images/donate_four.jpg" alt="">
                            </a>
                        </div>
                        <div class="ivu-dn-body">
                            <h2 class="ivu-dn-title">
                                <a href="">生活很残酷，但希望还在！</a>
                            </h2>
                            <p class="ivu-dn-content">
                                生活很残酷，但希望还在！ 生活很残酷，但希望还在！ 生活很残酷，但希望还在！ 生活很残酷，但希望还在！ 生活很残酷，但希望还在！
                                生活很残酷，但希望还在！ 生活很残酷，但希望还在！ 生活很残酷，但希望还在！ 生活很残酷，但希望还在！ 生活很残酷，但希望还在！
                                <a href="">&gt;&gt;&gt; 阅读全文</a>
                            </p>
                        </div>
                    </article>
                    <div class="offset-top-60 text-right">
                        <Page :total="100" show-elevator></Page>
                    </div>
                </section>
            </Tab-pane>
        </Tabs>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                value6: '',
                donates: [
                    {thumb : "images/donate_one.jpg"},
                    {thumb : "images/donate_two.jpg"},
                    {thumb : "images/donate_three.jpg"},
                    {thumb : "images/donate_four.jpg"},
                ],
            }
        },
        components: {},
        mounted:function () {
            document.body.scrollTop = 0;
        }
    }
</script>