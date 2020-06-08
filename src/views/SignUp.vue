<template>
    <div class="login-form">
        <h2>Register</h2>
        <app-flash :errors="errors"></app-flash>
        <label>
            <span class="error-msg" v-if="!$v.username.required">Username is a required field!</span>
            <input type="text"
                   placeholder="Username"
                   :class="{'invalid': $v.username.$dirty && $v.username.$invalid}"
                   v-model.trim.lazy="$v.username.$model">
        </label>

        <label>
            <span class="error-msg" v-if="!$v.email.required">E-mail is a required field!</span>
            <span class="error-msg" v-if="!$v.email.email">This is an invalid e-mail</span>
            <input type="text"
                   placeholder="E-mail"
                   :class="{'invalid': $v.email.$dirty && $v.email.$invalid}"
                   v-model.trim.lazy="$v.email.$model">
        </label>
        <label>
            <span class="error-msg" v-if="!$v.password.required">Password is a required field!</span>
            <span class="error-msg" v-if="!$v.password.minLength">Password must contain at least 6 characters</span>
            <input type="password"
                   placeholder="Password"
                   :class="{'invalid': $v.password.$dirty && $v.password.$invalid}"
                   v-model.trim.lazy="$v.password.$model">
        </label>
        <label>
            <span class="error-msg" v-if="!$v.password2.required">Password confirmation is required</span>
            <span class="error-msg" v-if="password !== password2">Passwords do not match</span>
            <input type="password"
                   placeholder="Password confirmation"
                   @input="$v.password2.$reset"
                   :class="{'invalid': $v.password2.$dirty && ($v.password2.$invalid || password !== password2)}"
                   v-model.trim.lazy="$v.password2.$model">
        </label>
        <button @click="check">Register</button>
    </div>
</template>
<script>
    import {register} from '../api/api';
    import { required, email, minLength } from 'vuelidate/lib/validators'
    import Flash from "../components/error/Flash";
    export default {
        components: {
            'appFlash': Flash
        },
        data() {
            return {
                username: 'Morten12',
                email: 'mortenzwarenstein@hotmail.com',
                password: 'mor',
                password2: 'mor',
                errors: []
            }
        },
        validations: {
            username: {
              required,
              minLength: minLength(6)
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6)
            },
            password2: {
                required
            }
        },
        methods: {
            async check(){
                this.$v.$touch();
                if(this.formValid){
                    this.errors = [];
                    let values = {
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        password2: this.password2
                    }

                    let res = await register(values);
                    if(res.success){
                        this.$store.dispatch('login', {
                            user: res.data.user
                        });
                        this.$router.push('/')
                    } else {
                        this.errors = res.errors;
                    }
                }
            }
        },
        computed: {
            formValid() {
                return !this.$v.$error
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
        span.error-msg{
            color: red;
            font-size: 12px;
            margin-bottom: 3px;
        }
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
