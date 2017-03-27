import ModelMapper from '../../utils/mapper/model-mapper.util';

import UserModel from '../../models/user/user.model';
import UserService from '../../services/user/user.service';

import AjaxLoadingPanel from '../commons/ajax-loading-panel/ajax-loading-panel.vue';
import AjaxErrorPanel from '../commons/ajax-error-panel/ajax-error-panel.vue';
import ConfirmModal from '../commons/modals/confirm-modal/confirm-modal.vue';
import FormModal from '../commons/modals/form-modal/form-modal.vue';

import UserCreateForm from '../../forms/user/user-create.form';
import UserUpdateForm from '../../forms/user/user-update.form';

export default {
    components: {
        'ajax-loading-panel': AjaxLoadingPanel,
        'ajax-error-panel': AjaxErrorPanel,
        'confirm-delete-modal': ConfirmModal,
        'form-add-modal': FormModal,
        'form-update-modal': FormModal
    },
    data() {
        return {
            forms: {
                formAdd: UserCreateForm,
                formUpdate: UserUpdateForm
            },
            modal: {
                confirmDeleteModal: false,
                formAddModal: false,
                formUpdateModal: false
            },
            title: 'User Page',
            user: UserModel,
            userState: {
                isLoading: false,
                isError: false,
                isStoreLoading: false,
                isStoreError: false,
                isDeleteLoading: false,
                isDeleteError: false,
                isUpdateLoading: false,
                isUpdateError: false
            },
            users: []
        }
    },
    mounted() {
        this.bindUsers();
    },
    methods: {
        bindUsers() {
            this.userState.isLoading = true;
            this.userState.isError = false;
            this.users = [];

            UserService.index(this)
                .then(
                    res => {
                        this.userState.isLoading = false;
                        this.userState.isError = false;
                        this.users = ModelMapper.map(UserModel, res.body);
                    },
                    err => {
                        this.userState.isLoading = false;
                        this.userState.isError = true;
                    }
                );
        },
        doStore() {
            this.user.name = '';
            this.user.password = '';
            this.user.email = '';
            this.modal.formAddModal = true;
        },
        storeUser() {
            this.userState.isStoreLoading = true;

            UserService.store(this, this.user)
                .then(
                    res => {
                        this.userState.isStoreLoading = false;
                        this.users.push(res.data.data);
                        this.storeUserCancel();
                    },
                    err => {
                        this.userState.isStoreError = true;
                        this.userState.isStoreLoading = false;
                    }
                )
        },
        storeUserCancel() {
            this.modal.formAddModal = false;
        },
        doDelete(user) {
            this.modal.confirmDeleteModal = true;
            this.user = user;
        },
        deleteUser() {
            this.userState.isDeleteLoading = true;

            UserService.delete(this, this.user.id)
                .then(
                    res => {
                        this.userState.isDeleteLoading = false;
                        this.users.splice(this.users.indexOf(this.user), 1);
                        this.deleteUserCancel();
                    },
                    err => {
                        this.userState.isDeleteLoading = false;
                        this.userState.isDeleteError = true;
                    }
                )
        },
        deleteUserCancel() {
            this.modal.confirmDeleteModal = false;
        },
        doUpdate(user) {
            this.modal.formUpdateModal = true;
            this.user = user;
        },
        updateUser() {
            this.userState.isUpdateLoading = true;

            UserService.update(this, this.user.id, this.user)
                .then(
                    res => {
                        this.userState.isUpdateLoading = false;
                        this.updateUserCancel();
                    },
                    err => {
                        this.userState.isUpdateError = true;
                        this.userState.isUpdateLoading = false;
                    }
                )
        },
        updateUserCancel() {
            this.modal.formUpdateModal = false;
        }
    }
}