<template>
    <div>
        <Tabs>
            <Tab-pane label="公告">
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
    </div>
</template>
<script>
    export default {
        data(){
            return {
                value6: '',
            }
        },
        components: {}
    }
</script>