<template>
    <div class="project">
        <div class="item" v-for="(content, index) in contents" key="index">
            <div class="thumb">
                <img :src="content.thumb">
            </div>
            <div class="content">
                <h3 class="title">{{ content.title }}</h3>
                <p class="description">{{ content.description }}</p>
                <div class="info">
                    <span class="star"><i></i>{{ content.star }}</span>
                    <span class="fork"><i></i>{{ content.fork }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                contents: [
                    {
                        thumb: '../../images/bg1.png',
                        title: 'typing.js',
                        description: 'typing.js by kawhi',
                        star: '7',
                        fork: '20',
                    },
                    {
                        thumb: '../../images/bg1.png',
                        title: 'laravel-vue',
                        description: 'Codingwell',
                        star: '50',
                        fork: '5',
                    },
                    {
                        thumb: '../../images/bg1.png',
                        title: 'Canvas-work',
                        description: 'All canvas demo',
                        star: '10',
                        fork: '7',
                    },
                    {
                        thumb: '../../images/bg1.png',
                        title: 'Express-start',
                        description: 'All canvas demo',
                        star: '6',
                        fork: '5',
                    },
                    {
                        thumb: '../../images/bg1.png',
                        title: 'Express-start',
                        description: 'Want Use Express With Vue',
                        star: '6',
                        fork: '5',
                    },
                ],
            }
        }
    }
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

    $trans: .5s linear

    .project
        float: left
        width: 66.4em
        margin: 0 0 0 13em
        position: relative
        overflow: hidden
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        .item:hover
            background: rgba(255, 255, 255, 0.3)
            .thumb
                img
                    transform: scale(1.5)
        .item:last-child
            margin-right: 0
        .item
            margin: 0 .4em .8em 0
            background: rgba(255, 255, 255, 0.7)
            flex: 0 0 16em
            width: 16em
            transition: background $trans
            .thumb
                width: 100%
                height: auto
                overflow: hidden
                img
                    min-width: 100%
                    max-width: calc(150% + 1.5em)
                    width: calc(150% + 1.5em)
                    min-height: 15em
                    height: auto
                    transform: scale(1)
                    transition: transform $trans
            .content
                padding: .4em 1em 1.2em 1em
                .title
                    line-height: 2em
                    text-align: center
                    font-size: 1.6em
                    color: #00030d
                    font-weight: 700
                .description
                    font-size: 1.4em
                    text-indent: .5em
                    line-height: 1.4em
                    margin-bottom: 1.5em
                .info
                    display: flex
                    padding-top: 1em
                    border-top: 1px solid #b7bfc5
                    span
                        flex: 1
                        text-align: center
                        font-size: 1.4em

</style>
