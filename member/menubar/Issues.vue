<template>
    <div>
        <Tabs>
            <Tab-pane label="常见问题">
                <section class="offset-top-10">
                    <div>
                        <img src="images/pixabay.png" alt="">
                    </div>
                    <ul>
                        <li>
                            <p>Pixabay是一个充满活力的创意社区，分享免费的图片和视频。</p>
                        </li>
                        <li>
                            <p>所有的内容都是在
                                <Tooltip style="white-space: normal" content="可用于商业性目的，无需要求同意" placement="top">
                                    <a target="_blank" href="https://creativecommons.org/publicdomain/zero/1.0/deed.zh">Creative Commons CC0</a>
                                </Tooltip>
                                下发布的。</p>
                        </li>
                        <li>
                            <p>共有约 1080000 张免费的照片、矢量文件和艺术插图！</p>
                        </li>
                        <li>
                            <p>免费、可商用！</p>
                        </li>
                    </ul>
                    <Tooltip class="offset-top-20" style="white-space: normal" content="前往 Pixabay 图库" placement="top">
                        <a target="_blank" href="https://pixabay.com/">
                            <img src="images/leaderboard_a.png" alt="Pixabay">
                        </a>
                    </Tooltip>

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