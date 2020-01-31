<template>
    <div class="login">
        <label class="login__label" for="username">Username</label>
        <input 
            class="login__input"
            type="text"
            name="username"
            id="username"
            v-model="username" />
        <label class="login__label" for="password">Password</label>
        <input 
            class="login__input"
            type="password"
            name="password"
            id="password"
            v-model="password" />
        <button class="login__button" @click="handleLogin">Send</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            handleLogin() {
                if (this.username && this.password) {
                    localStorage.setItem('user', JSON.stringify({
                        username: this.username,
                        password: this.password
                    }))
                    this.$router.push('/')
                }
            }
        },
    }
</script>

<style scoped>
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    margin-bottom: 20px;
    width: 100%;
}
.login__input,
.login__label {
    appearance: none;
    box-sizing: border-box;
    font-size: 16px;
    height: 50px;
    margin: 0;
}
.login__input {
    border: 1px solid grey;
    flex-grow: 1;
    padding: 10px;
    width: 100%;
}
.login__label {
    padding: 10px 20px;
}
.login__button {
    appearance: none;
    background-color: #000000;
    border: 0px solid transparent;
    color: #ffffff;
    font-size: 16px;
    height: 50px;
    text-transform: uppercase;
    margin: 10px 0;
    width: 100%;
}
</style>