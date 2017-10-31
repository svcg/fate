<template>
    <footer>
        <div class="ivu-copy">
                <router-link
                   :key="index"
                   v-for="(copyinfo,index) in copyinfos"
                   v-text="copyinfo.title"
                   :to="copyinfo.link"
                ></router-link>
            © 2017 缘分平台.com All Rights Reserved
        </div>
        <Back-top></Back-top>
        <Affix :offset-bottom="360" class="pull-right">
            <div class="ivu-affix-addon">
                <span class="ivu-affix-faq" @click="pushLink('/faq')">
                    常见问题
                </span>
                <span @click="feedback()" >
                    <Tooltip content="意见反馈" placement="left" class="ivu-addon-icon">
                        <Icon  type="ios-help-outline"></Icon>
                    </Tooltip>
                </span>
            </div>
        </Affix>
        <!--意见反馈-->
        <Modal :loading="loading"
                title="意见反馈"
                v-model="modalFeed"
                class-name="vertical-center-modal"
                @on-ok="asyncOK">
            <div>
                <p class="font-14">如果在使用过程中有任何疑问或建议，您可以通过以下方式联系我们：</p>
                <ul class="list-decimal">
                    <li>
                        发送邮件到我们的邮箱：<a href="mailto:kf@yuanfenpingtai.com">kf@yuanfenpingtai.com</a>
                    </li>
                    <li>
                        QQ 客服： 211321136
                    </li>
                    <li>
                        客服热线：020-37038267
                    </li>
                </ul>
            </div>
            <div class="offset-top-10">
                <h4 class="ivu-modal-body-title">直接提交您的建议：</h4>
                <Form ref="formFeed" :model="formFeed" :label-width="80" :rules="ruleFeed">
                    <Form-item label="标题" prop="title">
                        <Input v-model="formFeed.title" placeholder="请输入">
                        </Input>
                    </Form-item>
                    <Form-item label="意见" prop="opinion">
                        <Input v-model="formFeed.opinion" type="textarea"
                               :autosize="{minRows: 5,maxRows: 12}" placeholder="请输入...">
                        </Input>
                    </Form-item>
                </Form>
            </div>
        </Modal>
    </footer>
</template>
<script>
    export default{
        data(){
            return{
                copyinfos: [
                    {title: "关于缘分" ,link : "/about"},
                    {title: "用户协议" ,link : "/agreement"},
                    {title: "运营规范" ,link : "/opsspecs"},
                    {title: "侵权投诉" ,link : "/infringement"},
                    {title: "联系我们" ,link : "/contact"},
                    {title: "公益支持" ,link : "/donate"},
                ],
                modalFeed: false,
                loading: true,
                formFeed: {
                    title: '',
                    opinion: ''
                },
                ruleFeed: {
                    title: [
                        { required: true, message: '标题不能为空', trigger: 'blur' }
                    ],
                    opinion: [
                        { required: true, message: '意见不能为空~~~', trigger: 'blur' },
                        { type: 'string', min: 20, message: '意见不能少于20字', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            feedback(){
                this.modalFeed = true;
            },
            asyncOK () {
                setTimeout(() => {
                    this.modalFeed = false;
                }, 2000);
            },
        }
    }
</script>