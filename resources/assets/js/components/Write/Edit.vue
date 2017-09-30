<template>
<div class="edit">
    <form class="edit-form" method="post">
        <div class="edit-item thumbs">
            <VueImgInputer class="thumbs" v-model="upBlog.desc" theme="material" size="large"></VueImgInputer>
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
                <b-switch type="kawhi" :on-change="onChange" size="small"></b-switch>
            </div>
            <div class="more-item published_at">
                <datepicker placeholder="Choose UpdateTime" :options="{enableTime: true, altInput: true, altFormat: 'F j, Y h:i K'}"></datepicker>
            </div>
            <div class="more-item submit">
                <button type="button" name="submit" @click="submit($event)">Submit</button>
            </div>
        </div>
    </form>
</div>
</template>

<script type="text/ecmascript-6">
import VueImgInputer from "vue-img-inputer"

export default {
    data() {
        return {
            val1: true,
            upBlog: {
                title: '',
                desc: '',
                content: '',
                like_counts: '0',
                view_counts: '0',
                is_hide: false,
                published_at: '',
                thumb: ''
            }
        }
    },
    components: {
        VueImgInputer
    },
    methods: {
        onChange(val) {
            const content = val ? '开启' : '关闭';
            this.$notify.info({
                content
            });
        },
        submit: function(event) {
            event.preventDefault()
            let formData = JSON.stringify(this.upBlog)

            let config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            this.$http.post('/api/blog', formData, config)
                .then((res) => {
                    /**写你的操作函数**/
                    // console.log(res)
                })
                .catch((error) => {
                    throw new Error(error.response.data.error)
                })
        },
    }
}
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

    .edit
        float: left
        width: 66.4em
        margin: 0 0 0 13em
        position: relative
        overflow: hidden
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
                            .switch-wrap
                              position: relative
                              display: inline-block
                              padding-left: 60px
                              min-height: 20px
                              .switch-wrap.is-small
                                padding-left: 48px
                                .switch-wrap.is-small .switchery
                                  width: 40px
                                  height: 18px
                                  .switch-wrap.is-small .switchery > small
                                    width: 18px
                                    height: 18px
                                  .switch-wrap.is-small .switchery.on > small
                                    left: 22px
                                .switch-wrap.is-small .text
                                  margin-left: 22px

                            .switchery
                              position: absolute
                              left: 0
                              margin-top: -2px
                              border: 1px solid #ddd
                              border-radius: 100px
                              cursor: pointer
                              display: inline-block
                              width: 48px
                              height: 22px
                              transition: border .4s, box-shadow .4s
                              background-color: white
                              border-color: #e9e9e9
                              box-shadow: #e9e9e9 0px 0px 0px 0px inset
                              -webkit-box-sizing: content-box
                              -moz-box-sizing: content-box
                              box-sizing: content-box
                              .switchery.has-text
                                width: 56px
                                .switchery.has-text.on > small
                                  left: 34px
                              .switchery .text
                                -webkit-touch-callout: none
                                -webkit-user-select: none
                                -khtml-user-select: none
                                -moz-user-select: none
                                -ms-user-select: none
                                user-select: none
                                font-size: 13px
                                color: #999
                                margin-left: 25px
                              .switchery > small
                                position: absolute
                                top: 0
                                left: 0
                                width: 22px
                                transition: background-color 0.4s, left 0.2s
                                border-radius: 100px
                                background-color: #fff
                                height: 22px
                                -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4)
                                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4)
                              .switchery.on
                                background-color: #3c81df
                                border-color: #3c81df
                                box-shadow: #3c81df 0px 0px 0px 12px inset
                                transition: border 0.4s, box-shadow 0.4s, background-color 1.2s
                                .switchery.on > small
                                  left: 26px
                                .switchery.on .text
                                  text-align: right
                                  margin-left: 5px
                                  color: #fff
                              .switchery.is-info.on
                                background-color: #00c0ef
                                border-color: #00c0ef
                                box-shadow: #00c0ef 0px 0px 0px 12px inset
                              .switchery.is-success.on
                                background-color: #6cc788
                                border-color: #6cc788
                                box-shadow: #6cc788 0px 0px 0px 12px inset
                              .switchery.is-warning.on
                                background-color: #f39c12
                                border-color: #f39c12
                                box-shadow: #f39c12 0px 0px 0px 12px inset
                              .switchery.is-danger.on
                                background-color: #f56954
                                border-color: #f56954
                                box-shadow: #f56954 0px 0px 0px 12px inset;
                        &.published_at
                            flex: 0 0 22em
                            width: 5.2em
                            height: 2.5em
                            .flatpickr-input
                                cursor: pointer
                                z-index: 1
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
