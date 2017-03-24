<template>
    <div class="container">
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
                            <div class="col-md-2 text-center">
                                <strong>#ID</strong>
                            </div>
                            <div class="col-md-3 text-center">
                                <strong>Name</strong>
                            </div>
                            <div class="col-md-3 text-center">
                                <strong>Email</strong>
                            </div>
                            <div class="col-md-4 text-center">
                                <strong>Last Update</strong>
                            </div>
                        </div>
                    </li>
                    <li v-for="user in users" class="list-group-item">
                        <div class="row">
                            <div class="col-md-2 text-center">
                                {{ user.id }}
                            </div>
                            <div class="col-md-3 text-center">
                                {{ user.name }}
                            </div>
                            <div class="col-md-3 text-center">
                                {{ user.email }}
                            </div>
                            <div class="col-md-4 text-center">
                                {{ user.updated_at }}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script src="./user.js"></script>