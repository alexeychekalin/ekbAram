<template>
    <div class="uk-width-1-1 uk-padding uk-padding-remove-top">
        <loading
            :show="show2"
            :label="label">
        </loading>
        <h1 class="uk-text-center">Добавление новой позиции</h1>
        <form @submit.prevent="newParts()" class="uk-width-1-1">
            <div class="uk-grid-match uk-child-width-1-1@s" uk-grid>
                <div>
                    <div class="uk-card-default uk-card-body">
                        <div class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-4@s">
                                <label class="uk-form-label">P/N</label>
                                <input class="uk-input" type="text" placeholder="" required v-model="pn" :class="checkedName" @blur="checkName">
                            </div>
                            <div class="uk-width-3-4@s">
                                <label class="uk-form-label">Описание</label>
                                <input class="uk-input" type="text" placeholder="" v-model="description" >
                            </div>
                        </div>
                    </div>
                    <button class="uk-button uk-button-primary uk-width-1-3@m uk-width-1-1@s uk-align-center uk-margin-bottom"> Сохранить </button>
                </div>
            </div>
        </form>
        <table class="uk-table uk-table-hover uk-table-middle uk-table-divider" style="background-color: white;" v-if="results.length != 0">
            <thead>
            <tr>
                <th class="uk-table-shrink">#</th>
                <th class="">P/N</th>
                <th class="">Описание</th>
            </tr>
            </thead>
            <tbody v-for="(result, cnt) in results">
            <tr>
                <td>{{cnt + 1}}</td>
                <td>{{result.pn || '-'}}</td>
                <td class="uk-text-nowrap">{{result.description || '-'}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import loading from 'vue-full-loading'
export default {
    name: "NewParts",
    data:() => ({
        pn: '',
        description: '',
        result:'',
        results: [],
        show2: false,
        label: 'Loading...',
        checkedName:''
    }),
    components:{
        loading
    },
    methods:{
        newParts(){
            if(this.checkedName !== 'uk-form-success'){
                UIkit.notification({message: 'Клиент с таким "Customer Name" уже существует'})
                return;
            }
            this.show2 = true
            axios.post('/api/parts', {pn: this.pn, description: this.description})
                .then(res =>{
                    UIkit.notification({message: 'Новая позиция добавлена!', status:'success'})
                    this.$data.results.push(
                        {
                            pn : this.pn,
                            description: this.description
                        }
                    )
                    this.pn = ''
                    this.description = ''
                    this.show2 = false
                })
                .catch(error => {
                    this.show2 = false
                    UIkit.notification({message: error, status:'danger'})
                    console.log(error);
                })
        },
        checkName(){
            if(this.pn === '')
                return;
            axios.post('/api/check/part', {name: this.pn})
                .then(res =>{
                    console.log(res);
                    if(res.data.length == 0){
                        this.$data.checkedName = 'uk-form-success'
                    }else{
                        this.$data.checkedName = 'uk-form-danger'
                        UIkit.notification({message: 'Позиция с таким "P/N" уже существует'})
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
