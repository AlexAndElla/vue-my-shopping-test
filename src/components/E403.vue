<template>
    <div class="403">
        403<br>只有用户名是admin，才能看到个人中心页面
        <p><button type="button" @click="logout">退出登录</button></p>
    </div>
</template>
<script>
export default {
    name: 'E403',
    methods: {
        logout() {
            localStorage.removeItem("username");
            this.$router.push({
                path: '/Login'
            })
        }
    }
}
</script>