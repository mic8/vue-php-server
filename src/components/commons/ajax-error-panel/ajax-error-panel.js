export default {
    props: {
        message: {
            type: String,
            default: 'Http Error'
        }
    },
    methods: {
        reloadHttp() {
            this.$emit('onReloadHttp');
        }
    }
}