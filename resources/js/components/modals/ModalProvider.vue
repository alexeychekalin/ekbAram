<template>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-width-3-4">
        <loading
            :show="show2"
            :label="label">
        </loading>
        <div class="uk-margin uk-modal-container-large">
            <h3 class="uk-card-title">Add New Supplier</h3>
            <div class="uk-grid-small" uk-grid>
                <form @submit.prevent="newProvider()" class="uk-width-1-1">
                    <div class="uk-grid-match uk-child-width-1-1@s" uk-grid>
                        <div>
                            <div class="uk-card-default uk-card-body">
                                <div class="uk-grid-small" uk-grid>
                                    <div class="uk-width-1-2@s">
                                        <label class="uk-form-label">Legal Name</label>
                                        <input class="uk-input" type="text" required placeholder="" required v-model="name" :class="checkedName" @blur="checkName" >
                                    </div>
                                    <div class="uk-width-1-2@s">
                                        <label class="uk-form-label">Trade Name</label>
                                        <input class="uk-input" type="text" placeholder="" v-model="tradename" >
                                    </div>
                                </div>
                                <div class="uk-grid-small" uk-grid>
                                    <div class="uk-width-1-2@s">
                                        <label class="uk-form-label">Bill to Address</label>
                                        <input class="uk-input" type="text" placeholder="" required v-model="address" >
                                    </div>
                                    <div class="uk-width-1-2@s">
                                        <label class="uk-form-label">Ship from Address</label>
                                        <input class="uk-input" type="text" placeholder="" v-model="address1" >
                                    </div>
                                </div>
                                <div class="uk-grid-small" uk-grid>
                                    <div class="uk-width-1-5@s">
                                        <label class="uk-form-label">E-mail</label>
                                        <input class="uk-input" type="text" required placeholder="" required v-model="email" >
                                    </div>
                                    <div class="uk-width-1-5@s">
                                        <label class="uk-form-label">Phone</label>
                                        <input class="uk-input" type="text" placeholder="" v-model="phone" >
                                    </div>
                                    <div class="uk-width-1-5@s">
                                        <label class="uk-form-label">Country</label>
                                        <input class="uk-input" type="text" placeholder="" v-model="country" >
                                    </div>
                                    <div class="uk-width-1-5@s">
                                        <label class="uk-form-label">Primary Contact</label>
                                        <input class="uk-input" type="text" placeholder="" v-model="contact" >
                                    </div>
                                    <div class="uk-width-1-5@s">
                                        <label class="uk-form-label">Status</label>
                                        <select class="uk-select" required v-model="status_provider">
                                            <option value="1">Approved</option>
                                            <option value="2">Active</option>
                                            <option value="3">Pending</option>
                                            <option value="4">On Hold</option>
                                            <option value="5">Disqualified</option>
                                            <option value="6">Dormant</option>
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
</template>

<script>
import {eventBus} from "../../app";
import loading from 'vue-full-loading'
export default {
    name: "AllProvider",
    data:() => ({
        name: '',
        address:'',
        address1:'',
        address2:'',
        tradename:'',
        email:'',
        country:'',
        phone:'',
        contact:'',
        show2: false,
        label: 'Loading...',
        checkedName:'',
        status_provider:''
    }),
    methods:{
        newProvider(){
            if(this.checkedName !== 'uk-form-success'){
                UIkit.notification({message: 'Клиент с таким "Customer Name" уже существует'})
                return;
            }
            this.show2 = true
            axios.post('/api/provider', {
                name: this.name,
                address: this.address,
                address1: this.address1,
                tradename: this.tradename,
                email: this.email,
                country: this.country,
                phone: this.phone,
                contact: this.contact,
                status_provider: this.status_provider})
                .then(res =>{
                    this.show2 = false
                    UIkit.notification({message: 'Новый поставщик добавлен', status:'success'})
                    this.name = ''
                    this.address = ''
                    this.address1 = ''
                    this.tradename = ''
                    this.email = ''
                    this.country = ''
                    this.phone = ''
                    this.contact = ''
                    this.status_provider = ''
                    eventBus.$emit('newProvider', {
                        status: 'yes'
                    })
                })
                .catch(error => {
                    this.show2 = false
                    UIkit.notification({message: error, status:'danger'})
                    console.log(error);
                })
        },
        checkName(){

            if(this.name === '')
                return;
            axios.post('/api/check/provider', {name: this.name})
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
    },
    components:{
        loading
    }
}
</script>

<style scoped>

</style>
