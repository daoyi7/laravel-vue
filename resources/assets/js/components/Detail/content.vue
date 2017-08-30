<template>
    <div class="content">
        <h2 class="title">
            <span>This Is A Test Blog</span>
        </h2>
        <div class="main">
            <p>
                Enter/Leave & List Transitions

                Overview

                Vue provides a variety of ways to apply transition effects when items are inserted, updated, or removed from the DOM. This includes tools to:
                automatically apply classes for CSS transitions and animations
                integrate 3rd-party CSS animation libraries, such as Animate.css
                use JavaScript to directly manipulate the DOM during transition hooks
                integrate 3rd-party JavaScript animation libraries, such as Velocity.js
                On this page, we’ll only cover entering, leaving, and list transitions, but you can see the next section for managing state transitions.
                Transitioning Single Elements/Components

                Vue provides a transition wrapper component, allowing you to add entering/leaving transitions for any element or component in the following contexts:
                Conditional rendering (using v-if)
                Conditional display (using v-show)
                Dynamic components
                Component root nodes
                This is what a very simple example looks like in action:
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>
    .content
        padding: .4em 1.5em
        background: rgba(236, 238, 239, 0.7)
        margin-bottom: 1.5em
        .title
            width: 100%
            line-height: 2.5em
            font-size: 1.8em
            font-weight: 700
            text-align: center
            padding-bottom: 1.6em
        .main
            width: 100%
            height: auto
            overflow: hidden
            font-size: 1.4em
            p
                line-height: 2em
</style>
