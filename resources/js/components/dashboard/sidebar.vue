<template>
    <aside id="left-col" class="uk-light uk-visible@m">
        <div class="left-logo">
            <router-link tag='a' to="/"  title=""> <img src="../../../../public/images/logo.png" alt=""> </router-link>
        </div>
        <div class="left-nav-wrap">
            <div class="left-content-box  content-box-dark">
                <img src="../../../../public/images/avatar.svg" alt="" class="uk-border-circle profile-img">
                <h4 class="uk-text-center uk-margin-remove-vertical text-light">{{this.name}}</h4>
                <a href="#" class="uk-text-small uk-text-muted uk-display-block uk-text-center" >{{this.role === 1? 'Admin' : 'Associate'}}</a>
            </div>
            <ul class="uk-nav uk-nav-default uk-nav-parent-icon" data-uk-nav>
                <li class="uk-nav-header">Menu</li>
                <li>
                    <router-link tag='a' to="/neworder" active-class="clicked-menu" exact>
                        <span data-uk-icon="icon: plus-circle" class="uk-margin-small-right"></span> New Entry
                    </router-link>
                </li>
                <li>
                    <router-link tag='a' to="/" active-class="clicked-menu" exact>
                        <span data-uk-icon="icon: future" class="uk-margin-small-right"></span> Order List
                    </router-link>
                </li>
                <li class="uk-parent">
                    <a href=""> <span data-uk-icon="icon: users" class="uk-margin-small-right"></span> Users </a>
                    <ul class="uk-nav-sub">
                        <li>
                            <router-link tag='a' to="/users" active-class="clicked-menu" exact>
                                User List
                            </router-link>
                        </li>
                        <li>
                            <router-link tag='a' to="/newuser" active-class="clicked-menu" exact>
                                New User
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="uk-parent" >
                    <a href=""> <span data-uk-icon="icon: cart" class="uk-margin-small-right"></span> Item List </a>
                    <ul class="uk-nav-sub">
                        <li>
                            <router-link tag='a' to="/parts" active-class="clicked-menu" exact>
                                All Items List
                            </router-link>
                        </li>
                        <li>
                            <router-link tag='a' to="/newparts" active-class="clicked-menu" exact>
                                Add New Item
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="uk-parent" >
                    <a href=""> <span data-uk-icon="icon: world" class="uk-margin-small-right"></span> Supplier List </a>
                    <ul class="uk-nav-sub">
                        <li>
                            <router-link tag='a' to="/provider" active-class="clicked-menu" exact>
                                All Supplier List
                            </router-link>
                        </li>
                        <li>
                            <router-link tag='a' to="/newprovider" active-class="clicked-menu" exact>
                                New Supplier
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="uk-parent" >
                    <a href=""> <span data-uk-icon="icon: credit-card" class="uk-margin-small-right"></span> Customers  </a>
                    <ul class="uk-nav-sub">
                        <li>
                            <router-link tag='a' to="/clients" active-class="clicked-menu" exact>
                                All Customers
                            </router-link>
                        </li>
                        <li>
                            <router-link tag='a' to="/newclients" active-class="clicked-menu" exact>
                                New Customer
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li v-if="$data.role === 1">
                    <router-link tag='a' to="/about" active-class="clicked-menu" exact>
                        <span data-uk-icon="icon: settings" class="uk-margin-small-right"></span> Settings
                    </router-link>
                </li>
                <li>
                    <a href="" @click.prevent="logout"> <span data-uk-icon="icon: sign-out" class="uk-margin-small-right"></span> Log out  </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
import store from '../../../store'
import {mapActions} from 'vuex'
export default {
    name: "sidebar",
    data: () => ({
        role: store.state.auth.role,
        name: store.state.auth.user.name
    }),
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
