import Vue from 'vue'
import router from './router'
import Index from './components/Index'
import JsonExcel from "vue-json-excel";
import store from '../store'
import axios from 'axios'

export const eventBus = new Vue()

require('./bootstrap');

router.beforeEach((to, from, next) => {
    //document.title = `${to.meta.title} - ${process.env.MIX_APP_NAME}`
    if(to.meta.middleware=="guest"){
        if(store.state.auth.authenticated){
            if(to.meta.admin){
                if(store.state.auth.role == 1){
                    next()
                }
                else{
                    UIkit.notification({message: 'Доступ запрещен', status:'error'})
                    next({name:"dashboard"})
                }
            }
            else{
                next()
            }
        }
        next()
    }else{
        if(store.state.auth.authenticated){
            if(to.meta.admin){
                if(store.state.auth.role == '1')
                    next()
                else{
                    UIkit.notification({message: 'Доступ запрещен', status:'error'})
                    next({name:"dashboard"})
                }
            }
            else {
                next()
            }
        }else{
            next({name:"login"})
        }
    }
})

const app = new Vue({
    el: '#app',
    router,
    store,
    axios,
    components:{
        Index
    }

});

//Generate EXCEL files
Vue.component('downloadExcel', JsonExcel)
