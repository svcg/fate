<template>
    <div>
        <Tabs value="custom-menu">
            <Tab-pane label="自定义菜单" name="custom-menu">
            </Tab-pane>
            <i-switch size="large" @on-change="changeMenu" slot="extra">
                <span slot="open">ON</span>
                <span slot="close">OFF</span>
            </i-switch>
        </Tabs>
        <div slot="open">
            <p class="font-14">支持创建最多3个一级菜单，每个一级菜单下可创建最多5个二级菜单</p>
        </div>
        <div slot="close">
            <p class="font-14">您已关闭自定义菜单功能</p>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
            }
        },
        methods: {
            changeMenu (status) {

            }
        },
        components: {}
    }
</script>