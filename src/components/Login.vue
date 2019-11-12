<template>
    <div>
        <form
            v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="loginEmailField"><h5><b>Email</b></h5></label>
                <input type="email" class="form-control" id="loginEmailField" placeholder="Email" autofocus>
            </div>
            <div class="form-group">
                <label for="loginPasswordField"><h5><b>Password</b></h5></label>
                <input type="password" class="form-control" id="loginPasswordField" placeholder="Password">
                </div>
            <button type="submit" class="btn btn-success btn-block">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            onSubmit() {
                this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password,
                })
            }
        }
    }
</script>

