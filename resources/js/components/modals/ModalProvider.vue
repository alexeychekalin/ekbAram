<template>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-width-3-4">
        <div class="uk-margin uk-modal-container-large">
            <h3 class="uk-card-title">Новый поставщик</h3>
            <div class="uk-grid-small" uk-grid>
                <form @submit.prevent="newProvider()" class="uk-width-1-1">
                    <div class="uk-grid-match uk-child-width-1-1@s" uk-grid>
                        <div>
                            <div class="uk-card-default uk-card-body">
                                <div class="uk-grid-small" uk-grid>
                                    <div class="uk-width-1-2@s">
                                        <label class="uk-form-label">Legal Name</label>
                                        <input class="uk-input" type="text" required placeholder="" required v-model="name" >
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
                            </div>
                            <button class="uk-button uk-button-primary uk-width-1-3@m uk-width-1-1@s uk-align-center uk-margin-bottom"> Сохранить </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {eventBus} from "../../app";

export default {
    name: "AllProvider",
    data:() => ({
        name: '',
        address:'',
        address1:'',
        address2:'',
        tradename:'',
        email:'',
        fax:'',
        phone:'',
        contact:''
    }),
    methods:{
        newProvider(){
            axios.post('/api/provider', {
                name: this.name,
                address: this.address,
                address1: this.address1,
                tradename: this.tradename,
                email: this.email,
                fax: this.fax,
                phone: this.phone,
                contact: this.contact,})
                .then(res =>{
                    UIkit.notification({message: 'Новый поставщик добавлен', status:'success'})
                    this.name = ''
                    this.address = ''
                    this.address1 = ''
                    this.tradename = ''
                    this.email = ''
                    this.fax = ''
                    this.phone = ''
                    this.contact = ''
                    eventBus.$emit('newProvider', {
                        status: 'yes'
                    })
                })
                .catch(error => {
                    UIkit.notification({message: error, status:'danger'})
                    console.log(error);
                })
        }
    },
    mounted() {
    }
}
</script>

<style scoped>

</style>
