<template>
    <div class="toggle-class uk-width-medium uk-padding-small" >
        <fieldset class="uk-fieldset">
            <img class="uk-margin-bottom" src="../../../public/images/logo.png" alt="">
            <div class="uk-margin-small">
                <div class="uk-inline uk-width-1-1">
                    <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: phone"></span>
                    <input class="uk-input" v-model="auth.phone" id='phone'  type="text">
                </div>
            </div>
            <div class="uk-margin-small">
                <div class="uk-inline uk-width-1-1">
                    <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
                    <input class="uk-input"  v-model="auth.password"  id='password'  type="password">
                </div>
            </div>
            <!--
            <div class="uk-margin-small">
                <div class="uk-inline uk-width-1-1">
                    <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: database"></span>
                    <select class="uk-select" required >
                        <option value="1">БД Запчасти</option>
                        <option value="2">БД Продукты</option>
                    </select>
                </div>
            </div>
            -->
            <div class="uk-margin-top">
                <button class="uk-button uk-button-primary uk-border-pill uk-width-1-1" @click="login" >Enter</button>
            </div>
        </fieldset>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:"login",
    data(){
        return {
            auth:{
                phone:"",
                password:""
            },
            processing:false
        }
    },
    methods:{
        ...mapActions({
            signIn:'auth/login'
        }),
        async login(){
            this.processing = true
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/login',this.auth).then(({data})=>{
                this.signIn()
                localStorage.setItem('user', JSON.stringify(data.data))
            }).catch(({response:{data}})=>{
                UIkit.notification({message: 'Неверное имя пользователя или пароль'})
            }).finally(()=>{
                this.processing = false
            })
        },
    }
}
</script>

<style scoped>

</style>
