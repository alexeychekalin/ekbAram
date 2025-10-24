<template>
    <div class="uk-width-1-1 uk-padding uk-padding-remove-top">
        <loading
            :show="show2"
            :label="label">
        </loading>
        <h1 class="uk-text-center">Order List</h1>
        <!-- Модальное окно -->
        <div id="modal-docs" uk-modal>
            <div class="uk-modal-dialog uk-modal-body">
                <h2 class="uk-modal-title">ADD NOTE</h2>
                <div class="uk-width-1-1@s">
                    <label class="uk-form-label">#1</label>
                    <input class="uk-input" type="text" placeholder=""  v-model="note1" >
                </div>
                <div class="uk-width-1-1@s">
                    <label class="uk-form-label">#2</label>
                    <input class="uk-input" type="text" placeholder=""  v-model="note2" >
                </div>
                <div class="uk-width-1-1@s">
                    <label class="uk-form-label">#3</label>
                    <input class="uk-input" type="text" placeholder=""  v-model="note3" >
                </div>
                <p class="uk-text-right">
                    <button class="uk-button uk-button-default uk-modal-close" type="button">Close</button>
                    <button class="uk-button uk-button-primary" v-show="what==='opf'" @click.prevent="getOpf(note1, note2, note3)" type="button">Save</button>
                    <button class="uk-button uk-button-primary" v-show="what==='opo'" @click.prevent="getOpo(note1, note2, note3)" type="button">Save</button>
                </p>
            </div>
        </div>
        <div class="uk-card-default uk-card-small uk-card-hover">
            <div class="uk-card-header">
                <div class="uk-grid uk-grid-small">
                    <div class="uk-width-1-1 uk-grid">
                        <div class="uk-inline uk-width-expand">
                            <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: search"></span>
                            <input class="uk-input uk-width-1-1 search-fld" type="text" placeholder="Search" v-model="val" @input="filter(val)">
                        </div>
                        <div style="margin-top: 6px">
                            <span class="uk-text-bold"> REVENUE: {{rev}} <span class="uk-text-muted">|</span> EXPENSE: {{exp}} </span>
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
                            <th class="">IPO Ref.</th>
                            <th class="">IPO Date</th>
                            <th class="">Customer</th>
                            <th class="">Revenue</th>
                            <th class="">Expense</th>
                            <th class="">Income</th>
                            <th class="uk-table-shrink uk-text-nowrap">DOCUMENTS</th>
                            <th class="uk-table-shrink uk-text-nowrap">ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody v-for="(result, cnt) in results"  :id="result.id">
                        <tr>
                            <td>{{cnt + 1}}</td>
                            <td>{{ result.number || '-' }}</td>
                            <td class="uk-text-nowrap">{{result.datestart || '-'}}</td>
                            <td>{{result.client || '-'}}</td>
                            <td>{{result.revenue || '-'}} {{result.currency}}</td>
                            <td>{{result.expence || '-'}} {{result.currency}}</td>
                            <td>{{result.revenue - result.expence || 0}} {{result.currency}}</td>
                            <td class="uk-width-1-6">
                                <ul class="uk-iconnav">
                                    <li> <button class="uk-button uk-button-link" @click.prevent="getIpo(result.ipo)">IPO</button></li>
                                    <li> <button class="uk-button uk-button-link" @click.prevent="setModal(result.id, result.idclient, 'opf')" uk-toggle="target: #modal-docs">OPF</button></li>
                                    <li> <button class="uk-button uk-button-link" @click.prevent="setModal(result.id, result.idclient, 'opo')" uk-toggle="target: #modal-docs">OPO</button></li>
                                    <li> <button class="uk-button uk-button-link" @click.prevent="getOpl(result.id, result.idclient)">OPL</button></li>
                                    <li> <button class="uk-button uk-button-link" @click.prevent="getOsi(result.id, result.idclient)">OSI</button></li>
                                </ul>
                            </td>
                            <td>
                                <ul class="uk-iconnav">
                                    <li><a uk-icon="icon: file-edit" uk-tooltip="Edit/Update" @click.prevent="edit(result.id)"></a></li>
                                    <li v-if="$store.state.auth.role === 1"><a uk-icon="icon: trash" uk-tooltip="title: Remove; pos: bottom" @click.prevent="deleteOrder(result.id, cnt)"></a></li>
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
import store from '../../../store'
import loading from 'vue-full-loading'
export default {
    name: "AllClients",
    data:() => ({
        results: [],
        allresults:[],
        val:'',
        rev: 0,
        exp: 0,
        show2: false,
        label: 'Loading...',
        note1:'',
        note2:'',
        note3:'',
        modalID:'',
        modalClient:'',
        what:''
    }),
    components:{
      loading
    },
    methods:{
        setModal(id,client, what){
            this.modalID = id
            this.modalClient = client
            this.what = what
            if(what === 'opf'){
                this.note1 = "Not for use in U.A.E."
                this.note2 = "Delivery DXB"
                this.note3 = "DAFZA"
            }
            else{
                this.note1 = "U.A.E. SHJ"
                this.note2 = "CUST PICK UP"
                this.note3 = ""
            }

        },
        getOsi(id, idclient){
            this.show2 = true
            axios({
                url: "/api/documents/osi/" + id + '/' + idclient,
                method: "GET",
                responseType: "blob", // important
            }).then((response) => {
                this.show2 = false
                this.download(response)
            });
        },
        getOpl(id, idclient){
            this.show2 = true
            axios({
                url: "/api/documents/opl/" + id + '/' + idclient,
                method: "GET",
                responseType: "blob", // important
            }).then((response) => {
                this.show2 = false
                this.download(response)
            });
        },
        getOpo(note1, note2, note3){
            UIkit.modal('#modal-docs').hide();
            this.show2 = true
            axios({
                url: "/api/documents/opo/" + this.modalID + '/' + this.modalClient,
                method: "GET",
                responseType: "blob", // important
                params:{
                    note1: note1,
                    note2: note2,
                    note3: note3,
                }
            }).then((response) => {
                this.show2 = false
                this.download(response)
            });
        },
        getOpf(note1, note2, note3){
            UIkit.modal('#modal-docs').hide();
            this.show2 = true
            axios({
                url: "/api/documents/opf/" + this.modalID + '/' + this.modalClient,
                method: "GET",
                responseType: "blob", // important
                params:{
                    note1: note1,
                    note2: note2,
                    note3: note3,
                }
            }).then((response) => {
                this.show2 = false
                this.download(response)
            });
        },
        getIpo(ipo){
            this.show2 = true
            axios({
                url: "/api/documents/ipo/" + ipo,
                method: "GET",
                responseType: "blob", // important
            }).then((response) => {
                this.show2 = false
                this.download(response)
            });
        },
        download(response){
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            let filename = response.headers['content-disposition'];
            console.log(filename)
            link.setAttribute("download", filename.split('=')[1].replaceAll('"', ''));
            console.log(link)
            document.body.appendChild(link);
            link.click();
            link.remove();
        },
        edit(id){
            this.$router.push({name: 'edit', params: {id: id}})
            localStorage.setItem('changeid', id);
        },
        getOrders (){
            axios.get('/api/order/'+store.state.auth.user.id+'/'+ store.state.auth.role)
                .then(res => {
                    this.results = res.data
                    this.allresults = res.data
                    this.countRevExp(res.data)
                })
        },
        filter(val){
            if(val === ''){
                this.results = this.allresults;
                this.countRevExp(this.results)
            }else{
                this.results = this.allresults;
                const filterValue = (client) => {
                    return this.$data.results.filter(data => {
                        return data.client.toLowerCase().indexOf(client.toLowerCase()) > -1;
                    });
                }
                this.results = filterValue(val)
                this.countRevExp(this.results)
            }
        },
        show(param){
            UIkit.modal("#modal-change").show()
        },
        deleteOrder(param, cnt){
            axios.post('/api/order/delete/' + param)
                .then(res => {
                    UIkit.notification({message: 'Заказ удален'})
                    this.results.splice(cnt,1)
                    this.allresults.splice(cnt,1)
                }).catch(({response:{data}})=>{
                UIkit.notification({message: 'Fatal error on delete. Please contact admin'})
            })
        },
        countRevExp(arr){
            this.exp = 0
            this.rev = 0
            arr.forEach(x=> {
                this.rev += x.revenue
                this.exp += x.expence
            })
        }
    },
    mounted() {
        this.getOrders()
    }
}
</script>

<style scoped>

</style>
