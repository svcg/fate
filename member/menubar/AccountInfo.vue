<template>
    <div>
        <Tabs value="info">
            <Tab-pane label="帐号信息" name="info">
                <section class="offset-top-20">
                    <Form :model="formItem" :label-width="120" class="ivu-font-14">
                        <Form-item label="头条号名称">
                            青柠子矜
                        </Form-item>
                        <Form-item label="头条号介绍">
                            爱情将两个人由陌生变成熟悉，又由熟悉变成陌生。
                        </Form-item>
                        <Form-item label="头条号头像">
                            <div class="ivu-avatar">
                                <img class="img-rounded" src="http://p3.pstatp.com/large/bc30010b6d9a8bbbb5e" alt="">
                                <div class="ivu-avatar-upload">
                                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                                        <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
                                    </Upload>
                                    <div class="ivu-avatar-desc">
                                        要求清晰、健康、代表品牌形象<br />
                                        请勿使用二维码，最大5M
                                    </div>
                                </div>
                            </div>
                        </Form-item>
                        <Form-item label="作者二维码">
                            <div class="ivu-qrcode">
                                <img class="img-rounded img-border" src="http://mp.toutiao.com/media_qrcode/50730751033/" alt="">
                                <div class="ivu-qrcode-btn">
                                    <Button type="ghost" icon="ios-cloud-download-outline">下载更多尺寸</Button>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="ivu-qrocde-down">
                                点击图片即下载，尺寸290x290px
                            </div>
                        </Form-item>
                        <Form-item label="头条号ID">
                            50730751033
                        </Form-item>
                        <Form-item label="联系人">
                            刘* (4451*****0616)
                        </Form-item>
                        <Form-item label="绑定手机">
                            151****2068
                        </Form-item>
                        <Form-item label="联系电话">
                            151****2068
                        </Form-item>
                        <Form-item label="领域">
                            151****2068
                        </Form-item>
                        <Form-item label="所在地">
                            151****2068
                        </Form-item>
                        <Form-item label="联系邮箱">
                            151****2068
                        </Form-item>
                        <Form-item>
                            <Button type="error" size="large">提交</Button>
                        </Form-item>
                    </Form>
                </section>
            </Tab-pane>
            <Tab-pane label="帐号设置" name="setting">
                <section class="offset-top-20">
                    <Form :model="formItem" :label-width="120">
                        <Form-item label="绑定手机">
                            <span class="font-18 text-light-green">已绑定</span>
                            <a href="">如何更换绑定手机号？</a>
                        </Form-item>
                        <Form-item label="图片水印">
                            <i-switch v-model="formItem.switch" size="large" @on-change="change">
                                <span slot="open">开启</span>
                                <span slot="close">关闭</span>
                            </i-switch>
                            <div class="offset-top-20">
                                <div class="ivu-water">
                                    <img class="ivu-water-img" src="images/sunset.jpg" alt="">
                                    <div class="ivu-water-addon" v-if="water">
                                        <img class="ivu-water-logo" src="images/white_logo.png" alt="">
                                        <span class="ivu-water-font">刘刘刘刘刘</span>
                                    </div>
                                </div>
                            </div>
                        </Form-item>
                        <Form-item>
                            <Button type="primary">提交</Button>
                            <Button type="ghost" style="margin-left: 8px">取消</Button>
                        </Form-item>
                    </Form>
                </section>
            </Tab-pane>
        </Tabs>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                water: true,
            }
        },
        methods: {
            change (status) {
                this.water = status;
            }
        },
        components: {}
    }
</script>
<style >
</style>