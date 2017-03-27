export default {
    props: {
        title: {
            type: String,
            default: 'Confirmation'
        },
        message: {
            type: String,
            default: 'Confirmation about something'
        },
        buttons: {
            type: Object,
            default() { //must use function factory
                return {
                    done: 'Yes',
                    cancel: 'No'
                }
            }
        },
        loadingState: {
            required: true
        },
        errorState: {
            required: true
        }
    },
    data() {
        return {
            style: {
                width: '300px'
            }
        }
    },
    methods: {
        doneConfirm() {
            this.$emit('onDoneConfirm');
        },
        cancelConfirm() {
            this.$emit('onCancelConfirm');
        }
    }
}