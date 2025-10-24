<template>
    <div class="uk-width-1-1 uk-padding uk-padding-remove-top">
        <loading
            :show="show2"
            :label="label">
        </loading>
        <h1 class="uk-text-center">Supplier List </h1>
        <div id="modal-change" uk-modal>
            <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-width-3-4">
                <div class="uk-margin uk-modal-container-large">
                    <h3 class="uk-card-title">Edit/Update</h3>
                    <div class="uk-grid-small" uk-grid>
                        <form @submit.prevent="updateProvider()" class="uk-width-1-1">
                            <div class="uk-grid-match uk-child-width-1-1@s" uk-grid>
                                <div>
                                    <div class="uk-card-default uk-card-body">
                                        <div class="uk-grid-small" uk-grid>
                                            <div class="uk-width-1-2@s">
                                                <label class="uk-form-label">Legal Name</label>
                                                <input class="uk-input" type="text" required placeholder="" v-model="name" >
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
                                                <input class="uk-input" type="text" required placeholder="" v-model="address1" >
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
                            <th> Actions </th>
                        </tr>
                        </thead>
                        <tbody v-for="(result, cnt) in results"  :id="result.id">
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
                            <td>
                                <ul class="uk-iconnav">
                                    <li><a uk-icon="icon: file-edit" uk-tooltip="Edit/Update" @click.prevent="show([result.id, result.name, result.address, result.address1, result.address2, result.email, result.phone, result.country, result.contact, result.tradename, result.status_provider])"></a></li>
                                    <li><a uk-icon="icon: trash" uk-tooltip="title: Remove ; pos: bottom" @click.prevent="deleteProvider([result.id, cnt, result.name])"></a></li>
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
import loading from "vue-full-loading";
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
        status_provider: '',
        statuses_provider:['Approved', 'Active', 'Pending', 'On Hold', 'Disqualified', 'Dormant'],
        results: [],
        allresults:[],
        val:'',
        id:'',
        fields : {
            'ID' : 'id',
            'P/N' : 'pn',
            'Описание' : 'description'
        },
        show2: false,
        label: 'Loading...'
    }),
    components:{
        loading
    },
    methods:{
        getProvider (){
            axios.get('/api/provider')
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
            this.name = param[1]
            this.address = param[2]
            this.address1 = param[3]
            this.address2 = param[4]
            this.email = param[5]
            this.country = param[6]
            this.phone = param[7]
            this.contact = param[8]
            this.id = param[0]
            this.tradename = param[9]
            this.status_provider = param[10]
        },
        updateProvider(param){
            this.show2 = true
            axios.post('/api/provider/update', {
                                                        id: this.id,
                                                        name: this.name,
                                                        address: this.address,
                                                        address1: this.address1,
                                                        address2: this.address2,
                                                        email: this.email,
                                                        country: this.country,
                                                        phone: this.phone,
                                                        contact: this.contact,
                                                        tradename: this.tradename,
                                                        status_provider: this.status_provider
            })
                .then(res => {
                    this.show2 = false
                    UIkit.notification({message: 'Supplier updated!'})
                    UIkit.modal("#modal-change").hide()
                }).catch(({response:{data}})=>{
                this.show2 = false
                UIkit.notification({message: 'Fatal error on update. Please contact admin'})
            }).finally(()=>{
                UIkit.modal("#modal-change").hide()
                this.getProvider();
                })
        },
        deleteProvider(param){
            UIkit.modal.confirm('Please confirm you wish to remove supplier "'+param[2]+'"').then((answer)=> {
                this.show2 = true
                axios.post('/api/provider/delete', {id: param[0], name: 'null', address: 'null', email: 'null'})
                    .then(res => {
                        this.show2 = true
                        UIkit.notification({message: 'Supplier deleted!'})
                        this.results.splice(param[1],1)
                        this.allresults.splice(param[1],1)
                    }).catch(({response:{data}})=>{
                    this.show2 = true
                    UIkit.notification({message: 'Error on delete Supplier. Supplier has another orders'})
                }).finally(()=>{
                    UIkit.modal("#modal-change").hide()
                    this.getProvider();
                })
            },function () {});
        }
    },
    mounted() {
        this.getProvider()
    }
}
</script>

<style scoped>

</style>
