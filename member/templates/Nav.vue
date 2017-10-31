<template>
    <Affix>
        <Menu mode="horizontal" theme="light" active-name="1">
            <div class="vx-menu__logo">
                <a href="">
                    <img src="images/logo.png" alt="">
                </a>
            </div>
            <div class="layout-nav">
                <Menu-item :name="index" v-for="(menu,index) in menus" :key="index">
                    <Icon :type="menu.icon"></Icon>
                    <router-link :to="menu.link" v-text="menu.title"></router-link>
                </Menu-item>
            </div>
            <div class="layout-user">
                <Dropdown placement="bottom-end">
                    <Button type="ghost" shape="circle" icon="person">
                    </Button>
                     <Icon type="arrow-down-b"></Icon>
                    <Dropdown-menu slot="list">
                        <Dropdown-item>
                            <Icon type="person"></Icon>  <span v-text="user"></span>
                        </Dropdown-item>
                        <Dropdown-item divided class="ivu-user-dropdown">
                            <!--<button :key="list.id" class="ivu-btn ivu-btn-ghost" type="button"-->
                                    <!--v-for="list in menuList"-->
                                    <!--v-text="list.title"-->
                                    <!--@click="list.click"-->
                            <!--&gt;-->
                            <!--</button>-->
                            <Button type="ghost" icon="ios-gear">帐户中心</Button>
                            <Button type="ghost" icon="power" @click="async">退出登陆</Button>
                        </Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </div>
        </Menu>
        <div class="clearfix"></div>
    </Affix>
</template>
<script>
    export default {
        data(){
            return {
                user: "我是好人",
                menus : [
                    {icon: "home", title: "首页" , link : "/"},
                    {icon: "heart", title: "微头条" , link : "/expro"},
                    {icon: "wineglass", title: "有故事" , link : "/"},
                    {icon: "ios-monitor-outline", title: "大事件" , link : "/announces"},
                ],
                menuList: [
                    {icon: "ios-gear", title: "帐户中心" , link : "/",click:""},
                    {icon: "power", title: "退出登陆" , link : "/",click:"async"},
                ]
            }
        },
        props: ['message'],
        methods:{
            async () {
                this.$Modal.confirm({
                    title: '退出本次登陆？',
                    content: '<p>退出将在 2秒 后关闭</p>',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$Modal.remove();
                            this.$Message.info('异步关闭了对话框');
                        }, 2000);
                    }
                });
            },

        }
    }
</script>