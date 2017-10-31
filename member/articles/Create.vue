<template>
    <Tabs>
        <Tab-pane label="创建文章">
            <div class="ivu-textarea"><Row>
                <Col span="16">
                    <Form :model="formArt" label-position="top">
                        <Form-item>
                            <Input v-model="formArt.title">
                            </Input>
                        </Form-item>
                        <Form-item>
                            <textarea name="" id="editor" cols="30" rows="10"></textarea>
                        </Form-item>
                        <Form-item>
                            <Input v-model="formArt.thumb">
                            </Input>
                        </Form-item>
                        <Form-item label="图片">
                            <Radio-group v-model="formArt.thumb">
                                <Radio label="male">单图</Radio>
                                <Radio label="female">自动</Radio>
                            </Radio-group>
                        </Form-item>
                    </Form>
                </Col>
                <Col span="8">
                </Col>
                <div class="clearfix"></div>
            </Row>
            </div>
        </Tab-pane>
    </Tabs>
</template>
<script>
    import Simditor from 'simditor'
    export default {
        props: ['value'],
        data(){
            return {
                editor: '',
                formArt: {
                    title: '',
                    content: '',
                    thumb: '',
                },
                toolbar : [ 'title', 'color', 'image','ol','blockquote', 'link',  'hr'],
            }
        },
        methods: {
            createEditor(){
                var _this = this;
                this.editor = new Simditor({
                    textarea: document.querySelector("#editor"),
                    toolbar: _this.toolbar,
                });
                this.editor.on("valuechanged", function(e, src) {
                    _this.content = _this.editor.getValue();
                })
            },
        },
        mounted:function () {
            document.body.scrollTop = 0;
            this.createEditor();
        },
        components:{

        }
    }
</script>
<style lang="scss">

</style>