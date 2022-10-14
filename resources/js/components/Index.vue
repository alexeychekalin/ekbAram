<template>
    <div>
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>

import Emptylayout from "./layouts/emptylayout";
import Mainlayout from "./layouts/mainlayout";
export default {
    name: "Index",
    computed: {
        layout() {
            return (this.$route.meta.layout || 'empty') + 'layout'
        }
    },
    beforeMount() {
    },
    components:{
        Emptylayout, Mainlayout
    }
}
</script>
