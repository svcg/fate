<template>
    <div>
        <Tabs value="yiwenyifen">
            <Tab-pane label="一问一分" name="yiwenyifen">
                <div class="img-block">
                    <img src="images/yiwenyifen.jpg" alt="">
                </div>
            </Tab-pane>
        </Tabs>
        <section class="section-20">
            <Tabs value="question">
                <Tab-pane label="问题" name="question">
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
                <Tab-pane label="分享" name="share">
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
            </Tabs>
        </section>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        components: {}
    }
</script>