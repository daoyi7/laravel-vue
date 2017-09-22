<template>
    <div class="edit">
        <form class="edit-form" enctype="multipart/form-data" method="post">
            <div class="edit-item title">
                <input class="title" type="text" v-model="test.title" value="" placeholder="Blog Title *">
            </div>
            <div class="edit-item intro">
                <textarea class="intro" v-model="test.intro" value="" placeholder="description"></textarea>
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
                    intro: ''
                }
            }
        },
        methods: {
            submit: function (event) {
                event.preventDefault()
                let formData = JSON.stringify(this.test)

                let config = {
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                }

                this.$http.post('/api/blog', formData, config)
                    .then(function (res) {
                        if (res.status === 2000) {
                            /*这里做处理*/
                            console.log(res)
                        }
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
