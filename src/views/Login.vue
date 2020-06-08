<template>
    <div class="login-form">
        <h2>Login</h2>
        <label>
            <input type="text"
                   placeholder="E-mail"
                   :class="{'invalid': $v.email.$dirty && $v.email.$invalid}"
                   v-model.trim.lazy="$v.email.$model">
        </label>
        <label>
            <input type="password"
                   placeholder="Password"
                   :class="{'invalid': $v.password.$dirty && $v.password.$invalid}"
                   v-model.trim.lazy="$v.password.$model">
        </label>
        <button @click="check">Login</button>
    </div>
</template>
<script>
    import {authenticate} from '../api/api';
    import { required, email } from 'vuelidate/lib/validators'
    export default {
        mounted() {
            if(this.$store.getters.user) this.$router.push('/');
        },
        data() {
            return {
                email: 'mortenzwarenstein@hotmail.com',
                password: 'morten12'
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required
            }
        },
        methods: {
            async check(){
                if(this.formValid){
                    let values = {
                        email: this.email,
                        password: this.password
                    }

                    let res = await authenticate(values);
                    if(res.success){
                        this.$store.dispatch('login', {
                            user: res.user
                        });
                        this.$router.push('/')
                    }
                }
            }
        },
        computed: {
            formValid() {
                return !this.$v.invalid
            }
        }
    }
</script>
<style lang="scss" scoped>
    .login-form{
        h2{
            margin-top: 7px;
            margin-bottom: 15px;
        }
    }

    label{
        display: block;
        margin-bottom: 15px;
        input{
            width: 100%;
            padding: 8px 7px;
            border-radius: 5px;
            border: 1px solid #e3e3e3;
            &.invalid{
                border-color: red;
            }
        }
    }
</style>
