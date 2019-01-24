<template>
    <div class="login">
        <p>用户名：<input type="text" v-model="username"></p>
        <p>密码：<input type="password" v-model="password"></p>
        <p><button type="button" @click="login">登录</button></p>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            username: 'admin',
            password: ''
        }
    },
    methods: {
        login() {
            localStorage.setItem('username',this.username);
            this.$router.push({
                path: '/Home'
            })
        }
    }
}
</script>
