<template>
    <div class="uk-width-1-1 uk-padding uk-padding-remove-top">
        <loading
            :show="show2"
            :label="label">
        </loading>
        <h1 class="uk-text-center">Список всех позиций</h1>
        <div id="modal-change" uk-modal>
            <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
                <div class="uk-margin uk-modal-container-large">
                    <h3 class="uk-card-title">Редактирование позиции</h3>
                    <div class="uk-grid-small" uk-grid>
                        <form @submit.prevent="updateParts()" class="uk-width-1-1">
                            <div class="uk-grid-match uk-child-width-1-1@s" uk-grid>
                                <div>
                                    <div class="uk-card-default uk-card-body">
                                        <div class="uk-grid-small" uk-grid>
                                            <div class="uk-width-1-4@s">
                                                <label class="uk-form-label">P/N</label>
                                                <input class="uk-input" type="text" required placeholder="" required v-model="pn" >
                                            </div>
                                            <div class="uk-width-3-4@s">
                                                <label class="uk-form-label">Описание</label>
                                                <input class="uk-input" type="text" required placeholder="" v-model="description" >
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
        </div>
        <div class="uk-card-default uk-card-small uk-card-hover">
            <div class="uk-card-header">
                <div class="uk-grid uk-grid-small">
                    <div class="uk-width-expand">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: search"></span>
                            <input class="uk-input uk-width-1-1 search-fld" type="text" placeholder="Поиск по P/N" v-model="val" @input="filter(val)">
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
                            <th class="">P/N</th>
                            <th class="">Описание</th>
                            <th class="">Действия</th>
                        </tr>
                        </thead>
                        <tbody v-for="(result, cnt) in results"  :id="result.id">
                        <tr>
                            <td>{{cnt + 1}}</td>
                            <td>{{result.pn || '-'}}</td>
                            <td class="uk-text-nowrap">{{result.description || '-'}}</td>
                            <td>
                                <ul class="uk-iconnav">
                                    <li><a uk-icon="icon: file-edit" uk-tooltip="Редактировать" @click.prevent="show([result.id, result.pn, result.description])"></a></li>
                                    <li><a uk-icon="icon: trash" uk-tooltip="title: Удалить; pos: bottom" @click.prevent="deleteParts([result.id, cnt])"></a></li>
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
import loading from 'vue-full-loading'
export default {
    name: "AllParts",
    data:() => ({
        pn: '',
        description: '',
        result:'',
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
        getParts (){
            axios.get('/api/parts',{withCredentials: true} )
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
                const filterValue = (pn) => {
                    return this.$data.results.filter(data => {
                        return data.pn.toLowerCase().indexOf(pn.toLowerCase()) > -1;
                    });
                }
                this.results = filterValue(val)
            }
        },
        show(param){
            UIkit.modal("#modal-change").show()
            this.id = param[0]
            this.pn = param[1]
            this.description = param[2]
        },
        updateParts(param){
            this.show2 = true
            axios.post('/api/parts/update', {id: this.id, pn: this.pn, description: this.description})
                .then(res => {
                    this.show2 = false
                    UIkit.notification({message: 'Позиция обновлена'})
                    UIkit.modal("#modal-change").hide()
                }).catch(({response:{data}})=>{
                this.show2 = false
                UIkit.notification({message: 'Ошибка изменения. Обратитесь к администратору'})
            }).finally(()=>{
                UIkit.modal("#modal-change").hide()
                this.getParts();
                })
        },
        deleteParts(param){
            this.show2 = true
            axios.post('/api/parts/delete', {id: param[0], pn: 'null', description: 'null'})
                .then(res => {
                    this.show2 = false
                    UIkit.notification({message: 'Позиция удалена'})
                    this.results.splice(param[1],1)
                    this.allresults.splice(param[1],1)
                }).catch(({response:{data}})=>{
                this.show2 = false
                UIkit.notification({message: 'Ошибка удаления. Данная позиция добавлена в заказ!'})
            }).finally(()=>{
                UIkit.modal("#modal-change").hide()
                this.getParts();
            })
        }
    },
    mounted() {
        this.getParts()
    }
}
</script>

<style scoped>

</style>
