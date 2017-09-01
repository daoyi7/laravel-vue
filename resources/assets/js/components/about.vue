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
                <div class="item  pay"><p><router-link to="https://github.com/daoyi7">{{ github }}</router-link></p></div>
            </div>
            <div class="experience">
                <h2>工作经历</h2>
                <ul>
                    <li v-for="(exp, index) in exps" key="index">
                        <section class="exp">
                            <h4>{{ exp.co }}<span class="time">{{ exp.time }}</span></h4>
                            <article class="exp_content">
                                {{ exp.content }}
                            </article>
                        </section>
                    </li>
                </ul>
            </div>
            <div class="skill">
                <h2>技能</h2>
                <ul>
                    <li v-for="(skill , index) in skills" key="index">{{ skill.item }}</li>
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
                github: 'https://github.com/daoyi7',
                skills: [
                    {
                        item: 'HTML, HTML5, CSS, CSS3'
                    },
                    {
                        item: 'PHP, Node.js'
                    },
                    {
                        item: 'jquery, jquery mobile, zepto, bootstrap, vue, angular, react, three.js'
                    },
                    {
                        item: 'thinkphp, laravel, express'
                    },
                    {
                        item: 'webstorm, atom'
                    }
                ],
                exps: [
                    {
                        co: '武汉蓝鱼科技有限公司',
                        time: '2015.06-2016.09',
                        content: '蓝鱼科技是一家创业型小公司，当时公司只有为一个人做前端部分，那时候刚入职对于前端的认识还只是停留在html+css+js这些基础上。后来因为一个广告公司的官网需求，其中有大量的栅格化页面，为开始了解bootstrap，然后又慢慢的开始接触并使用jquery。用bootstrap+jquery的方式开始做武汉江夏区工会和武汉江夏政协的网站(两个都是政府网站)，用到了非常著名的圣杯布局。',
                    },
                    {
                        co: '武汉三七六网络',
                        time: '2016.09-2017.06',
                        content: '在这家公司里，我第一次真正意义上的跟php后端工程师搭配开发。了解了MVC的过程。也是在这一家公司收到同事们的熏陶开始逛论坛玩社区。开始接触thinkphp这样的mvc框架，又从MVC转去MVVM的vue框架。'
                    },
                    {
                        co: '待业',
                        time: '2017.06-2017.07',
                        content: '一段时间里觉得自己落户前端潮流太多，于是在家待了一个多月，从vue开始到angular。然后了解到php不光与thinkphp还有laravel这样优雅的框架，开始搭建属于自己的第一个个人网站。又接着hello world了一些例如react、express这样的框架。也是开始重新捡起github，从上面发现了不少好用又轻量的插件。'
                    },
                    {
                        co: '中交第二航务工程勘察设计院（CTESI）',
                        time: '2017.07',
                        content: '二航院对于JS的要求很高，公司购买了一个后端用C#,前端用Jquery的平台开发工具，一键生存页面。为主要在团队里负责前端的js部分修改内容，从源代码里面找到需求不满的地方并修改、开始第一次封装自己的插件给同事复用。'
                    }
                ]
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
                    font-size: 1.4em
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
                margin-bottom: 1em
                h2
                    margin-bottom: 1.2em
                ul
                    li:last-child
                        margin-bottom: 0
                    li
                        margin-bottom: .8em
                        .exp
                            padding-left: 1.3em
                            h4
                                margin-bottom: .8em
                            h4::before
                                content: ''
                                display: inline-block
                                vertical-align: -.38em
                                width: .2em
                                height: 1.4em
                                background-color: #b7bfc5
                                margin-right: 1em
                            .exp_content
                                line-height: 2em
                                padding-left: 1.2em
            .skill
                padding-left: 4em
                margin-bottom: 1.5em
                h2
                    margin-bottom: .5em
                ul
                    padding-left: 2.3em
                    li
                        list-style-type: disc
                        line-height: 1.8em
                        font-size: 1.3em

</style>
