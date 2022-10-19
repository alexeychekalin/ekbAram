<template>
    <div class="uk-width-1-1 uk-padding uk-padding-remove-top">
        <h1 class="uk-text-center">Список всех пользователей</h1>
        <div id="modal-change" uk-modal>
            <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
                <div class="uk-margin uk-modal-container-large">
                    <h3 class="uk-card-title">Редактирование пользователя</h3>
                    <div class="uk-grid-small" uk-grid>
                        <form @submit.prevent="updateUser()" class="uk-width-1-1">
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
                                                <input class="uk-input" type="text" placeholder="" required pattern="\d+" v-model="phone" :class="checkedTel">
                                            </div>
                                            <div class="uk-width-1-3@s">
                                                <label class="uk-form-label">Пароль</label>
                                                <input class="uk-input" type="text" required placeholder="" v-model="password" >
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
                    </div>
                </div>
            </div>
        </div>
        <div class="uk-card-default uk-card-small uk-card-hover">
            <div class="uk-card-header">
                <div class="uk-grid uk-grid-small">
                    <div class="uk-width-expand">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: search"></span>
                            <input class="uk-input uk-width-1-1 search-fld" type="text" placeholder="Поиск по ФИО" v-model="val" @input="filter(val)">
                        </div>
                    </div>
                </div>
            </div>
            <div class="uk-card-body uk-margin-medium-bottom uk-padding-remove-top">
                <div class="form-container uk-overflow-auto">
                    <table class="uk-table uk-table-hover uk-table-middle uk-table-divider" style="background-color: white;">
                        <thead>
                        <tr>
                            <th class="uk-table-shrink">#</th>
                            <th class="">ФИО</th>
                            <th class="">Телефон</th>
                            <th class="">Префикс</th>
                            <th class="">Роль</th>
                            <th class="">Действия</th>
                        </tr>
                        </thead>
                        <tbody v-for="(result, cnt) in results"  :id="result.id">
                        <tr>
                            <td>{{cnt + 1}}</td>
                            <td>{{result.name || '-'}}</td>
                            <td class="uk-text-nowrap">{{result.phone || '-'}}</td>
                            <td>{{result.prefix || '-'}}</td>
                            <td class="uk-text-nowrap">{{roles[result.role-1]}}</td>
                            <td>
                                <ul class="uk-iconnav">
                                    <li><a uk-icon="icon: file-edit" uk-tooltip="Редактировать" @click.prevent="show([result.name, result.phone, result.prefix, result.role, result.id])"></a></li>
                                    <li><a uk-icon="icon: trash" uk-tooltip="title: Удалить; pos: bottom" @click.prevent="deleteUser([result.id, cnt])"></a></li>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AllUser",
    data:() => ({
        name: '',
        phone: '',
        prefix: '',
        role: '',
        result:'',
        results: [],
        allresults:[],
        val:'',
        roles:['Администратор', 'Менеджер'],
        checkedTel:'',
        password:'',
        id:'',
        fields : {
            'ID' : 'id',
            'ФИО' : 'name',
            'Телефон' : 'phone',
            'Роль' : 'role',
            'Префикс' : 'prefix'
        }
    }),
    methods:{
        getUsers (){
            axios.get('/api/users')
                .then(res => {
                    this.$data.results = res.data;
                    this.$data.allresults = res.data;
                })
        },
        filter(val){
            if(val === ''){
                this.results = this.allresults;
            }else{
                this.results = this.allresults;
                const filterValue = (name) => {
                    return this.$data.results.filter(data => {
                        return data.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
                    });
                }
                this.results = filterValue(val)
            }
        },
        show(param){
            UIkit.modal("#modal-change").show()
            this.name = param[0]
            this.phone = param[1]
            this.prefix = param[2]
            this.role = param[3]
            this.id = param[4]
        },
        checkPhone(){
            axios.post('/api/check/phone', {Phone: this.phone})
                .then(res =>{
                    if(res.data.length === 0){
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
        updateUser(){
            axios.post('/api/users/update', {id: this.id, name: this.name, password: this.password || 'null', phone: this.phone, prefix: this.prefix, role: this.role})
                .then(res => {
                    UIkit.modal("#modal-change").hide()
                    UIkit.notification({message: 'Пользователь обновлен'})
                }).catch(({response:{data}})=>{
                UIkit.notification({message: 'Ошибка изменения. Обратитесь к администратору'})
            }).finally(()=>{
                UIkit.modal("#modal-change").hide()
                this.getUsers();
                })
        },
        deleteUser(param){
            axios.post('/api/users/delete', {id: param[0], name: 'null', password: 'null', phone: 'null', prefix: 'null', role: 0})
                .then(res => {
                    UIkit.notification({message: 'Пользователь удален'})
                    this.results.splice(param[1],1)
                    this.allresults.splice(param[1],1)
                }).catch(({response:{data}})=>{
                UIkit.notification({message: 'Ошибка удаления. Обратитесь к администратору'})
            }).finally(()=>{
                UIkit.modal("#modal-change").hide()
                this.getUsers();
            })
        }
    },
    mounted() {
        axios.get('/sanctum/csrf-cookie')
        this.getUsers()
    }
}
</script>

<style scoped>

</style>
