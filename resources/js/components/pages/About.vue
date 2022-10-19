<template>
    <div class="uk-width-1-1 uk-padding uk-padding-remove-top">
        <h1 class="uk-text-center">Информация о компании </h1>
        <form @submit.prevent="updateCompany()" class="uk-width-1-1">
            <div class="uk-grid-match uk-child-width-1-1@s" uk-grid>
                <div>
                    <div class="uk-card-default uk-card-body">
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">Company name</label>
                                <input class="uk-input" type="text" required placeholder=""  v-model="name" >
                            </div>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">Bill to Address</label>
                                <input class="uk-input" type="text" required placeholder="" v-model="address" >
                            </div>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">E-mail</label>
                                <input class="uk-input" type="text" placeholder="" required v-model="email" >
                            </div>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">Phone</label>
                                <input class="uk-input" type="text" placeholder="" required v-model="phone" >
                            </div>
                        </div>
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-3@s">
                                <label class="uk-form-label">License (if applicable)</label>
                                <input class="uk-input" type="text" placeholder="" required  v-model="licence" >
                            </div>
                            <div class="uk-width-1-3@s">
                                <label class="uk-form-label">Bank</label>
                                <input class="uk-input" type="text" placeholder="" required v-model="bank" >
                            </div>
                            <div class="uk-width-1-3@s">
                                <label class="uk-form-label">Bank Address</label>
                                <input class="uk-input" type="text" placeholder="" required v-model="baddress" >
                            </div>
                        </div>
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">Reg. No / TRN</label>
                                <input class="uk-input" type="text" placeholder="" required v-model="inn" >
                            </div>
                            <!--
                            <div class="uk-width-1-3@s">
                                <label class="uk-form-label">IBAN</label>
                                <input class="uk-input" type="text" placeholder="" v-model="iban" >
                            </div>
                            -->
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">Swift</label>
                                <input class="uk-input" type="text" placeholder="" required v-model="swift" >
                            </div>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">Branch (if applicable)</label>
                                <input class="uk-input" type="text" placeholder="" required v-model="branch" >
                            </div>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">Account Number</label>
                                <input class="uk-input" type="text" placeholder="" required v-model="accountNumber" >
                            </div>
                        </div>
                    </div>
                    <button class="uk-button uk-button-primary uk-width-1-3@m uk-width-1-1@s uk-align-center uk-margin-bottom"> Сохранить </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "About",
    data:() => ({
        name: '',
        address:'',
        code:'',
        email:'',
        phone:'',
        inn:'',
        iban:'',
        swift:'',
        bank:'',
        baddress:'',
        licence:'',
        branch:'',
        accountNumber:''
    }),
    methods:{
        updateCompany(){
            axios.post('/api/about', {
                                                    name: this.name,
                                                    address: this.address,
                                                    code: this.code,
                                                    inn: this.inn,
                                                    email: this.email,
                                                    phone: this.phone,
                                                    iban: this.iban,
                                                    swift: this.swift,
                                                    bank: this.bank,
                                                    baddress: this.baddress,
                                                    licence: this.licence,
                                                    branch: this.branch,
                                                    accountNumber: this.accountNumber
            })
                .then(res =>{
                    UIkit.notification({message: 'Данные обновлены', status:'success'})
                })
                .catch(error => {
                    UIkit.notification({message: error, status:'danger'})
                    console.log(error);
                })
        },
        getCompany(){
            axios.get('/api/about')
                .then(res =>{
                    this.name = res.data[0].name
                    this.address = res.data[0].address
                    this.code = res.data[0].code
                    this.inn = res.data[0].inn
                    this.email = res.data[0].email
                    this.phone = res.data[0].phone
                    this.iban = res.data[0].iban
                    this.swift = res.data[0].swift
                    this.bank = res.data[0].bank
                    this.baddress = res.data[0].baddress
                    this.licence = res.data[0].licence
                    this.branch = res.data[0].branch
                    this.accountNumber = res.data[0].accountNumber
                })
                .catch(error => {
                    UIkit.notification({message: error, status:'danger'})
                    console.log(error);
                })
        }
    },
    mounted() {
        this.getCompany();
    }
}
</script>

<style scoped>
</style>
