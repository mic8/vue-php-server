import ModelMapper from '../../utils/mapper/model-mapper.util';

import UserModel from '../../models/user/user.model';
import UserService from '../../services/user/user.service';

import AjaxLoadingPanel from '../commons/ajax-loading-panel/ajax-loading-panel.vue';
import AjaxErrorPanel from '../commons/ajax-error-panel/ajax-error-panel.vue';

export default {
    components: {
        'ajax-loading-panel': AjaxLoadingPanel,
        'ajax-error-panel': AjaxErrorPanel
    },
    data() {
        return {
            title: 'User Page',
            user: UserModel,
            userState: {
                isLoading: false,
                isError: false
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
            this.users = [];

            UserService.fetch(this)
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
        }
    }
}