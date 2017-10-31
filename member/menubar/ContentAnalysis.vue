<template>
    <div>
        <Tabs>
            <Tab-pane label="概况">
                <section class="offset-top-10">
                    概况
                    文章分析
                    视频分析
                </section>
            </Tab-pane>
            <Tab-pane label="文章分析">
                <section class="offset-top-10">
                    文章评论
                </section>
            </Tab-pane>
            <Tab-pane label="视频分析" disabled>
                <section class="offset-top-10">
                    文章评论
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