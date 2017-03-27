<template>
    <div modal-wrapper>
        <div class="modal-container" :style="style">
            <div class="modal-header">
                <strong modal-title>{{ title }}</strong>
                <button type="button" class="close" modal-close-button @click="cancelConfirm()">&times;</button>
            </div>
            <form role="form" @submit.prevent="doneConfirm()">
                <div class="modal-body">
                    <div class="form-group" v-for="form in formConfig">
                        <label class="control-label">{{ form.label }}</label>
                        <input :type="form.type" :placeholder="form.placeholder" required v-if="form.required" @input="changeValues(form.key, $event)" class="form-control" :value="model[form.key]">
                        <input :type="form.type" :placeholder="form.placeholder" v-if="!form.required" @input="changeValues(form.key, $event)" class="form-control" :value="model[form.key]">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary" v-if="!errorState" :disabled="loadingState || errorState">{{ buttons.done }}</button>
                    <button type="submit" class="btn btn-primary" v-if="errorState && !loadingState">Try Again</button>
                    <button type="button" class="btn btn-danger" @click="cancelConfirm()">{{ buttons.cancel }}</button>
                </div>
            </form>
        </div>
    </div>
</template>
<style src="../modal.scss"></style>
<script src="./form-modal.js"></script>