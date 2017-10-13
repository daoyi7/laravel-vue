<template>
<div class="edit">
    <form class="edit-form" method="post">
        <div class="edit-item thumbs">
            <Upload multiple type="drag" :format="['jpg','jpeg','png']" action="/api/blog" v-model="upBlog.thumb" name="">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>点击或将文件拖拽到这里上传</p>
                </div>
            </Upload>
        </div>
        <div class="edit-item title">
            <input class="title" type="text" v-model="upBlog.title" value="" placeholder="Blog Title *">
        </div>
        <div class="edit-item intro">
            <textarea class="intro1" v-model="upBlog.intro" value="" placeholder="description"></textarea>
        </div>
        <div class="edit-item content">
            <textarea class="content" v-model="upBlog.content" value="" placeholder="Content"></textarea>
        </div>
        <div class="edit-item more">
            <div class="more-item is_hide">
                <i-switch v-model="upBlog.is_hide" @on-change="change"></i-switch>
            </div>
            <div class="more-item published_at">
                <DatePicker type="datetime" placeholder="选择日期和时间" style="width: 200px"></DatePicker>
            </div>
            <div class="more-item submit">
                <button type="button" name="submit" @click="submit($event)">Submit</button>
            </div>
        </div>
    </form>
</div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                upBlog: {
                    title: '',
                    desc: '',
                    content: '',
                    like_counts: '0',
                    view_counts: '0',
                    is_hide: false,
                    published_at: '',
                    thumbs: '',
                }
            }
        },
        methods: {
            change(status) {
                this.$Message.info('开关状态：' + status + ', 文章隐藏')
            },
            submit: function(event) {
                event.preventDefault()
                let formData = JSON.stringify(this.upBlog)

                let config = {
                    headers: {
                        'Content-Type': 'multipar/form-data'
                    }
                }

                this.$http.post('/api/blog', formData, config)
                    .then((res) => {
                        /**写你的操作函数**/
                    })
                    .catch((error) => {
                        throw new Error(error.response.data.error)
                    })
            },
        }
    }
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>
    @import '~iview/src/styles/index'

    @font-size-small: 10px

    .edit
        float: left
        width: 66.4em
        margin: 0 0 0 13em
        position: relative
        // overflow: hidden
        background: rgba(236, 238, 239, 0.7)
        .edit-form
            padding: 1em 1.5em 2.5em 1.5em
            .edit-item
                margin-bottom: 1.5em
                input.title
                    padding: .5em 0
                    width: 100%
                    height: 1.5em
                    border: none
                    margin: 0 1em 0 0
                    vertical-align: top
                    background: #d6d6d7
                    font-weight: 200
                    text-indent: .4em
                    font-size: 1.3em
                    color: #00030d
                    font-family: CenturyGothic, -apple-system, Raleway, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
                    &:hover,&:active,&:focus
                        outline: none
                .thumbs
                    width: 100%
                    height: 15em
                textarea.intro1
                    padding: .5em 0
                    width: 100%
                    height: 6em
                    border: none
                    margin: 0 1em 0 0
                    vertical-align: top
                    background: #d6d6d7
                    font-weight: 200
                    text-indent: .4em
                    font-size: 1.3em
                    color: #00030d
                    resize: none
                    font-family: CenturyGothic, -apple-system, Raleway, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
                    &:hover,&:active,&:focus
                        outline: none
                textarea.content
                    padding: .5em 0
                    width: 100%
                    height: 25em
                    border: none
                    margin: 0 1em 0 0
                    vertical-align: top
                    background: #d6d6d7
                    font-weight: 200
                    text-indent: .4em
                    font-size: 1.3em
                    color: #00030d
                    resize: none
                    font-family: CenturyGothic, -apple-system, Raleway, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
                    &:hover,&:active,&:focus
                    outline: none
                &.more
                    display: flex
                    justify-content: space-between
                    .more-item
                        // padding: 1em 1.5em 2.5em 1.5em
                        vertical-align: middle
                        &.is_hide
                        &.published_at
                            flex: 0 0 22em
                            width: 5.2em
                            height: 2.5em
                            datepicker
                                width: 100%
                                height: 100%
                        &.submit
                            flex: 0 0 5.2em
                            width: 5.2em
                            height: 2.5em
                            button
                                padding: 0
                                margin: 0
                                border: none
                                width: 100%
                                height: 100%
                                text-align: center
                                line-height: 2.5em
                                color: #00030d
                                font-size: 1.1em
                                background-color: rgba(183, 191, 197, .7)
                                transition: background-color .5s linear
                                cursor: pointer
                                &:hover
                                    background-color: rgba(183, 191, 197, .3)
                                &:hover,&:active,&:focus
                                    outline: none

</style>
