<template>
    <div class="uk-flex uk-flex-center uk-flex-middle uk-background-muted uk-height-viewport" data-uk-height-viewport>
        <div class="uk-position-bottom-center uk-position-small uk-position-z-index">
            <span class="uk-text-small uk-text-muted">© Made by <a href="https://wa.me/79859641123">TeamPack</a> with <span uk-tooltip="Vue JS 2.7.8" style="font-size: 20px"><LogoVue /></span>  <span uk-tooltip="UIkit 3.0" uk-icon="uikit"></span> <span uk-tooltip="Laravel Framework 8.83.23" style="font-size: 22px"><LogoLaravel /></span>
            </span>
        </div>
        <router-view/>
    </div>
</template>

<script>
import { LogoLaravel } from 'vue-icon-packs/io';
import { LogoVue } from 'vue-icon-packs/io'
export default {
    name: "emptylayout",
    components:{
        LogoLaravel,
        LogoVue
    }
}

</script>

<style scoped>

</style>
