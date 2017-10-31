<template>
    <div>
        <!--<Row class="ivu-announce" v-if="announce">-->
            <!--<Col span="1">-->
            <!--<Icon type="volume-high"></Icon>-->
            <!--</Col>-->
            <!--<Col span="21" class="ivu-anno-title">-->
                <!--<a href="">-->
                    <!--OA办公系统解析：提升执行力，并不只是说说而已-->
                <!--</a>-->
                <!--<span class="ivu-anno-time">-->
                    <!--2017-08-->
                <!--</span>-->
            <!--</Col>-->
            <!--<Col span="2" class="ivu-anno-right">-->
                <!--<a href="/#/announces">更多</a>-->
            <!--</Col>-->
        <!--</Row>-->
        <div class="ivu-bar">
            <Row>
                <Col span="8" class="ivu-bar-item">
                <span class="font-32">
                    <Icon type="person" class="text-yellow"></Icon> 0
                </span>
                <br/>
                粉丝
                </Col>
                <Col span="8" class="ivu-bar-item">
                <span class="font-32">
                    <Icon type="arrow-graph-up-right" class="text-light-green"></Icon> 226
                </span>
                <br/>
                头条号指数
                <Tooltip placement="bottom">
                    <Icon type="help-circled"></Icon>
                    <div slot="content">
                        <p>头条号指数每周更新一次，你可以<br>
                            通过每周指数的动态知道你的头条<br>
                            号在各个分类头条号的相对位置、<br>
                            更加明确的努力方向。一般来讲，<br>
                            号指数越高，相应地，内容推荐量
                        </p>
                    </div>
                </Tooltip>
                </Col>
                <Col span="8" class="ivu-bar-item">
                <span class="font-32">
                    <Icon type="person" class="text-primary"></Icon> 0
                </span>
                <br/>
                累计阅读量
                </Col>
            </Row>
        </div>
        <div class="">
            <Carousel autoplay :autoplay-speed="5000">
                <Carousel-item v-for="carousel in carousels" :key="carousel.id">
                    <a class="img-block">
                        <img :src="carousel.thumb" alt="">
                    </a>
                </Carousel-item>
            </Carousel>
        </div>
        <Tabs class="offset-top-30">
            <Tab-pane label="公告" icon="volume-high">
                <div class="ivu-content">
                    <ul class="ivu-con-ul">
                        <li v-for="i in 12">
                            <a href="">
                                金秒学院系列课程 | 教你从0开始学做爆款短视频
                                <i class="ivu-con-tag" v-if="i < 5">new</i>
                            </a>
                            <span class="ivu-con-time">
                                2017-07-07
                            </span>
                        </li>
                    </ul>
                </div>
                <Page :total="100" show-elevator></Page>
            </Tab-pane>
            <Tab-pane :label="badgeLabel">
                附件
                <Badge dot>
                    <Icon type="ios-bell-outline" size="26"></Icon>
                </Badge>
                <div class="ivu-tabs-tab ivu-tabs-tab-active">

                    <Badge dot>
                        附件
                    </Badge>
                    <i class='ivu-icon ivu-icon-document'></i> 附件 <!---->
                </div>
            </Tab-pane>
            <Tab-pane label="导师" icon="university" disabled>
                标签三的内容
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
                announce: true
            }
        },
        methods: {
            badgeLabel: (h) => {
                return h('div', [
                    h('i', {
                        'class': "ivu-icon ivu-icon-document"
                    }),
                    h('Badge', {
                        props: {
                            count: 0
                        },
                    },'文档')
                ])
            }
        },
        mounted (){
//            setTimeout(() => {
//                this.announce = false;
//            }, 5000);
        },
        components: {},
        head: {
            title: function () {
                return {
                    inner: '首页',
                    separator: ' ',
                    complement: ' '
                }
            },
            meta: function () {
                return [
                    {name: 'description', content: 'A description of the page', id: 'desc'},
                    {name: 'keywords', content: '2222', id: 'keywords'},
                ]
            },
            link: [
                {rel: 'canonical', h: 'http://example.com/#!/contact/', id: 'canonical'}
            ]
        }
    }
</script>
