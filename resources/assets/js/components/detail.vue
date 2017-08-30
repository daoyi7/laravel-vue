<template>
  <div class="detail">
      <vcontent></vcontent>
      <more></more>
      <comment></comment>
  </div>
</template>

<script type="text/ecmascript-6">
    import vcontent from "./Detail/content"
    import more from "./Detail/contentMore"
    import comment from "./Detail/comment"

    export default {
        components: {
            vcontent,
            more,
            comment,
        }
    }
</script>

<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>
    .detail
        float: left
        width: 66.4em
        margin: 0 0 0 13em
        position: relative
        overflow: hidden
</style>
