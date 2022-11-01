<template>
    <div class="uk-width-1-1 uk-padding uk-padding-remove-top">
        <loading
            :show="show2"
            :label="label">
        </loading>
        <h1 class="uk-text-center">Список всех клиентов</h1>
        <div id="modal-change" uk-modal>
            <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-width-3-4">
                <div class="uk-margin uk-modal-container-large">
                    <h3 class="uk-card-title">Редактирование клиента</h3>
                    <div class="uk-grid-small" uk-grid>
                        <form @submit.prevent="updateСlients()" class="uk-width-1-1">
                            <div class="uk-grid-match uk-child-width-1-1@s" uk-grid>
                                <div>
                                    <div class="uk-card-default uk-card-body">
                                        <div class="uk-grid-small" uk-grid>
                                            <div class="uk-width-expand">
                                                <label class="uk-form-label">Customer Name</label>
                                                <input class="uk-input" type="text" required placeholder="" v-model="name" :class="checkedName" @blur="checkName">
                                            </div>
                                            <div class="uk-width-1-4@s">
                                                <label class="uk-form-label">Reference number</label>
                                                <input class="uk-input" type="text" required placeholder="" v-model="code" >
                                            </div>
                                            <!--
                                            <div class="uk-width-1-4@s">
                                                <label class="uk-form-label">IPO</label>
                                                <input class="uk-input" type="text" placeholder="" v-model="ipo" >
                                            </div>
                                            -->
                                        </div>
                                        <div class="uk-grid-small" uk-grid>
                                            <div class="uk-width-1-2@s">
                                                <label class="uk-form-label">Bill to Address</label>
                                                <input class="uk-input" type="text" required placeholder="" v-model="address" >
                                            </div>
                                            <div class="uk-width-1-2@s">
                                                <label class="uk-form-label">Ship to Address</label>
                                                <input class="uk-input" type="text" required placeholder=""  v-model="address1" >
                                            </div>
                                        </div>
                                        <div class="uk-grid-small" uk-grid>
                                            <div class="uk-width-1-3@s">
                                                <label class="uk-form-label">E-mail</label>
                                                <input class="uk-input" type="text" required placeholder="" v-model="email" >
                                            </div>
                                            <div class="uk-width-1-3@s">
                                                <label class="uk-form-label">Phone</label>
                                                <input class="uk-input" type="text" required placeholder="" v-model="phone" >
                                            </div>
                                            <div class="uk-width-1-3@s">
                                                <label class="uk-form-label">Primary Contact</label>
                                                <input class="uk-input" type="text" required placeholder="" v-model="contact" >
                                            </div>
                                        </div>
                                        <div class="uk-grid-small" uk-grid>
                                            <div class="uk-width-1-2@s">
                                                <label class="uk-form-label">Alternate Ship to</label>
                                                <input class="uk-input" type="text" placeholder="" v-model="address2" >
                                            </div>
                                            <div class="uk-width-1-2@s">
                                                <label class="uk-form-label">Alternate Ship to 2</label>
                                                <input class="uk-input" type="text" placeholder="" v-model="address3" >
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
                            <input class="uk-input uk-width-1-1 search-fld" type="text" placeholder="Поиск по Имени" v-model="val" @input="filter(val)">
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
                            <th class="">Customer Name</th>
                            <th class="">Bill to Address</th>
                            <th class="">Ship to Address</th>
                            <th class="">E-mail</th>
                            <th class="">Phone</th>
                            <th class="">Reference number</th>
                            <th class="">Primary contact</th>
                            <th class="">Действия</th>
                        </tr>
                        </thead>
                        <tbody v-for="(result, cnt) in results"  :id="result.id">
                        <tr>
                            <td>{{cnt + 1}}</td>
                            <td>{{result.name || '-'}}</td>
                            <td class="uk-text-nowrap">{{result.address || '-'}}</td>
                            <td class="uk-text-truncate">{{result.address1 || '-'}}</td>
                            <td>{{result.email || '-'}}</td>
                            <td>{{result.phone || '-'}}</td>
                            <td>{{result.code || '-'}}</td>
                            <td>{{result.contact || '-'}}</td>
                            <td>
                                <ul class="uk-iconnav">
                                    <li><a uk-icon="icon: file-edit" uk-tooltip="Редактировать" @click.prevent="show(result)"></a></li>
                                    <li><a uk-icon="icon: trash" uk-tooltip="title: Удалить; pos: bottom" @click.prevent="deleteClients(result.id, cnt)"></a></li>
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
    name: "AllClients",
    data:() => ({
        name: '',
        address:'',
        address1:'',
        address2:'',
        address3:'',
        email:'',
        phone:'',
        contact:'',
        code:'',
        ipo:'',
        results: [],
        allresults:[],
        val:'',
        id:'',
        checkedName:'',
        show2: false,
        label: 'Loading...'
    }),
    methods:{
        checkName(){
            if(this.name === '')
                return;
            axios.post('/api/check/client', {name: this.name})
                .then(res =>{
                    console.log(res);
                    if(res.data.length == 0){
                        this.$data.checkedName = 'uk-form-success'
                    }else{
                        this.$data.checkedName = 'uk-form-danger'
                        UIkit.notification({message: 'Клиент с таким "Customer Name" уже существует'})
                    }
                })
                .catch(error => {
                    UIkit.notification({message: error, status:'danger'})
                })
        },
        getClients (){
            axios.get('/api/clients')
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
            this.name = param.name
            this.address = param.address
            this.address1 = param.address1
            this.address2 = param.address2
            this.email = param.email
            this.phone = param.phone
            this.contact = param.contact
            this.id = param.id
            this.address3 = param.address3
            this.code = param.code
            //this.ipo = param.ipo
        },
        updateСlients(param){
            this.show2 = true
            axios.post('/api/clients/update', {
                                                        id: this.id,
                                                        name: this.name,
                                                        address: this.address,
                                                        address1: this.address1,
                                                        address2: this.address2,
                                                        email: this.email,
                                                        phone: this.phone,
                                                        contact: this.contact,
                                                        address3: this.address3,
                                                        code: this.code,
                                                       // ipo: this.ipo
            })
                .then(res => {
                    this.show2 = false
                    UIkit.notification({message: 'Клиент обновлен'})
                    UIkit.modal("#modal-change").hide()
                }).catch(({response:{data}})=>{
                this.show2 = false
                UIkit.notification({message: 'Ошибка изменения. Обратитесь к администратору'})
            }).finally(()=>{
                UIkit.modal("#modal-change").hide()
                this.getClients();
                })
        },
        deleteClients(param, cnt){
            this.show2 = true
            axios.post('/api/clients/delete', {id: param, name: 'null', address: 'null', email: 'null', code:'null'})
                .then(res => {
                    this.show2 = false
                    UIkit.notification({message: 'Клиент удален'})
                    this.results.splice(cnt,1)
                    this.allresults.splice(cnt,1)
                }).catch(({response:{data}})=>{
                UIkit.notification({message: 'Ошибка удаления. У клиента имеются заказы'})
            }).finally(()=>{
                UIkit.modal("#modal-change").hide()
                this.getClients();
            })
        }
    },
    mounted() {
        this.getClients()
    },
    components:{
        loading
    },
}
</script>

<style scoped>

</style>
