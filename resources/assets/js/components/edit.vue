<template>
    <div class="edit">
        <form class="edit-form" method="post">
            <div class="edit-item title">
                <input class="input_title" type="text" v-model="test.title" value="" placeholder="Blog Title *">
            </div>
            <div class="edit-item intro">
                <textarea class="input_intro" v-model="test.intro" value="" placeholder="description"></textarea>
            </div>
            <div class="edit-item content">
                <textarea class="input_content" v-model="test.content" value="" placeholder="Content"></textarea>
            </div>
            <div class="edit-item like_counts">
                <input class="input_like_counts" type="text" v-model="test.like_counts" value="" placeholder="like_counts">
            </div>
            <div class="edit-item view_counts">
                <input class="input_view_counts"  type="text" v-model="test.view_counts" value="" placeholder="view_counts">
            </div>
            <div class="edit-item published_at">
                <input class="input_published_at"  type="date" v-model="test.published_at" value="" placeholder="published_at">
            </div>
            <div class="edit-item submit">
                <button type="button" name="submit" @click="submit($event)">Submit</button>
            </div>
        </form>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                test: {
                    title: '',
                    intro: '',
                    content: '',
                    like_counts: '',
                    view_counts: '',
                    is_hide: false,
                    published_at: ''
                }
            }
        },
        methods: {
            submit: function (event) {
                event.preventDefault()
                let formData = JSON.stringify(this.test)

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
            }
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
                    padding: .5em .3em
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
                textarea.intro
                    padding: .5em .3em
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


</style>
