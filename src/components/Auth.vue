<template>
    <div>
        <div class="row justify-content-center mt-5">
            
            <h3 class="mb-3">CampusGram</h3>

            <div class="col-md-6 col-sm-10">
                <div class="card bg-light mb-3 d-flex">
                    <div class="card-header d-flex justify-content-between">
                        <div><b>{{ leftHeading }}</b></div>
                        <div class="text-primary" style="cursor:pointer" @click="toggleShowLogin">{{ rightHeading }}</div>
                    </div>
                    <div class="card-body">
                        <div v-if="showLogin">
                            <Login></Login>
                        </div>
                        <div v-else>
                            <Register></Register>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>

</template>

<script>
    export default {
        name: "Auth",
        data: () => ({
            showLogin: true,
            leftHeading: "Login",
            rightHeading: "Register",

        }),
        components: {
            Login: () => import('./Login'),
            Register: () => import('./Register'),
        },
        methods: {
            toggleShowLogin() {
                this.showLogin = !this.showLogin
                let leftHeading = this.leftHeading
                this.leftHeading = this.rightHeading
                this.rightHeading = leftHeading
            },
        },
    }
</script>

<style scoped>
</style>    
