<template>
    <div>
        <Tabs>
            <Tab-pane label="全部">
                <section>
                    <div class="ivu-add-rule">
                        <div class="">
                            <Button type="dashed" icon="plus-round" @click="addCsrule">添加规则</Button>
                            <a href="" class="ivu-text-right">
                                如何设置关键词回复？
                            </a>
                        </div>
                    </div>
                    <div class="ivu-add-rule" v-for="(csrule,index) in csrules">
                        <div class="">
                            <span class="ivu-rule-title">
                                规则1： 我是个好人
                            </span>
                            <Button @click="showCsrule(index)" type="text" class="ivu-btn-right" icon="navicon-round">
                                展开
                            </Button>
                        </div>
                        <div class="ivu-rule-key">
                            关键词：
                            <Tag type="border" >标签二</Tag>
                            <Tag type="border" >标签二</Tag>
                        </div>
                        <div class="ivu-rule-answer">
                            回　复：1条
                        </div>
                    </div>

                </section>
            </Tab-pane>
            <Tab-pane label="关键字自动回复">
                <section class="offset-top-10">
                    关键字自动回复
                </section>
            </Tab-pane>
        </Tabs>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                csrules: [
                    {id: 1},
                    {id: 21},
                    {id: 3},
                    {id: 41},
                ]
            }
        },
        methods: {
            addCsrule(){

            },
            showCsrule(index){
                alert(index);
            }
        },
        components: {}
    }
</script>