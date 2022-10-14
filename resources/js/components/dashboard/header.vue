<template>
    <header id="top-head" class="uk-position-fixed">
        <div class="uk-container uk-container-expand uk-background-primary">
            <nav class="uk-navbar uk-light" data-uk-navbar="mode:click; duration: 250">
                <div class="uk-navbar-left">
                    <div class="uk-navbar-item uk-hidden@m">
                        <router-link tag='a' to="/" class="custom-logo" title=""> <img src="../../../../public/images/logo.png" style="width:200px" alt=""> </router-link>
                    </div>
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                        <li>
                            <a data-uk-icon="icon: sign-out" @click.prevent="logout" :uk-tooltip="'title:Выход; pos: bottom'"> </a>
                        </li>
                        <li>
                            <a class="uk-navbar-toggle uk-hidden@s" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav" data-uk-tooltip></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "header2",
    methods:{
        ...mapActions({
            signOut:"auth/logout"
        }),
        async logout(){
            await axios.post('/logout').then(({data})=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        }
    }
}
</script>

<style scoped>

</style>
