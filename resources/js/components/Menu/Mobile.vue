<template>
    <div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: true container: #app">
        <div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
            <button class="uk-offcanvas-close uk-close uk-icon" type="button" data-uk-close ref="drop"></button>
            <ul class="uk-nav uk-nav-default uk-nav-parent-icon" data-uk-nav>
                <li class="uk-nav-header">Меню</li>
                <li>
                    <router-link tag='a' to="/neworder" active-class="clicked-menu" exact>
                        <span data-uk-icon="icon: plus-circle" class="uk-margin-small-right"></span> Новый заказ
                    </router-link>
                </li>
                <li>
                    <router-link tag='a' to="/" active-class="clicked-menu" exact>
                        <span data-uk-icon="icon: future" class="uk-margin-small-right"></span> Все заказы
                    </router-link>
                </li>
                <li class="uk-parent" v-if="$data.role === 1">
                    <a href=""> <span data-uk-icon="icon: users" class="uk-margin-small-right"></span> Пользователи </a>
                    <ul class="uk-nav-sub">
                        <li  @click="closeMenu" >
                            <router-link tag='a' to="/users" active-class="clicked-menu" exact>
                                Все пользователи
                            </router-link>
                        </li>
                        <li  @click="closeMenu" >
                            <router-link tag='a' to="/newuser" active-class="clicked-menu" exact>
                                Новый пользователь
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="uk-parent" v-if="$data.role === 1">
                    <a href=""> <span data-uk-icon="icon: cart" class="uk-margin-small-right"></span> Позиции </a>
                    <ul class="uk-nav-sub">
                        <li  @click="closeMenu" >
                            <router-link tag='a' to="/parts" active-class="clicked-menu" exact>
                                Все позиции
                            </router-link>
                        </li>
                        <li  @click="closeMenu" >
                            <router-link tag='a' to="/newparts" active-class="clicked-menu" exact>
                                Новая позиция
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="uk-parent" v-if="$data.role === 1">
                    <a href=""> <span data-uk-icon="icon: world" class="uk-margin-small-right"></span> Поставщики </a>
                    <ul class="uk-nav-sub">
                        <li>
                            <router-link tag='a' to="/provider" active-class="clicked-menu" exact>
                                Все поставщики
                            </router-link>
                        </li>
                        <li>
                            <router-link tag='a' to="/newprovider" active-class="clicked-menu" exact>
                                Новый поставщик
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="uk-parent" v-if="$data.role === 1">
                    <a href=""> <span data-uk-icon="icon: credit-card" class="uk-margin-small-right"></span> Клиенты </a>
                    <ul class="uk-nav-sub">
                        <li>
                            <router-link tag='a' to="/clients" active-class="clicked-menu" exact>
                                Все клиенты
                            </router-link>
                        </li>
                        <li>
                            <router-link tag='a' to="/newclients" active-class="clicked-menu" exact>
                                Новый клиент
                            </router-link>
                        </li>
                    </ul>
                </li>
                <hr/>
                <li v-if="$data.role === 1">
                    <router-link tag='a' to="/about" active-class="clicked-menu" exact>
                        <span data-uk-icon="icon: settings" class="uk-margin-small-right"></span> Настройки
                    </router-link>
                <li>
                    <a data-uk-icon="icon: sign-out" @click.prevent="logout" :uk-tooltip="'title:Выход; pos: bottom'"></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";
import store from '../../../store'

export default {
    name: "Mobile",
    data: () => ({
        role: store.state.auth.role,
        //role: store.st
    }),
    methods: {
        closeMenu() {
            UIkit.offcanvas('#offcanvas-nav').hide();
        },
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
