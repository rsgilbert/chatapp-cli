<template>
    <div>
        <form 
            v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="registerEmailField"><h5><b>Email</b></h5></label>
                <input v-model="email" type="emaill" class="form-control" id="registerEmailField" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="registerPasswordField"><h5><b>Password</b></h5></label>
                <input v-model="password" type="password" class="form-control" :class="{'is-invalid': passwordInvalid}" id="registerPasswordField" placeholder="Password">
                <div class="invalid-feedback">Atleast 5 characters</div>
            </div>
            <div class="form-group">
                <label for="confirmPasswordField"><h5><b>Confirm Password</b></h5></label>
                <input v-model="confirmPassword" type="password" class="form-control" :class="{'is-invalid': confirmPasswordInvalid}" id="confirmPasswordField" placeholder="Confirm Password">
                <div class="invalid-feedback">Passwords do not match</div>
           
            </div>
            <button type="submit" :disabled="buttonDisabled" class="btn btn-success btn-block">Register</button>
        </form>
    </div>
</template>

<script>

    export default {
        data: () => ({
            passwordInvalid: false,
            confirmPasswordInvalid: false,
            minimumPasswordLength: 0,
            email: "",
            password: "",
            confirmPassword: "",
        }),
        watch: {
            password () {
                this.passwordInvalid = this.password.length < this.minimumPasswordLength  
            },
            confirmPassword () {
                this.confirmPasswordInvalid = this.password !== this.confirmPassword
            }

        },
        computed: {
            buttonDisabled () {
                return this.passwordInvalid || this.confirmPasswordInvalid || this.password.length < this.minimumPasswordLength
            } 
        },

        methods: {
            onSubmit() {
                this.$store.dispatch('register', {
                    email: this.email,
                    password: this.password,
                })
            }
        },

    }
</script>
