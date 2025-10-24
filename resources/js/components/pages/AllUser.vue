<template>
    <div class="uk-width-1-1 uk-padding uk-padding-remove-top">
        <loading
            :show="show2"
            :label="label">
        </loading>
        <h1 class="uk-text-center">User List</h1>
        <div id="modal-change" uk-modal>
            <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
                <div class="uk-margin uk-modal-container-large">
                    <h3 class="uk-card-title">Edit/Update</h3>
                    <div class="uk-grid-small" uk-grid>
                        <form @submit.prevent="updateUser()" class="uk-width-1-1">
                            <div class="uk-grid-match uk-child-width-1-1@s" uk-grid>
                                <div>
                                    <div class="uk-card-default uk-card-body">
                                        <div class="uk-grid-small" uk-grid>
                                            <div class="uk-width-1-3@s">
                                                <label class="uk-form-label">User Name</label>
                                                <input class="uk-input" type="text" placeholder="" required v-model="name" >
                                            </div>
                                            <div class="uk-width-1-3@s">
                                                <label class="uk-form-label">Email</label>
                                                <input class="uk-input" type="text" placeholder="" required v-model="phone" :class="checkedTel">
                                            </div>
                                            <div class="uk-width-1-3@s">
                                                <label class="uk-form-label">Password</label>
                                                <input class="uk-input" type="text" placeholder="" v-model="password" >
                                            </div>
                                            <div class="uk-width-1-3@s">
                                                <label class="uk-form-label">User Code</label>
                                                <input class="uk-input" type="text" placeholder="" required v-model="prefix">
                                            </div>
                                            <div class="uk-width-1-3@s">
                                                <label class="uk-form-label">Role</label>
                                                <select class="uk-select" required v-model="role">
                                                    <option value="1">Admin</option>
                                                    <option value="2">Associate</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="uk-button uk-button-primary uk-width-1-3@m uk-width-1-1@s uk-align-center uk-margin-bottom"> Add </button>
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
                            <input class="uk-input uk-width-1-1 search-fld" type="text" placeholder="Search" v-model="val" @input="filter(val)">
                        </div>
                    </div>
                </div>
            </div>
            <div class="uk-card-body uk-margin-medium-bottom uk-padding-remove-top">
                <div class="form-container uk-overflow-auto">
                    <table class="uk-table uk-table-hover uk-table-middle uk-table-divider" style="background-color: white;">
                        <thead>
                        <tr>
                            <th class="uk-table-shrink">Num</th>
                            <th class="">User Name</th>
                            <th class="">Email</th>
                            <th class="">User Code</th>
                            <th class="">Role</th>
                            <th class="">Actions</th>
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
                                    <li><a uk-icon="icon: file-edit" uk-tooltip="Edit/Update" @click.prevent="show([result.name, result.phone, result.prefix, result.role, result.id])"></a></li>
                                    <li><a uk-icon="icon: trash" uk-tooltip="title: Remove; pos: bottom" @click.prevent="deleteUser([result.id, cnt, result.name])"></a></li>
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
import loading from 'vue-full-loading'
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
        roles:['Admin', 'Associate'],
        checkedTel:'',
        password:'',
        id:'',
        fields : {
            'ID' : 'id',
            'ФИО' : 'name',
            'Телефон' : 'phone',
            'Роль' : 'role',
            'Префикс' : 'prefix'
        },
        show2: false,
        label: 'Loading...'
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
                        UIkit.notification({message: 'User already exist'})
                    }
                })
                .catch(error => {
                    UIkit.notification({message: error, status:'danger'})
                })
        },
        updateUser(){
            this.show2= true
            axios.post('/api/users/update',{id: this.id, name: this.name, password: this.password || 'null', phone: this.phone, prefix: this.prefix, role: this.role})
                .then(res => {
                    this.show2 = false
                    UIkit.modal("#modal-change").hide()
                    UIkit.notification({message: 'User updated'})
                }).catch(({response:{data}})=>{
                    this.show2 = false
                UIkit.notification({message: 'Fatal error on update. Please contact admin'})
            }).finally(()=>{
                UIkit.modal("#modal-change").hide()
                this.getUsers();
                })
        },
        deleteUser(param){
            UIkit.modal.confirm('Please confirm you wish to remove user "' + param[2]+'"').then((answer)=> {
                this.show2 = true
                axios.post('/api/users/delete', {
                    id: param[0],
                    name: 'null',
                    password: 'null',
                    phone: 'null',
                    prefix: 'null',
                    role: 0
                })
                    .then(res => {
                        this.show2 = false
                        UIkit.notification({message: 'User deleted'})
                        this.results.splice(param[1], 1)
                        this.allresults.splice(param[1], 1)
                    }).catch(({response: {data}}) => {
                    this.show2 = false
                    UIkit.notification({message: 'Fatal error on delete. Please contact admin'})
                }).finally(() => {
                    UIkit.modal("#modal-change").hide()
                    this.getUsers();
                })
            },function () {});
        }
    },
    mounted() {
        axios.get('/sanctum/csrf-cookie')
        this.getUsers()
    },
    components:{
        loading
    },
}
</script>

<style scoped>

</style>
