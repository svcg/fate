<template>
    <div>
        <Tabs value="name1">
            <Tab-pane label="功能状态" name="name1">
                <section class="offset-top-20">
                    <Table size="large" :columns="features" :data="feata"></Table>
                </section>
            </Tab-pane>
        </Tabs>
        <div class="offset-top-20 font-14">
            充值号外可享上述所有特权 <a href="">查看详情</a>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                features: [
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
                                            type: 'text',
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
                        key: 'condition'
                    },
                    {
                        title: '功能说明',
                        width: 150,
                        key: 'desc'
                    }
                ],
                feata: [
                    {btn: true ,name: "商品",status: "申请",condition: "粉丝数2000以上；头条号指数650以上",desc: '<a href="#">功能介绍</a>'},
                    {btn: true ,name: "粉丝必见",status: "申请",condition: "粉丝数10000以上；头条号指数600以上",desc: '<a href="#">功能介绍</a>'},
                    {btn: true ,name: "热词分析",status: "申请",condition: "粉丝数2000以上；头条号指数600以上；已开通原创权限",desc: '<a href="#">功能介绍</a>'},
                    {btn: true ,name: "评论保护",status: "申请",condition: "粉丝数10000以上；头条号指数700以上",desc:'<a href="#">功能介绍</a>'},
                    {btn: true ,name: "外图封面",status: "申请",condition: "粉丝数2000以上；头条号指数600以上	",desc: '<a href="#">功能介绍</a>'}
                ]
            }
        },
        components: {}
    }
</script>