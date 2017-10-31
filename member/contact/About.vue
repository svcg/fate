<template>
    <Tabs value="team">
        <Tab-pane name="about" label="关于缘分">
            <div>
                <p> “今日头条”于2012年8月上线，是一款基于数据挖掘技术的个性化推荐引擎产品，它为用户推荐有价值的、个性化的信息，提供连接人与信息的新型服务，是国内移动互联网领域成长最快的产品之一。</p>
                <p>
                    相比于传统的新闻客户端，"今日头条"更适合被称为兴趣媒体，因其有着一项强大的技术武器——推荐引擎。在信息爆炸的时代，人们面对的选择越来越多，选择过多，信息超载，也常常会使人无所适从。在这种情况下，推荐引擎便开始展现技术优势，发挥威力。“今日头条”就是一款基于数据挖掘的推荐引擎产品，也是国内唯一使用推荐引擎做出独立产品的公司。它没有采编人员，不生产内容，没有立场和价值观，运转核心是一套由代码搭建而成的算法。“今日头条”搭建的算法模型会记录用户在今日头条上的每一次行为，基于此计算出用户的喜好，推送他最有可能感兴趣的内容。</p>
                <p>
                    “今日头条”推出了开放的内容创作与分发平台--“头条号”，是针对媒体、国家机构、企业以及自媒体推出的专业信息发布平台，致力于帮助内容生产者在移动互联网上高效率地获得更多的曝光和关注。截至2017年4月，“头条号”平台的账号数量已超过60万个。</p>
                <p>2012年，今日头条从边缘切入，经过5年地快速发展如今已经跻身新闻资讯客户端第一阵营。“今日头条”会继续努力，成为最懂你的信息平台，连接人与信息，促进创作和交流。</p>
                <p>请下载我们的主打应用 <a href="http://app.toutiao.com/news_article/" target="_blank"
                                 style="color:#0000FF; text-decoration:underline; padding:0 5px 2px">今日头条（iPhone、Android版）</a>到你的手机上，不再错过任何你感兴趣的事！
                </p>
                <p>你关心的，才是头条！</p>
            </div>
        </Tab-pane>
        <Tab-pane name="team" label="缘分教练">
            <Row :gutter="12">
                <Col span="8" v-for="i in 3 " :key="i">
                <div class="ivu-thumbnail">
                    <img src="images/tanglishi.png" alt="" >
                    <h4 class="ivu-appell">
                        <span>唐律师</span>
                    </h4>
                    <div class="ivu-quali">
                        <ul class="ivu-qualist">
                            <li>
                                广东正平天成律师事务所合伙人律师
                            </li>
                            <li>
                                广州市律师协会互联网及高新技术法律业务专业委员会委员
                            </li>
                            <li>
                                新三板挂牌签字律师
                            </li>
                            <li>
                                缘分系统终身推动者
                            </li>
                            <li>
                                多家企业法律顾问和股权激励顾问
                            </li>
                        </ul>
                    </div>
                </div>
                </Col>
            </Row>
        </Tab-pane>
    </Tabs>
</template>
<script>
    export default {
        data(){
            return {}
        },
        components: {},
        mounted:function () {
            document.body.scrollTop = 0;
        }
    }
</script>