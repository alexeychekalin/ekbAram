<template>
    <div class="uk-width-1-1 uk-padding uk-padding-remove-top">
        <loading
            :show="show2"
            :label="label">
        </loading>
        <h1 class="uk-text-center">New Supplier</h1>
        <form @submit.prevent="newProvider()" class="uk-width-1-1">
            <div class="uk-grid-match uk-child-width-1-1@s" uk-grid>
                <div>
                    <div class="uk-card-default uk-card-body">
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-2@s">
                                <label class="uk-form-label">Legal Name</label>
                                <input class="uk-input" type="text" required placeholder="" required v-model="name" :class="checkedName" @blur="checkName">
                            </div>
                            <div class="uk-width-1-2@s">
                                <label class="uk-form-label">Supplier Code</label>
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
                    <button class="uk-button uk-button-primary uk-width-1-3@m uk-width-1-1@s uk-align-center uk-margin-bottom"> Add  </button>
                </div>
            </div>
        </form>
        <table class="uk-table uk-table-hover uk-table-middle uk-table-divider" style="background-color: white;" v-if="results.length != 0">
            <thead>
            <tr>
                <th class="uk-table-shrink">#</th>
                <th class="">Legal Name</th>
                <th class="">Supplier Code</th>
                <th class="">Bill to Address</th>
                <th class="">Ship from Address</th>
                <th class="">Email</th>
                <th class="">Phone</th>
                <th class="">Country</th>
                <th class="">Primary Contact</th>
                <th class="">Status</th>
            </tr>
            </thead>
            <tbody v-for="(result, cnt) in results">
            <tr>
                <td>{{cnt + 1}}</td>
                <td>{{result.name || '-'}}</td>
                <td>{{result.tradename || '-'}}</td>
                <td class="uk-text-nowrap">{{result.address || '-'}}</td>
                <td class="uk-text-truncate">{{result.address1 || '-'}}</td>
                <td>{{result.email || '-'}}</td>
                <td>{{result.phone || '-'}}</td>
                <td>{{result.country || '-'}}</td>
                <td>{{result.contact || '-'}}</td>
                <td>{{statuses_provider[result.status_provider-1]}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import loading from "vue-full-loading";

export default {
    name: "NewProvider",
    data:() => ({
        name: '',
        address:'',
        address1:'',
        tradename:'',
        email:'',
        country:'',
        phone:'',
        contact:'',
        result:'',
        results: [],
        show2: false,
        label: 'Loading...',
        checkedName:'',
        status_provider:'',
        statuses_provider:['Approved', 'Active', 'Pending', 'On Hold', 'Disqualified', 'Dormant'],
    }),
    components:{
        loading
    },
    methods:{
        newProvider(){
            if(this.checkedName !== 'uk-form-success'){
                UIkit.notification({message: 'Customer already exist'})
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
                    UIkit.notification({message: 'New customer added!', status:'success'})
                    this.$data.results.push(
                        {
                            name: this.name,
                            address: this.address,
                            address1: this.address1,
                            tradename: this.tradename,
                            email: this.email,
                            country: this.country,
                            phone: this.phone,
                            contact: this.contact,
                            status_provider: this.status_provider
                        }
                    )
                    this.name = ''
                    this.address = ''
                    this.address1 = ''
                    this.tradename = ''
                    this.email = ''
                    this.country = ''
                    this.phone = ''
                    this.contact = ''
                    this.status_provider = ''
                    this.show2 = false
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
                        UIkit.notification({message: 'Customer already exist'})
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
