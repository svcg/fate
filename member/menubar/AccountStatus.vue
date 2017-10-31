<template>
    <div>
        <Tabs value="name1">
            <Tab-pane label="帐号状态" name="name1">
                <section class="offset-top-20">
                    <Table size="large" :columns="columns" :data="data"></Table>
                </section>
            </Tab-pane>
        </Tabs>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                columns: [
                    {
                        title: '功能',
                        key: 'name',
                        width: 150,
                    },
                    {
                        title: '状态',
                        key: 'status',
                        width: 150,
                        render: (h, params) => {
                            if(params.row.btn){
                                return h('div', [
                                    h('Button', {
                                        props: {
                                            type: 'ghost',
                                            disabled: true
                                        }
                                    }, params.row.status)
                                ]);
                            }else{
                                return params.row.status;
                            }
                        }
                    },
                    {
                        title: '说明',
                        key: 'desc'
                    }
                ],
                data: [
                    {
                        name: '帐号状态',
                        status: "申请转正",
                        btn: true,
                        desc: '符合条件的新手号可以自助转正。<a href="#">了解详情</a>'
                    },
                    {
                        name: '帐号分值',
                        status: "100",
                        btn: false,
                        desc: '违禁行为会触发扣分和惩罚。了解详情'
                    },
                    {
                        name: '发文篇数',
                        status: "1篇/天",
                        btn: false,
                        desc: '帐号发文篇数 1篇/天（通过“发表视频”入口上传的内容不计发文篇数）'
                    },
                    {
                        name: '自营广告',
                        status: "申请",
                        btn: true,
                        desc: '满足条件的个人、群媒体类型新手号可申请自营广告，点击了解详情'
                    },
                    {
                        name: '原创标签',
                        status: "申请",
                        btn: true,
                        desc: '新手版头条号没有原创标签功能。'
                    },
                    {
                        name: '千人万元<br>原创倍增',
                        status: "申请",
                        btn: true,
                        desc: '新手版头条号没有千人万元／原创倍增功能。'
                    },
                ]
            }
        },
        components: {}
    }
</script>