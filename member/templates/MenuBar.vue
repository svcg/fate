<template>
    <Menu ref="leftMenu" @on-select="handleSelect"
          class="ivu-menu-bar"
          :active-name="active"
          width="auto" :open-names="open">
        <Menu-item name="/">
            <Icon type="ios-home"></Icon>
            <span @dblclick="donate = true">主页</span>
        </Menu-item>
        <Submenu name="2">
            <template slot="title" disabled>
                <Icon type="cube"></Icon>
                管理
            </template>
            <Menu-item name="/articles">内容管理</Menu-item>
            <Menu-item name="/comment">评论管理</Menu-item>
            <Menu-item name="/resource-manager">素材管理</Menu-item>
            <Menu-item name="/expro">微头条</Menu-item>
            <Menu-item name="/private-letter">私信</Menu-item>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="podium"></Icon>
                数据统计
            </template>
            <Menu-item name="/content-analysis">内容分析</Menu-item>
            <Menu-item name="/audience-analysis">粉丝分析</Menu-item>
            <Menu-item name="/recommend-factor">公众号指数</Menu-item>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="speakerphone"></Icon>
                推广
            </template>
            <Menu-item name="4-1" disbaled>号外</Menu-item>
        </Submenu>
        <Submenu name="5">
            <template slot="title">
                <Icon type="ios-flask"></Icon>
                实验室
            </template>
            <Menu-item name="/fnmanage">功能管理</Menu-item>
            <Menu-item name="/wenda">一问一分</Menu-item>
            <Menu-item name="/pixabay">Pixabay 图库</Menu-item>
        </Submenu>
        <Submenu name="6">
            <template slot="title">
                <Icon type="folder"></Icon>
                内容源管理
            </template>
            <Menu-item name="6-1">微博内容源</Menu-item>
        </Submenu>
        <Submenu name="7">
            <template slot="title">
                <Icon type="ios-gear"></Icon>
                设置
            </template>
            <Menu-item name="/account-status">
                帐号状态
            </Menu-item>
            <Menu-item name="/account-info">
                帐号设置
            </Menu-item>
            <Menu-item name="/custom-menu">自定义菜单</Menu-item>
        </Submenu>
        <Modal
                title="支持 缘分平台 的公益"
                v-model="donate"
                :loading="loading"
                @on-ok="asyncDonate"
                class-name="vertical-center-modal">
            <p>
                iView 是采用 MIT 许可的开源项目，您可以在个人或企业项目中免费使用。不过，如果您觉得 iView 对您的项目带来了帮助，提高开发效率，可以用捐助来表示您的谢意：)
                您可以用公司的名义进行赞助，赞助信息将在文档页展示。联系邮箱 admin@aresn.com
                个人可使用 微信 或 支付宝 捐助：
            </p>
            <Row :gutter="24">
                <Col span="12" style="border-right: 1px solid #ccc;">
                <div class="img-block">
                    <img src="images/qrcode/qrcode_for_gh_cfede58a217e.jpg" alt="">
                </div>
                <div class="text-center">
                    <Button type="success" shape="circle" size="small">
                        <i class="fa fa-wechat"></i> 微信赞助
                    </Button>
                </div>
                </Col>
                <Col span="12">
                <div class="img-block">
                    <img src="images/qrcode/qrcode_for_gh_cfede58a217e.jpg" alt="">
                </div>
                <div class="text-center">
                    <Button type="info" shape="circle" size="small">
                        支付宝赞助
                    </Button>
                </div>
                </Col>
            </Row>
        </Modal>
    </Menu>
</template>
<script>
    export default {
        data(){
            return {
                open: [],
                donate: false,
                active: sessionStorage.activeName,
                loading: true
            }
        },
        methods: {
            handleSelect(name) {
                this.active = name;
                sessionStorage.activeName = name;
                this.activeName = sessionStorage.activeName;
                this.$router.push(name);
                document.body.scrollTop = 0;
            },
            asyncDonate(){
                setTimeout(() => {
                    this.donate = false;
                }, 2000);
            }
        },
        mounted: function () {
            this.open = ['7', '1', '2', '3', '4', '5', '6'];
            sessionStorage.activeName = "/";
            this.activeName = sessionStorage.activeName;
            this.$nextTick(function () {
                this.$refs.leftMenu.updateOpened();
                this.$refs.leftMenu.updateActiveName();
            });
        }
    }
</script>