<template>
    <span class="datepicker">
        <span class="control has-addons flatpickr" ref="pickrInput" v-if="isWrap">
          <input class="input"
                 :name="name"
                 :placeholder="placeholder"
                 type="text"
                 v-model="interVal" data-input>
          <a class="button" data-toggle><i class="icon iconfont icon-calendar"></i></a>
          <a class="button" data-clear><i class="icon iconfont icon-close"></i></a>
        </span>
    <p class="control has-icon has-icon-right" v-else>
        <input class="input input_click" :name="name" :value="interVal" :placeholder="placeholder" type="text" v-model="interVal" ref="pickrInput">
        <i class="icon iconfont icon-calendar"></i>
        <i class="icon iconfont icon-close" @click.prevent="handleClear"></i>
    </p>
    </span>
</template>
<script type="text/ecmascript-6">
    import Flatpickr from 'flatpickr';
    import 'flatpickr/dist/flatpickr.min.css';
    import { zh } from 'flatpickr/dist/l10n/zh'; // eslint-disable-line

    export default {
        props: {
            options: {
                type: Object,
                default () {},
            },
            name: String,
            placeholder: String,
            val: String,
            value: {},
            // class: String,
        },
        data() {
            return {
                interVal: this.value,
                flatPickr: null,
            };
        },
        computed: {
            isWrap() {
                if (this.options) {
                    return !!this.options.wrap;
                }
                return false;
            },
        },
        methods: {
            changeVal() {
                this.$emit('input', this.interVal);
            },
            handleClear() {
                this.flatPickr && this.flatPickr.clear();
            },
        },
        watch: {
            interVal(val) {
                this.interVal = val;
                this.$emit('input', this.interVal);
            },
        },
        mounted() {
            const pickrEl = this.$refs.pickrInput;
            this.flatPickr = new Flatpickr(pickrEl, this.options);
        },
        beforeDestroy() {
            if (this.flatPickr) {
                this.flatPickr.destroy();
                this.flatPickr = null;
            }
        },
    }
</script>
<style type="text/sass" lang="sass" rel="stylesheet/sass" scoped>

    span.datepicker
        width: 100%
        height: 100%
        display: block
        p.control
            width: 100%
            height: 100%
            display: block
            input[type="text"]
                width: 18em
                height: 20em

</style>
