<template>
    <div class="uk-grid-small uk-padding-remove-top uk-padding">
        <loading
            :show="show2"
            :label="label">
        </loading>
        <h1 class="uk-text-center">Добавление пользователей</h1>
        <form @submit.prevent="newUser()" class="uk-width-1-1">
            <div class="uk-grid-match uk-child-width-1-1@s" uk-grid>
                <div>
                    <div class="uk-card-default uk-card-body">
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-3@s">
                                <label class="uk-form-label">ФИО</label>
                                <input class="uk-input" type="text" placeholder="" required v-model="name" >
                            </div>
                            <div class="uk-width-1-3@s">
                                <label class="uk-form-label">Телефон</label>
                                <input class="uk-input" type="text" placeholder="" required pattern="\d+" v-model="phone" :class="checkedTel" @blur="checkPhone">
                            </div>
                            <div class="uk-width-1-3@s">
                                <label class="uk-form-label">Пароль</label>
                                <input class="uk-input" type="text" placeholder="" required v-model="password" >
                            </div>
                            <div class="uk-width-1-3@s">
                                <label class="uk-form-label">Префикс</label>
                                <input class="uk-input" type="text" placeholder="" required v-model="prefix">
                            </div>
                            <div class="uk-width-1-3@s">
                                <label class="uk-form-label">Роль</label>
                                <select class="uk-select" required v-model="role">
                                    <option value="1">Админ</option>
                                    <option value="2">Менеджер</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button class="uk-button uk-button-primary uk-width-1-3@m uk-width-1-1@s uk-align-center uk-margin-bottom"> Сохранить </button>
                </div>
            </div>
        </form>
        <table class="uk-table uk-table-hover uk-table-middle uk-table-divider" style="background-color: white;" v-if="results.length != 0">
            <thead>
            <tr>
                <th class="uk-table-shrink">#</th>
                <th class="">ФИО</th>
                <th class="">Телефон</th>
                <th class="">Префикс</th>
                <th class="">Роль</th>
            </tr>
            </thead>
            <tbody v-for="(result, cnt) in results">
            <tr>
                <td>{{cnt + 1}}</td>
                <td>{{result.name || '-'}}</td>
                <td class="uk-text-nowrap">{{result.phone || '-'}}</td>
                <td>{{result.prefix || '-'}}</td>
                <td class="uk-text-nowrap">{{roles[result.role-1]}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import loading from 'vue-full-loading'
export default {
    name: "NewUser",
    data:() => ({
        name: '',
        phone: '',
        prefix: '',
        password: '',
        role: '',
        result:'',
        results: [],
        roles:['Админ', 'Менеджер'],
        checkedTel:'',
        show2: false,
        label: 'Loading...'
    }),
    components:{
        loading
    },
    methods:{
        newUser(){
            if(this.checkedTel !== 'uk-form-success'){
                UIkit.notification({message: 'Пользователь с данным номером существует в системе'})
                return;
            }
            this.show2 = true
            axios.post('/api/users', {name: this.name, password: this.password, phone: this.phone, prefix: this.prefix, role: this.role})
                .then(res =>{
                    this.show2 = false
                    UIkit.notification({message: 'Пользователь добавлен!', status:'success'})
                    this.$data.results.push(
                        {
                            name : this.name,
                            phone: this.phone,
                            prefix: this.prefix,
                            role: this.role
                        }
                    )
                    this.name = ''
                    this.prefix = ''
                    this.password = ''
                    this.role = ''
                    this.phone = ''
                    this.checkedTel = ''
                })
                .catch(error => {
                    this.show2 = false
                    UIkit.notification({message: error, status:'danger'})
                })
        },
        checkPhone(){
            if(this.phone === '')
                return;
            axios.post('/api/check/phone', {Phone: this.phone})
                .then(res =>{
                    console.log(res);
                    if(res.data.length == 0){
                        this.$data.checkedTel = 'uk-form-success'
                    }else{
                        this.$data.checkedTel = 'uk-form-danger'
                        UIkit.notification({message: 'Пользователь с данным номером существует в системе'})
                    }
                })
                .catch(error => {
                    UIkit.notification({message: error, status:'danger'})
                })
        },
    },
    mounted() {

    }
}
</script>

<style scoped>
.uk-notification {
    background-color: #0f6ecd;
}
</style>
