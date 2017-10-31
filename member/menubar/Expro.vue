<template>
    <div>
        <Tabs>
            <Tab-pane label="微头条">
                <div class="ivu-expro">
                    <Form ref="formExpro" :model="formExpro" :rules="ruleExpro">
                        <Form-item prop="expro">
                            <Input v-model="formExpro.expro" type="textarea" :rows="4" placeholder="请输入...">
                            </Input>
                        </Form-item>
                        <div class="ivu-expro-addon">
                            <Tooltip content="内测开放权限" placement="right-start">
                                <Button type="dashed" class="ivu-btn-left" disabled>
                                    <Icon type="image"></Icon>
                                    图片
                                </Button>
                            </Tooltip>
                            </Button>
                            <Button :disabled="disBtn" type="error" class="ivu-btn-right" @click="pushExpro('formExpro')">添加</Button>
                            <div class="clearfix"></div>
                        </div>
                    </Form>
                </div>
                <section class="offset-top-30">
                    <article class="ivu-faq-list" v-for="expro in exproes">
                        <p class="ivu-faq-desc" v-text="expro.content"></p>
                        <div class="ivu-faq-sns">
                            <span v-text="expro.time"></span>
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
                </section>
            </Tab-pane>
        </Tabs>
    </div>
</template>
<script>
    export default {
        data(){
            const validateExpro = (rule, value, callback) => {
                if (value === '') {
                    this.$Message.error('请填写内容...!');
                } else {
                    if (value.length <= 2) {
                        // 对第二个密码框单独验证
                        this.$Message.error('分享的内容太少...!');
                    }
                    callback();
                }
            };
            return {
                formExpro: {
                    expro: ''
                },
                disBtn: false,
                exproes: [
                    {
                        time: "2017/8/16 下午11:05:51",
                        content: "人生不给力,来点正能量!搭建自己的气质能量墙,唤醒潜在的正能量,为你的能量导航,积攒不同的今天,兑换不一样的明天,敞开心扉,迎接正能量!",
                    }
                ],
                ruleExpro: {
                    expro: [
                        {validator: validateExpro, trigger: 'blur'}
                    ]
                }
            }
        },
        mounted: function () {
        },
        methods: {
            pushExpro(name){
                var _this = this;
                this.disBtn = true;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        var _time = new Date().toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
                        this.exproes.unshift({
                            time: _time,
                            content: _this.formExpro.expro
                        });
                        _this.formExpro.expro = '';
                        this.$Notice.success({
                            title: '成功添加一条',
                        });
                        this.disBtn = false;
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })

            }
        }
    }
</script>