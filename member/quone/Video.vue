<template>
    <div>
        <Tabs class="offset-top-30">
            <Tab-pane label="公益" icon="heart">
                <section class="offset-top-10">
                    1
                </section>
            </Tab-pane>

        </Tabs>
        <d-player :video="video"
                  :autoplay="autoplay"
                  :contextmenu="contextmenu"
                  :screenshot="screenshot"
                  @play="play"
                  ref="player">
        </d-player>
        <a-player :music="songs" ref="player"></a-player>
    </div>
</template>
<script>
    import VueDPlayer from 'vue-dplayer'
    import VueAplayer from 'vue-aplayer'
    export default {
        data(){
            return {
                songs: [
                    {
                        title: 'Preparation',
                        author: 'Hans Zimmer/Richard Harvey',
                        url: 'http://devtest.qiniudn.com/Preparation.mp3',
                        pic: 'http://devtest.qiniudn.com/Preparation.jpg',
                        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
                    }
                ],
                video: {
                    url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
                    pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
                },
                videoUrl: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4',
                autoplay: false,
                screenshot: false,
                player: null,
                contextmenu: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/MoePlayer/vue-dplayer'
                    }
                ]
            }
        },
        components: {
            'd-player': VueDPlayer,
            'a-player': VueAplayer
        },
        mounted:function () {
            document.body.scrollTop = 0;
            this.player = this.$refs.player.dp
            let aplayer = this.$refs.player.control
            //aplayer.play()
        },
        computed: {

        },
        methods: {
            play() {
                console.log('play callback')
            },
            switchHandle() {
                this.player.switchVideo({
                    url: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4'
                })
            }
        }
    }
</script>
<style>
    body {
        margin: 0;
        padding: 0;
        text-align: center;
    }
    a {
        color: #42b983;
        text-decoration: none;
    }
    .dplayer {
        width: 800px;
        margin: 50px auto;
    }
    h1 {
        font-size: 54px;
        color: #42b983;
        margin: 30px 0 10px;
    }
    h2 {
        font-size: 22px;
        color: #555;
    }
    @media (max-width: 768px) {
        .dplayer {
            width: 90%;
        }
        h1 {
            font-size: 30px;
        }
        h2 {
            font-size: 16px;
        }
    }
</style>