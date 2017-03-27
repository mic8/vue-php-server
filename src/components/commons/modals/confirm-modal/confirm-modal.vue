<template>
    <div modal-wrapper>
        <div class="modal-container" :style="style">
            <div class="modal-header">
                <strong modal-title>{{ title }}</strong>
                <button type="button" class="close" modal-close-button @click="cancelConfirm()">&times;</button>
            </div>
            <div class="modal-body">
                <p class="text-center" modal-message>{{ message }}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" @click="doneConfirm()" v-if="!errorState" :disabled="loadingState || errorState">{{ buttons.done }}</button>
                <button type="button" class="btn btn-primary" @click="doneConfirm()" v-if="errorState && !loadingState">Try Again</button>
                <button type="button" class="btn btn-danger" @click="cancelConfirm()">{{ buttons.cancel }}</button>
            </div>
        </div>
    </div>
</template>
<style src="../modal.scss"></style>
<script src="./confirm-modal.js"></script>