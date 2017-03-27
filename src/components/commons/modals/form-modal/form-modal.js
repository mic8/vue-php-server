export default {
    props: {
        title: {
            type: String,
            default: 'Form'
        },
        buttons: {
            type: Object,
            default() { //must use function factory
                return {
                    done: 'Submit',
                    cancel: 'Cancel'
                }
            }
        },
        loadingState: {
            required: true
        },
        errorState: {
            required: true
        },
        formConfig: {
            required: true
        },
        model: {
            required: true
        }
    },
    data() {
        return {
            style: {
                width: '500px'
            }
        }
    },
    methods: {
        doneConfirm() {
            this.$emit('onDoneSubmit');
        },
        cancelConfirm() {
            this.$emit('onCancelSubmit');
        },
        changeValues(key, e) {
            let value = e.target.value;
            this.model[key] = value;
        }
    }
}