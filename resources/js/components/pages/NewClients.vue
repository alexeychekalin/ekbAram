<template>
    <div class="uk-width-1-1 uk-padding uk-padding-remove-top">
        <h1 class="uk-text-center">Добавление нового клиента</h1>
        <form @submit.prevent="newClients()" class="uk-width-1-1">
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
                                <input class="uk-input" type="text" placeholder="" required v-model="address1" >
                            </div>
                        </div>
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">E-mail</label>
                                <input class="uk-input" type="text" required placeholder="" required v-model="email" >
                            </div>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">Phone</label>
                                <input class="uk-input" type="text" placeholder="" v-model="phone" >
                            </div>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">Fax</label>
                                <input class="uk-input" type="text" placeholder="" v-model="fax" >
                            </div>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">Primary Contact</label>
                                <input class="uk-input" type="text" placeholder="" v-model="contact" >
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
        <table class="uk-table uk-table-hover uk-table-middle uk-table-divider" style="background-color: white;" v-if="results.length != 0">
            <thead>
            <tr>
                <th class="uk-table-shrink">#</th>
                <th class="">Customer Name</th>
                <th class="">Bill to Address</th>
                <th class="">Ship to Address</th>
                <th class="">E-mail</th>
                <th class="">Phone</th>
                <th class="">Fax</th>
                <th class="">Reference number</th>
                <th class="">Primary contact</th>
            </tr>
            </thead>
            <tbody v-for="(result, cnt) in results">
            <tr>
                <td>{{cnt + 1}}</td>
                <td>{{result.name || '-'}}</td>
                <td class="uk-text-nowrap">{{result.address || '-'}}</td>
                <td class="uk-text-truncate">{{result.address1 || '-'}}</td>
                <td>{{result.email || '-'}}</td>
                <td>{{result.phone || '-'}}</td>
                <td>{{result.fax || '-'}}</td>
                <td>{{result.code || '-'}}</td>
                <td>{{result.contact || '-'}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "NewClients",
    data:() => ({
        name: '',
        address:'',
        address1:'',
        address2:'',
        address3:'',
        email:'',
        fax:'',
        phone:'',
        contact:'',
        code:'',
        ipo:'',
        result:'',
        results: [],
        checkedName:''
    }),
    methods:{
        newClients(){
            if(this.checkedName !== 'uk-form-success'){
                UIkit.notification({message: 'Клиент с таким "Customer Name" уже существует'})
                return;
            }
            axios.post('/api/clients', {
                name: this.name,
                address: this.address,
                address1: this.address1,
                address2: this.address2,
                email: this.email,
                fax: this.fax,
                phone: this.phone,
                contact: this.contact,
                address3: this.address3,
                code: this.code,
                ipo: this.ipo})
                .then(res =>{
                    UIkit.notification({message: 'Новый клиент добавлен', status:'success'})
                    this.$data.results.push(
                        {
                            name: this.name,
                            address: this.address,
                            address1: this.address1,
                            address2: this.address2,
                            email: this.email,
                            fax: this.fax,
                            phone: this.phone,
                            contact: this.contact,
                            address3: this.address3,
                            code: this.code,
                            ipo: this.ipo
                        }
                    )
                    this.name = ''
                    this.address = ''
                    this.address1 = ''
                    this.address2 = ''
                    this.address3 = ''
                    this.code = ''
                    this.ipo = ''
                    this.email = ''
                    this.fax = ''
                    this.phone = ''
                    this.contact = ''
                })
                .catch(error => {
                    UIkit.notification({message: error, status:'danger'})
                    console.log(error);
                })
        },
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
    },
    mounted() {

    }
}
</script>

<style scoped>
</style>
