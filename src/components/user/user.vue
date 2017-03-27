<template>
    <div class="container">
        <confirm-delete-modal
                title="Confirm your action"
                message="Are you sure with this action ?"
                :loadingState="userState.isDeleteLoading"
                :errorState="userState.isDeleteError"
                v-if="modal.confirmDeleteModal"
                @onDoneConfirm="deleteUser()"
                @onCancelConfirm="deleteUserCancel()"
        ></confirm-delete-modal>
        <form-add-modal
                title="Add User"
                :loadingState="userState.isStoreLoading"
                :errorState="userState.isStoreError"
                :formConfig="forms.formAdd"
                :model="user"
                v-if="modal.formAddModal"
                @onDoneSubmit="storeUser()"
                @onCancelSubmit="storeUserCancel()"
        ></form-add-modal>
        <form-update-modal
                title="Update User"
                :loadingState="userState.isUpdateLoading"
                :errorState="userState.isUpdateError"
                :formConfig="forms.formUpdate"
                :model="user"
                v-if="modal.formUpdateModal"
                @onDoneSubmit="updateUser()"
                @onCancelSubmit="updateUserCancel()"
        ></form-update-modal>
        <div class="jumbotron">
            <h1>{{ title }}</h1>
        </div>
        <ajax-loading-panel v-if="userState.isLoading && !userState.isError" message="Fetching user data from server"></ajax-loading-panel>
        <ajax-error-panel v-if="!userState.isLoading && userState.isError" message="Error fetching user data from server" @onReloadHttp="bindUsers()"></ajax-error-panel>
        <div class="row" v-if="!userState.isLoading && !userState.isError">
            <div class="col-md-12">
                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-sm-1 text-center">
                                <strong>#ID</strong>
                            </div>
                            <div class="col-sm-3 text-center">
                                <strong>Name</strong>
                            </div>
                            <div class="col-sm-3 text-center">
                                <strong>Email</strong>
                            </div>
                            <div class="col-sm-3 text-center">
                                <strong>Last Update</strong>
                            </div>
                            <div class="col-sm-2 text-center">
                                <button type="button" class="btn btn-sm btn-primary" @click="doStore()">Add</button>
                                <button type="button" class="btn btn-sm btn-info" @click="bindUsers()">Refresh</button>
                            </div>
                        </div>
                    </li>
                    <li v-for="user in users" class="list-group-item">
                        <div class="row">
                            <div class="col-sm-1 text-center">
                                {{ user.id }}
                            </div>
                            <div class="col-sm-3 text-center">
                                {{ user.name }}
                            </div>
                            <div class="col-sm-3 text-center">
                                {{ user.email }}
                            </div>
                            <div class="col-sm-3 text-center">
                                {{ user.updated_at }}
                            </div>
                            <div class="col-sm-2 text-center">
                                <button type="button" class="btn btn-success btn-sm" @click="doUpdate(user)">Edit</button>
                                <button type="button" class="btn btn-danger btn-sm" @click="doDelete(user)">Delete</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script src="./user.js"></script>