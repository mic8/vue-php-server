<template>
    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-danger">
                <p class="text-center">
                    AJAX Error: {{ message }}
                </p>
                <br>
                <div class="text-center">
                    <button type="button" class="btn btn-default" @click="reloadHttp()">
                        Reload
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./ajax-error-panel.js"></script>