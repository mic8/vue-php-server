<template>
    <div class="wrapper">
        <header>
            <nav class="navbar navbar-default navbar-static-top">
                <div class="container">
                    <div class="navbar-header">
                        <router-link to="/" class="navbar-brand">Website Logo</router-link>
                    </div>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <router-link to="/user">User Data</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <p class="text-center">
                Copyright &copy; 2017 | Michael Reynald
            </p>
        </footer>
    </div>
</template>