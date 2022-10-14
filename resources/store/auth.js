import axios from 'axios'
import router from '../js/router'

export default {
    namespaced: true,
    state:{
        authenticated:false,
        user:{},
        role: ''
    },
    getters:{
        authenticated(state){
            return state.authenticated
        },
        user(state){
            return state.user
        },
        role(state){
            return state.role
        }
    },
    mutations:{
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value
        },
        SET_USER (state, value) {
            state.user = value
        },
        SET_ROLE (state, value) {
            state.role = value
        }
    },
    actions:{
        login({commit}){
            return axios.get('/api/user').then(({data})=>{
                commit('SET_USER',data)
                commit('SET_AUTHENTICATED',true)
                commit('SET_ROLE', data.role)
                router.push({name:'dashboard'})
            }).catch(({response:{data}})=>{
                commit('SET_USER',{})
                commit('SET_AUTHENTICATED',false)
                commit('SET_ROLE', '')
            })
        },
        logout({commit}){
            commit('SET_USER',{})
            commit('SET_AUTHENTICATED',false)
            commit('SET_ROLE', '')
        }
    }
}
