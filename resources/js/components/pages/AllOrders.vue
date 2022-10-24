<template>
    <div class="uk-width-1-1 uk-padding uk-padding-remove-top">
        <h1 class="uk-text-center">Список всех заказов</h1>
        <div class="uk-card-default uk-card-small uk-card-hover">
            <div class="uk-card-header">
                <div class="uk-grid uk-grid-small">
                    <div class="uk-width-1-1 uk-grid">
                        <div class="uk-inline uk-width-expand">
                            <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: search"></span>
                            <input class="uk-input uk-width-1-1 search-fld" type="text" placeholder="Поиск по Клиенту" v-model="val" @input="filter(val)">
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
                            <td>{{result.number || '-'}}</td>
                            <td class="uk-text-nowrap">{{result.datestart || '-'}}</td>
                            <td>{{result.client || '-'}}</td>
                            <td>{{result.revenue || '-'}} {{result.currency}}</td>
                            <td>{{result.expence || '-'}} {{result.currency}}</td>
                            <td>{{result.revenue - result.expence || '-'}} {{result.currency}}</td>
                            <td class="uk-width-1-6">
                                <ul class="uk-iconnav">
                                    <li> <button class="uk-button uk-button-link" @click.prevent="getIpo(result.ipo)">IPO</button></li>
                                    <li> <button class="uk-button uk-button-link" @click.prevent="getOpf(result.id, result.idclient)">OPF</button></li>
                                    <li> <button class="uk-button uk-button-link" @click.prevent="getOpo(result.id, result.idclient)">OPO</button></li>
                                    <li> <button class="uk-button uk-button-link" @click.prevent="getOpl(result.id, result.idclient)">OPL</button></li>
                                    <li> <button class="uk-button uk-button-link" @click.prevent="getOsi(result.id, result.idclient)">OSI</button></li>
                                </ul>
                            </td>
                            <td>
                                <ul class="uk-iconnav">
                                    <li><a uk-icon="icon: file-edit" uk-tooltip="Редактировать" @click.prevent="edit(result.id)"></a></li>
                                    <li v-if="$store.state.auth.role === 1"><a uk-icon="icon: trash" uk-tooltip="title: Удалить; pos: bottom" @click.prevent="deleteOrder(result.id, cnt)"></a></li>
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
export default {
    name: "AllClients",
    data:() => ({
        results: [],
        allresults:[],
        val:'',
        rev: 0,
        exp: 0
    }),
    methods:{
        getOsi(id, idclient){
            axios({
                url: "/api/documents/osi/" + id + '/' + idclient,
                method: "GET",
                responseType: "blob", // important
            }).then((response) => {
                this.download(response)
            });
        },
        getOpl(id, idclient){
            axios({
                url: "/api/documents/opl/" + id + '/' + idclient,
                method: "GET",
                responseType: "blob", // important
            }).then((response) => {
                this.download(response)
            });
        },
        getOpo(id, idclient){
            axios({
                url: "/api/documents/opo/" + id + '/' + idclient,
                method: "GET",
                responseType: "blob", // important
            }).then((response) => {
                this.download(response)
            });
        },
        getOpf(id, idclient){
            axios({
                url: "/api/documents/opf/" + id + '/' + idclient,
                method: "GET",
                responseType: "blob", // important
            }).then((response) => {
                this.download(response)
            });
        },
        getIpo(ipo){
            axios({
                url: "/api/documents/ipo/" + ipo,
                method: "GET",
                responseType: "blob", // important
            }).then((response) => {
                this.download(response)
            });
        },
        download(response){
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            let filename = response.headers['content-disposition'];
            link.setAttribute("download", filename.split('=')[1]);
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
                UIkit.notification({message: 'Ошибка удаления. Обратитесь к администратору'})
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
