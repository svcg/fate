<template>
    <div class="layout">
        <Navs></Navs>
        <div class="layout-content">
            <Row>
                <i-col span="5">
                    <keep-alive>
                        <MenuBar></MenuBar>
                    </keep-alive>
                </i-col>
                <i-col span="19">
                    <div class="wrapper-content ivu-article">
                        <router-view></router-view>
                    </div>
                </i-col>
            </Row>
        </div>
        <Foot></Foot>
    </div>
</template>
<script>
    import Navs from './templates/Nav.vue'
    import MenuBar from './templates/MenuBar.vue'
    import Foot from './templates/Foot.vue'
    export default {
        mounted() {
            this.$Loading.start();
            setTimeout(() => {
                this.$Loading.destroy();
            }, 2000);
        },
        components: {
            Navs,
            MenuBar,
            Foot
        },
        mounted (){

        },
    }
</script>
