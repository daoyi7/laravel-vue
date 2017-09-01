<template>
    <div class="about">
        <div class="head">
            <p class="head-icon"><i class="icon iconfont icon-read"></i></p>
            <p class="slogan" v-text="slogan"></p>
        </div>
        <div class="resume">
            <div class="name">
                <h2>
                    {{ name }}
                    <span>{{ ename }}</span>
                </h2>
            </div>
            <div class="contact">
                <div class="item  tel"><p>{{ phone }}</p></div>
                <div class="item email"><p>{{ email }}</p></div>
                <div class="item wechat"><p>{{ wechat }}</p></div>
                <div class="item  job"><p>{{ job }}</p></div>
                <div class="item  pay"><p>{{ pay }}</p></div>
            </div>
            <div class="experience">
                <h2>工作经历</h2>
            </div>
            <div class="skill">
                <h2>技能</h2>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                page: 'About',
                slogan: '',
                name: '张深涵',
                job: '前端',
                pay: '12k',
                ename: 'kawhi',
                phone: '+86 13871959550',
                email: 'Codingwell@gmail.com',
                wechat: 'daoyi7',
            }
        },
        mounted(){
            this.init()
        },
        methods:{
            init(){
                document.title = this.page + ' | kawhi.me'
                let str = "Talk is cheap,show me the code.",
                    _this = this,
                    timer = null;

                function typing() {
                    let i = - 1,

                    timer = setInterval(() => {
                        i = i + 1

                        _this.slogan = _this.slogan + str[i]

                        if (i > str.length - 2) {
                            clearInterval(timer)
                            setTimeout(deleting,2000)
                        }
                    },100)
                }

                function deleting() {
                    let wstr = str.split(""),
                        j = wstr.length;

                    timer = setInterval(function() {
                        j = j - 1
                        wstr = wstr.slice(0, j)
                        _this.slogan = wstr.join("")

                        if (j <= 0) {
                            clearInterval(timer)
                            setTimeout(typing,200)
                        }
                    }, 100)

                }

                typing()
            }
        }
    }
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

    @keyframes blink
        from
            opacity: 1
        to
            opacity: 0

    .about
        float: left
        width: 66.4em
        margin: 0 0 0 13em
        position: relative
        overflow: hidden
        .head
            position: relative
            width: 100%
            height: 25em
            background: rgba(236, 238, 239, 0.7)
            overflow: hidden
            display: flex
            align-items: center
            margin-bottom: 1em
            .head-icon
                width: 100%
                height: auto
                display: flex
                justify-content: center
                i
                    font-size: 15em
            .slogan
                position: absolute
                left: 0
                bottom: .4em
                width: 100%
                height: auto
                text-align: center
                font-size: 1.7em
                padding: .4em 0
            .slogan::after
                content: ""
                background-color: #00030d
                width: .06em
                height: 1em
                vertical-align: -.2em
                margin-left: .2em
                display: inline-block
                animation: blink .4s infinite alternate
                -webkit-animation: blink .4s infinite alternate
        .resume
            width: 100%
            height: auto
            overflow: hidden
            .name
                h2
                    line-height: 2em
                    text-align: center
                    font-size: 2.5em
                    span
                        font-size: .7em
            .contact
                padding-left: 4em
                margin-bottom: 1.5em
                .item
                    line-height: 2.5em
                    font-size: 1.6em
                    p::before
                        content: ''
                        display: inline-block
                        vertical-align: -.38em
                        width: .2em
                        height: 1.4em
                        background-color: #b7bfc5
                        margin-right: 1em
            .experience
                padding-left: 4em
                margin-bottom: 1.5em
            .skill
                padding-left: 4em
                margin-bottom: 1.5em
</style>
