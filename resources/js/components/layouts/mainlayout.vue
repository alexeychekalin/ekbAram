<template>
    <div>
        <Header/>
        <Sidebar/>
        <Mobile/>
        <div id="content" >
                <hr>
                <router-view/>
            </div>
    </div>
</template>


<script>
import Header from '../dashboard/header'
import Sidebar from '../dashboard/sidebar'
import Mobile from '../Menu/Mobile'

export default {
    name: "mainlayout",
    components: {
        Header, Sidebar, Mobile
    }
}
</script>

<style scoped>

</style>
