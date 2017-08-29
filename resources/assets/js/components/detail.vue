<template>
  <div class="detail">
      <vcontent></vcontent>
      <more></more>
  </div>
</template>

<script type="text/ecmascript-6">
    import vcontent from "./content/content"
    import more from "./contentMore/contentMore"
    export default {
        components: {
            vcontent,
            more,
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
