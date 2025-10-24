<template xmlns="http://www.w3.org/1999/html">
    <div class="uk-width-1-1 uk-padding uk-padding-remove-top">
        <loading
            :show="show2"
            :label="label">
        </loading>
        <div id="modal-newClient" class="uk-modal-container" uk-modal>
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <modalClients/>
        </div>
        <div id="modal-newParts" class="uk-modal-container" uk-modal>
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <modalParts/>
        </div>
        <div id="modal-newProvider" class="uk-modal-container" uk-modal>
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <modalProvider/>
        </div>
        <form @submit.prevent="createOrder" class="uk-width-1-1">
            <h1 class="uk-text-center">Edit Entry</h1>
            <div class="uk-grid-match uk-child-width-1-1@s" uk-grid>
                <div>
                    <div class="uk-card-default uk-card-body">
                        <h3 class="uk-card-title">Order Details</h3>
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">Order Number</label>
                                <input class="uk-input" type="text" placeholder="" required v-model="number" >
                            </div>
                            <div class="uk-width-1-6@s">
                                <label class="uk-form-label">Order Date</label>
                                <date-picker style="display: block" class="uk-input" required v-model="timeStart" @change="changeDate" valueType="format"></date-picker>
                            </div>
                            <div class="uk-width-1-6@s">
                                <label class="uk-form-label">Due Date</label>
                                <date-picker style="display: block" class="uk-input" required v-model="timeStop" valueType="format"></date-picker>
                            </div>
                            <div class="uk-width-auto@s">
                                <label class="uk-form-label">Currency</label>
                                <select class="uk-select" required v-model="currency" >
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="AED">AED</option>
                                </select>
                            </div>
                            <div class="uk-width-expand">
                                <label class="uk-form-label">Attach PO</label>
                                <div style="display: block" class="js-upload" uk-form-custom>
                                    <input v-on:change="onFileChange" type="file" single accept="application/pdf" >
                                    <button class="uk-button uk-button-default" type="button" tabindex="-1">Select file</button>
                                    <p style="display: inline" class="uk-margin-small-left uk-text-primary uk-text-medium">{{filename}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-card-default uk-card-body uk-margin-top">
                        <div class="uk-width-1-1" uk-grid>
                            <div>
                                <h3 class="uk-card-title">Customer</h3>
                            </div>
                            <div>
                                <select class="uk-select" required @change="selectClient" v-model="client" >
                                    <option v-for="(cl, index) in clients" v-bind:value="index">
                                        {{ cl.name }}
                                    </option>
                                </select>
                            </div>
                            <div style="margin-left: auto">
                                <a style="margin-top: 5px;" uk-tooltip="Add Customer" uk-icon="icon: credit-card" href="#modal-newClient" uk-toggle ></a>
                            </div>
                        </div>
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-expand">
                                <label class="uk-form-label">Customer Name</label>
                                <input class="uk-input" type="text" required placeholder="" v-model="nameClient" disabled>
                            </div>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">Reference number</label>
                                <input class="uk-input" type="text" required placeholder="" v-model="code" disabled>
                            </div>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">Primary Contact</label>
                                <input class="uk-input" type="text" placeholder="" v-model="contact" disabled>
                            </div>
                            <!--
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">IPO</label>
                                <input class="uk-input" type="text" placeholder="" v-model="ipo" >
                            </div>
                            -->
                        </div>
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-3@s">
                                <label class="uk-form-label">Bill to Address</label>
                                <input class="uk-input" type="text" required placeholder="" v-model="address" disabled >
                            </div>
                            <div class="uk-width-1-3@s">
                                <label class="uk-form-label">E-mail</label>
                                <input class="uk-input" type="text" required placeholder="" required v-model="email" disabled>
                            </div>
                            <div class="uk-width-1-3@s">
                                <label class="uk-form-label">Phone</label>
                                <input class="uk-input" type="text" placeholder="" v-model="phone" disabled>
                            </div>
                        </div>
                        <div class="uk-grid-small" uk-grid v-show="client !== ''">
                            <div class="uk-width-1-2@s">
                                <label class="uk-form-label">Ship to</label>
                                <select class="uk-select" @change="clearNewAddress" v-model="shipto" >
                                    <option :value="address1">
                                        {{address1}}
                                    </option>
                                    <option :value="address2" v-if="address2 != null">
                                        {{address2}}
                                    </option>
                                    <option :value="address3" v-if="address3 != null">
                                        {{address3}}
                                    </option>
                                </select>
                            </div>
                            <div class="uk-width-1-2@s">
                                <label class="uk-form-label">NEW SHIP ADDRESS</label>
                                <input class="uk-input" @blur="clearAddress" type="text" placeholder="" v-model="newaddress"  >
                            </div>
                        </div>
                    </div>
                    <div class="uk-card-default uk-card-body uk-margin-top">
                        <div class="uk-width-1-1" uk-grid>
                            <div>
                                <h3 class="uk-card-title">Order Items</h3>
                            </div>
                            <div style="margin-left: auto">
                                <a class="uk-margin-small-right"  uk-tooltip="Part Num" uk-icon="icon: cart" href="#modal-newParts" uk-toggle ></a>
                                <a uk-tooltip="New Supplier" uk-icon="icon: world" href="#modal-newProvider" uk-toggle ></a>
                            </div>
                        </div>
                        <div v-for="(order, index) in orders" :key="index" class="uk-margin-top">
                            <div class="uk-grid-small" uk-grid>
                                <div class="uk-width-1-6@s">
                                    <label class="uk-form-label">Part Num</label>
                                    <input class="uk-input" required  placeholder="" v-model="order.part"  @input="search(order.part, index)">
                                    <div uk-dropdown="pos: bottom-justify; boundary: .boundary-align; boundary-align: true; mode: click">
                                        <ul class="uk-list" >
                                            <li style="cursor: pointer" v-for="(p, ind) in filter" v-bind:value="p.id" @click.prevent="selectPosition(p.id, index)">
                                                {{ p.pn }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="uk-width-1-6@s">
                                    <label class="uk-form-label">Description</label>
                                    <input class="uk-input"  required placeholder="" v-model="descriptions[index].description" >
                                </div>
                                <div class="uk-width-1-4@s">
                                    <label class="uk-form-label">Supplier</label>
                                    <select class="uk-select" required v-model="order.provider" >
                                        <option v-for="pr in providers" v-bind:value="pr.id">
                                            {{ pr.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="uk-width-small@s">
                                    <label class="uk-form-label">Condition</label>
                                    <select class="uk-select" required v-model="order.cd" >
                                        <option value="NE">NE</option>
                                        <option value="OH">OH</option>
                                        <option value="SV">SV</option>
                                        <option value="RE">RE</option>
                                        <option value="AR">AR</option>
                                    </select>
                                </div>
                                <div class="uk-width-small@s">
                                    <label class="uk-form-label">Qty</label>
                                    <input class="uk-input" required type="number" placeholder="" v-model="order.quantity" @input="subttl(index)">
                                </div>
                                <div class="uk-width-small@s">
                                    <label class="uk-form-label">Rate</label>
                                    <input class="uk-input" required type="number" step="0.01" placeholder="" v-model="order.price" @input="subttl(index)">
                                </div>
                                <div class="uk-width-small@s">
                                    <label class="uk-form-label">Customer Price</label>
                                    <input class="uk-input" required type="number" step="0.01" placeholder="" v-model="order.priceClient" >
                                </div>
                                <div class="uk-width-small@s">
                                    <label class="uk-form-label">Subtotal</label>
                                    <input class="uk-input" disabled placeholder="" v-model="order.subtotal" >
                                </div>
                            </div>
                            <div class="uk-grid-small" uk-grid>
                                <div class="uk-width-1-5@s">
                                    <label class="uk-form-label">Serial/Batch</label>
                                    <input class="uk-input" required  placeholder="" v-model="order.sb" >
                                </div>
                                <div class="uk-width-1-5@s">
                                    <label class="uk-form-label">MFG</label>
                                    <input class="uk-input" required  placeholder="" v-model="order.mfg" >
                                </div>
                                <div class="uk-width-1-5@s">
                                    <label class="uk-form-label">COO</label>
                                    <input class="uk-input" required  placeholder="" v-model="order.coo" >
                                </div>
                                <div class="uk-width-1-5@s">
                                    <label class="uk-form-label">Sch. B</label>
                                    <input class="uk-input" required  placeholder="" v-model="order.schb" >
                                </div>
                                <div class="uk-width-1-5@s">
                                    <label class="uk-form-label">ECCN</label>
                                    <input class="uk-input" required  placeholder="" v-model="order.eccn" >
                                </div>
                            </div>
                            <div style="margin-top: 1.8%">
                                <a uk-tooltip="Remove" uk-icon="icon: trash" @click.prevent="deleteOrder(index)" v-show="index != 0" ></a>
                            </div>
                            <hr class="uk-margin-medium"/>
                        </div>
                        <button @click.prevent="addOrder" class="uk-button uk-width-1-4@m uk-width-1-1@s uk-align-center uk-margin-bottom"> Add Line Item </button>
                    </div>
                    <div class="uk-card-default uk-card-body uk-margin-top">
                        <div class="uk-width-1-1" uk-grid>
                            <div>
                                <h3 class="uk-card-title">Added cost</h3>
                            </div>
                        </div>
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-6@s">
                                <label class="uk-form-label">Freight Cost</label>
                                <input class="uk-input"  placeholder="" v-model="delivery">
                            </div>
                            <div class="uk-width-1-6@s">
                                <label class="uk-form-label">Wire Fee</label>
                                <input class="uk-input"  placeholder="" v-model="comission" >
                            </div>
                            <div class="uk-width-1-6@s">
                                <label class="uk-form-label">TERMS</label>
                                <input class="uk-input"  placeholder="" v-model="terms" >
                            </div>
                            <div class="uk-width-expand@s">
                                <label class="uk-form-label">W&D</label>
                                <input class="uk-input"  placeholder="" v-model="wd" >
                            </div>
                        </div>
                    </div>
                    <div class="uk-card-default uk-card-body uk-margin-top">
                        <div class="uk-width-1-1" uk-grid>
                            <div>
                                <h3 class="uk-card-title">Файлы</h3>
                            </div>
                        </div>
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-1@s">
                                <label class="uk-form-label">Add new files</label>
                                <div class="js-upload uk-placeholder uk-text-center">
                                    <span uk-icon="icon: cloud-upload"></span>
                                    <div uk-form-custom>
                                        <input type="file" v-on:change="OtherFileUpload">
                                        <span class="uk-link">Tap to select files</span>
                                    </div>
                                </div>
                            </div>
                            <div class="uk-width-1-2@s">
                                <label class="uk-form-label">Added files</label>
                                <ul class="uk-list uk-list-striped" v-for="(file, i) in files" :key="i">
                                    <li style="cursor: pointer" > <a @click.prevent="deleteFile(file, i)" class="uk-margin-small-right" uk-tooltip="delete file" uk-icon="trash"> </a>  <a @click.prevent="download(file)">{{ file }}</a> </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <button class="uk-button uk-button-primary uk-width-1-3@m uk-width-1-1@s uk-align-center uk-margin-bottom"> Save </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import {eventBus} from '../../app'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import modalClients from "../modals/ModalClient";
import modalParts from "../modals/ModalParts";
import modalProvider from "../modals/ModalProvider";
import store from '../../../store'
import loading from 'vue-full-loading'

export default {
    name: "NewOrder",
    data:() => ({
        description:'',
        filter: [],
        number: '',
        ipo: '',
        timeStart:'',
        timeStop:'',
        filename:'',
        file:'',
        clients: [],
        client:'',
        nameClient: '',
        address:'',
        address1:'',
        address2:'',
        address3:'',
        email:'',
        country:'',
        phone:'',
        contact:'',
        code:'',
        parts:[],
        providers:[],
        currency:'',
        orders:[],
        descriptions:[],
        shipto:'',
        newaddress:'',
        delivery:'',
        comission:'',
        fileChanged: false,
        terms:'',
        files:[],
        save: false,
        show2: false,
        label: 'Loading...wait',
        wd:'',
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }),
    components:{
        DatePicker, modalClients, modalParts, modalProvider, loading
    },
    methods:{
        subttl(index){
            console.log(index)
            this.orders[index].subtotal = this.orders[index].price*this.orders[index].quantity
        },
        download(name){
            this.show2 = true
            axios({
                url: "/api/fileupload/download/" + name + '/' + localStorage.getItem('changeid'),
                method: "GET",
                responseType: "blob", // important
            }).then((response) => {
                this.show2 = false
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement("a");
                link.href = url;
                let filename = response.headers['content-disposition'];
                link.setAttribute("download", filename.split('=')[1].replaceAll('"', ''));
                document.body.appendChild(link);
                link.click();
                link.remove();
            });

        },
        getFiles(){
            this.show2 = true
            axios.get('/api/fileupload/'+localStorage.getItem('changeid'))
                .then(res => {
                    this.show2 = false
                    this.$data.files = res.data;
                })
        },
        deleteFile(file, i){

            if(this.save)
                return;
            this.show2 = true
            const name = file.name ? file.name : file;
            if(i >= 0){
                this.files.length === 1 ? this.files = [] : this.files.splice(i,1)
            }
            axios.post('api/fileupload/delete', {name: name, id: localStorage.getItem('changeid')})
                .then(res =>{
                    this.show2 = false
                })
                .catch(error => {
                    this.show2 = false
                    UIkit.notification({message: error, status:'danger'})
                    console.log(error);
                })
        },
        changeDate(){
            this.timeStop = this.timeStart
        },
        search(val, index){
            if (!/^[A-Za-z0-9 -]*$/.test(val)) {
                this.orders[index].part = ''
                return;
            }
            const filterValue = (part) => {
                return this.$data.parts.filter(data => {
                    return data.pn.toLowerCase().indexOf(part.toLowerCase()) > -1;
                });
            }
            this.filter = filterValue(val).splice(0, 5)
        },
        selectPosition(ind, index){
            var i = this.parts.findIndex(x=> x.id === ind)
            this.orders[index].part = this.parts[i].pn
            this.descriptions[index].description = this.parts[i].description
        },
        clearAddress(){
            this.shipto = this.newaddress
        },
        clearNewAddress(){
            this.newaddress = ''
        },
        onFileChange(e){
            this.filename = e.target.files[0].name
            this.file = e.target.files[0]
            this.fileChanged = true;
        },
        OtherFileUpload(e){
            // upload file
            this.show2 = true
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            let formData = new FormData();
            formData.append('file', e.target.files[0]);
            axios.post('/api/fileupload/other/' + localStorage.getItem('changeid'), formData, config)
                .then(res =>{
                    this.show2 = false;
                        this.getFiles();

                        })
        },
        getClients (){
            axios.get('/api/clients')
                .then(res => {
                    this.$data.clients = res.data;
                })
        },
        selectClient(){
            this.nameClient = this.clients[this.client].name
            this.address = this.clients[this.client].address
            this.address1 = this.clients[this.client].address1
            this.address2 = this.clients[this.client].address2
            this.address3 = this.clients[this.client].address3
            this.phone = this.clients[this.client].phone
            this.fax = this.clients[this.client].fax
            this.email = this.clients[this.client].email
            this.contact = this.clients[this.client].contact
            this.code = this.clients[this.client].code
        },
        getParts(){
            axios.get('/api/parts',{withCredentials: true} )
                .then(res => {
                    this.$data.parts = res.data;
                })
        },
        getProvider(){
            axios.get('/api/provider')
                .then(res => {
                    this.$data.providers = res.data;
                })
        },
        addOrder(){
            this.filter = []
            this.orders.push(
                {
                    part: '',
                    provider: '',
                    price: '',
                    quantity:'',
                    order_number: '',
                    priceClient:'',
                    cd:'',
                    mfg:'TBD',
                    coo:'TBD',
                    schb: '8807300060',
                    eccn: '9A991.D',
                    sb:'TBD',
                    subtotal:''
                }
            )
            this.descriptions.push({
                description: ''
            })
        },
        deleteOrder(index){
            this.orders.splice(index,1)
            this.descriptions.splice(index,1)
        },
        createOrder(){
            this.save = true;
            if(this.shipto === ''){
                UIkit.notification({message: 'Not set delivery address', status:'danger'})
                return;
            }

            // upload file
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }

            this.show2 = true
            // add new parts in db
            this.orders.forEach((el, i) => {
                if(!this.parts.find(e => e.pn.toLowerCase() === el.part.toLowerCase())){
                    axios.post('/api/parts', {pn: el.part, description: this.descriptions[i].description})
                        .then(res =>{
                            UIkit.notification({message: 'New Item list added!', status:'success'})
                            this.orders[i].part = res.data.id;
                        })
                        .catch(error => {
                            UIkit.notification({message: error, status:'danger'})
                            console.log(error);
                        })
                }
                else{
                    this.orders[i].part = this.parts.find(el => el.pn === this.orders[i].part).id
                }
            })

            // update address3 if new posted
            if(this.newaddress !== ''){
                console.log(this.newaddress)
                axios.post('/api/clients/address',{name:'null', address:'null', email:'null', code:'null', id: this.clients[this.client].id, newaddress: this.shipto} )
                    .then(res => {
                        UIkit.notification({message: 'Customer address updated', status:'success'})
                        this.clients[this.client].address3 = this.shipto
                        this.address3 = this.shipto
                    })
                    .catch(function (error) {
                        this.show2 = false
                        UIkit.notification({message: error, status:'danger'})
                    });
            }
            if(this.fileChanged){
                let formData = new FormData();
                formData.append('file', this.file);
                axios.post('api/fileupload', formData, config)
                    .then(res =>{
                        this.ipo = res.data.success
                        // create order
                        axios.post('api/order/update', {
                            number: this.number,
                            datestart: this.timeStart,
                            dateend: this.timeStop,
                            ipo: this.ipo,
                            client:this.clients[this.client].id,
                            shipto:this.shipto,
                            manager:store.state.auth.user.id,
                            delivery: this.delivery,
                            comission: this.comission,
                            currency: this.currency,
                            terms : this.terms,
                            id: this.$route.params.id,
                            wd: this.wd
                        })
                            .then(response => {
                                // create order list
                                this.orders.forEach(el => {el.order_number = this.$route.params.id})
                                axios.post('api/orderlist', this.$data.orders)
                                    .then(response => {
                                        UIkit.notification({message: 'Order updated!', status:'success'})
                                        this.$router.push({name: 'dashboard'})
                                    })
                                    .catch(error => {
                                        this.show2 = false
                                        UIkit.notification({message: error, status:'danger'})
                                    });
                            })
                            .catch(error => {
                                this.show2 = false
                                UIkit.notification({message: error, status:'danger'})
                            });
                    })
                    .catch(error => {
                        this.show2 = false
                        UIkit.notification({message: error, status:'danger'})
                    });
            }
            else{
                // create order
                axios.post('api/order/update', {
                    number: this.number,
                    datestart: this.timeStart,
                    dateend: this.timeStop,
                    ipo: this.ipo,
                    client:this.clients[this.client].id,
                    shipto:this.shipto,
                    manager:store.state.auth.user.id,
                    delivery: this.delivery,
                    comission: this.comission,
                    currency: this.currency,
                    terms: this.terms,
                    id: this.$route.params.id,
                    wd: this.wd
                })
                    .then(response => {
                        // create order list
                        this.orders.forEach(el => {el.order_number = this.$route.params.id})
                        axios.post('api/orderlist', this.$data.orders)
                            .then(response => {
                                UIkit.notification({message: 'Order updated!', status:'success'})
                                this.$router.push({name: 'dashboard'})
                            })
                            .catch(error => {
                                this.show2 = false
                                UIkit.notification({message: error, status:'danger'})
                            });
                    })
                    .catch(error => {
                        this.show2 = false
                        UIkit.notification({message: error, status:'danger'})
                    });
            }
            this.show2 = false
        },
    },
    mounted() {
        this.show2 = true
        axios.get('/api/order/'+this.$route.params.id)
            .then(res => {
                //заполняем заказ
                this.number = res.data[0][0].number
                this.timeStart = res.data[0][0].datestart
                this.timeStop = res.data[0][0].dateend
                this.ipo = res.data[0][0].ipo
                this.client = this.clients.findIndex((x) => x.id === res.data[0][0].client)
                this.selectClient()
                this.shipto = res.data[0][0].shipto
                this.currency = res.data[0][0].currency
                this.filename = res.data[0][0].ipo
                this.delivery = res.data[0][0].delivery
                this.delivery = res.data[0][0].comission
                this.terms = res.data[0][0].terms
                this.wd = res.data[0][0].wd
                // заполняем позиции
                res.data[1].forEach(x => {
                    this.orders.push(
                        {
                            part: x.pn,
                            provider:x.prid,
                            price: x.price,
                            quantity: x.quantity,
                            order_number: x.order_number,
                            priceClient:x.priceClient,
                            cd:x.cd,
                            mfg: x.mfg,
                            coo: x.coo,
                            schb: x.schb,
                            eccn: x.eccn,
                            sb: x.sb,
                            subtotal: x.subtotal
                        }
                    )
                    this.descriptions.push({
                        description: x.description
                    })
                    this.show2 = false
                })
            })

        eventBus.$on('newClient', () => {
            this.getClients()
        })
        eventBus.$on('newParts', () => {
            this.getParts()
        })
        eventBus.$on('newProvider', () => {
            this.getProvider()
        })
    },
    created() {
        this.show2 = true
        if(!this.$route.params.id)
            this.$route.params.id = localStorage.getItem('changeid')
        this.getClients()
        this.getParts()
        this.getProvider()
        this.getFiles()
        this.show2 = false
    }
}
</script>

<style>
.uk-notification {
    background-color: #0f6ecd;
}
.mx-input{
    box-shadow: inset 0 0 0 rgba(0,0,0,.075);
    border: 0 !important;
}
</style>
