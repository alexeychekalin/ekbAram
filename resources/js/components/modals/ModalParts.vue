<template>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <loading
            :show="show2"
            :label="label">
        </loading>
        <div class="uk-margin uk-modal-container-large">
            <h3 class="uk-card-title">Новая позиция</h3>
            <div class="uk-grid-small" uk-grid>
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
            </div>
        </div>
    </div>
</template>

<script>
import {eventBus} from "../../app";
import loading from 'vue-full-loading'
export default {
    name: "ModalParts",
    data:() => ({
        pn: '',
        description: '',
        show2: false,
        label: 'Loading...',
        checkedName:''
    }),
    methods:{
        newParts(){
            if(this.checkedName !== 'uk-form-success'){
                UIkit.notification({message: 'P/N уже существует'})
                return;
            }
            this.show2 = true
            axios.post('/api/parts', {pn: this.pn, description: this.description})
                .then(res =>{
                    this.show2 = false
                    UIkit.notification({message: 'Новая позиция добавлена!', status:'success'})
                    this.pn = ''
                    this.description = ''
                    eventBus.$emit('newParts', {
                        status: 'yes'
                    })
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
            axios.post('/api/check/part', {pn: this.pn})
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

    },
    components:{
        loading
    }
}
</script>

<style scoped>

</style>
