<template>
    <div>
        <Tabs>
            <Tab-pane label="内容管理" disabled></Tab-pane>
            <div slot="extra" class="text-muted">
                <Button @click="pushLink('articles/create')"
                        type="success"
                        icon="plus-round"
                        size="small"
                >新建文章</Button>
            </div>
        </Tabs>
        <Tabs size="small">
            <Tab-pane label="全部">
                <section class="offset-top-10">
                    全部
                </section>
            </Tab-pane>
            <Tab-pane label="已发表">
                <section class="offset-top-10">
                    全部
                </section>
            </Tab-pane>
            <Tab-pane label="未通过">
                <section class="offset-top-10">
                    全部
                </section>
            </Tab-pane>
            <Tab-pane label="草稿">
                <section class="offset-top-10">
                    全部
                </section>
            </Tab-pane>
            <Tab-pane label="已撤回">
                <section class="offset-top-10">
                    全部
                </section>
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