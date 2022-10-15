<template>
    <div class="uk-width-1-1 uk-padding uk-padding-remove-top">
        <h1 class="uk-text-center">Список всех заказов</h1>
        <div class="uk-card-default uk-card-small uk-card-hover">
            <div class="uk-card-header">
                <div class="uk-grid uk-grid-small">
                    <div class="uk-width-expand">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: search"></span>
                            <input class="uk-input uk-width-1-1 search-fld" type="text" placeholder="Поиск по Клиенту" v-model="val" @input="filter(val)">
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
                            <th class="">Номер</th>
                            <th class="">Дата заказа</th>
                            <th class="">Дата исполнения</th>
                            <th class="">Клиент</th>
                            <th class="">Менеджер</th>
                            <th class="">Маржа</th>
                            <th class="uk-table-shrink uk-text-nowrap">Документы</th>
                            <th class="uk-table-shrink uk-text-nowrap">Действия</th>
                        </tr>
                        </thead>
                        <tbody v-for="(result, cnt) in results"  :id="result.id">
                        <tr>
                            <td>{{cnt + 1}}</td>
                            <td>{{result.number || '-'}}</td>
                            <td class="uk-text-nowrap">{{result.datestart || '-'}}</td>
                            <td class="uk-text-truncate">{{result.dateend || '-'}}</td>
                            <td>{{result.client || '-'}}</td>
                            <td>{{result.manager || '-'}}</td>
                            <td>300 $</td>
                            <td class="uk-width-1-6">
                                <ul class="uk-iconnav">
                                    <li> <button class="uk-button uk-button-link">IPO</button></li>
                                    <li> <button class="uk-button uk-button-link">OPF</button></li>
                                    <li> <button class="uk-button uk-button-link">OP0</button></li>
                                    <li> <button class="uk-button uk-button-link">OPL</button></li>
                                    <li> <button class="uk-button uk-button-link">OSI</button></li>
                                </ul>
                            </td>
                            <td>
                                <ul class="uk-iconnav">
                                    <li><a uk-icon="icon: file-edit" uk-tooltip="Редактировать" @click.prevent="show(result)"></a></li>
                                    <li><a uk-icon="icon: trash" uk-tooltip="title: Удалить; pos: bottom" @click.prevent="deleteOrder(result.id, cnt)"></a></li>
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
        val:''
    }),
    methods:{

        getOrders (){
            axios.get('/api/order/'+store.state.auth.user.id+'/'+ store.state.auth.role)
                .then(res => {
                    this.results = res.data
                    this.allresults = res.data
                })
        },
        filter(val){
            if(val === ''){
                this.results = this.allresults;
            }else{
                this.results = this.allresults;
                const filterValue = (client) => {
                    return this.$data.results.filter(data => {
                        return data.client.toLowerCase().indexOf(client.toLowerCase()) > -1;
                    });
                }
                this.results = filterValue(val)
            }
        },
        show(param){
            UIkit.modal("#modal-change").show()
        },
        deleteOrder(param, cnt){
            axios.post('/api/orders/delete', {id: param, name: 'null', address: 'null', email: 'null', code:'null'})
                .then(res => {
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
        this.getOrders()
    }
}
</script>

<style scoped>

</style>
