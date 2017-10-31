<template>
    <div>
        <Tabs>
            <Tab-pane label="图片管理" disabled></Tab-pane>
        </Tabs>
        <Tabs size="small">
            <Tab-pane label="全部">
                <Row class="offset-top-10" :gutter="24">
                    <Col span="6">
                        <Card :padding="0">
                            <div class="ivu-card-img">
                                <img v-img:all src="images/sunset.jpg">
                            </div>
                            <Row class="ivu-card-footer">
                                <Col span="12" offset="6">
                                    <div class="ivu-card-icon">
                                        <Tooltip trigger="hover" content="收藏" placement="top">
                                            <span @click.stop.prevent="addColorCls()" >
                                                <Icon type="star" :class="colorCls"></Icon>
                                            </span>
                                        </Tooltip>
                                        <Poptip title="删除文件？"
                                                placement="bottom"
                                                confirm
                                                @on-ok="ok"
                                                @on-cancel="cancel">
                                            <Tooltip trigger="hover" content="删除" placement="top">
                                                <Icon type="trash-a"></Icon>
                                            </Tooltip>
                                        </Poptip>
                                    </div>
                                </Col>
                                <div class="clearfix"></div>
                            </Row>
                        </Card>
                    </Col>
                    <Col span="6">
                        <Card :padding="0">
                            <div class="ivu-card-img">
                                <img v-img:all src="images/banner_one.jpg">
                            </div>
                            <Row class="ivu-card-footer">
                                <Col span="12" offset="6">
                                <div class="ivu-card-icon">
                                    <Tooltip trigger="hover" content="收藏" placement="top">
                                        <Icon type="star"></Icon>
                                    </Tooltip>
                                    <Tooltip trigger="hover" content="删除" placement="top">
                                        <Icon type="trash-a"></Icon>
                                    </Tooltip>
                                </div>
                                </Col>
                                <div class="clearfix"></div>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Page :total="100" show-elevator class="ivu-pagination"></Page>
            </Tab-pane>
            <Tab-pane label="收藏">
                <Row class="offset-top-10" :gutter="24">
                    <Col span="6">
                    <Card :padding="0">
                        <div class="ivu-card-img">
                            <img v-img:favorite src="images/sunset.jpg">
                        </div>
                        <Row class="ivu-card-footer">
                            <Col span="12" offset="6">
                            <div class="ivu-card-icon">
                                <Tooltip trigger="hover" content="收藏" placement="top">
                                    <Icon type="android-star-outline"></Icon>
                                </Tooltip>
                                <Tooltip trigger="hover" content="删除" placement="top">
                                    <Icon type="trash-a"></Icon>
                                </Tooltip>
                            </div>
                            </Col>
                            <div class="clearfix"></div>
                        </Row>
                    </Card>
                    </Col>
                </Row>
                <Page :total="100" show-elevator class="ivu-pagination"></Page>
            </Tab-pane>
            <div slot="extra" class="text-muted">
                 已上传 <span class="text-red font-16">2</span> 张图片
                <Upload class="ivu-upbtn"
                        multiple
                        action="//jsonplaceholder.typicode.com/posts/">
                    <Button type="error" icon="ios-cloud-upload-outline" size="small">
                        上传图片
                    </Button>
                </Upload>
            </div>
        </Tabs>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                value6: '',
                colorCls: '',
            }
        },
        components: {},
        methods: {
            addColorCls(){
                if(this.colorCls == 'text-yellow'){
                    this.colorCls = '';
                }else{
                    this.colorCls = 'text-yellow';
                }
            },
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>
<style>
    .fullscreen-v-img{
        z-index: 9999;
    }
    .ivu-poptip-popper{
        z-index: 9999;
    }
</style>