<template>
    <v-app>
        <router-view />

        <!-- 看板娘 -->
        <!-- <live /> -->
    </v-app>
</template>
<script>
// import Live from './views/components/live2D/Index'

export default {
    components: {
        // Live
    },
    updated() {
        const dom = document.getElementById('loading');
        if (dom) {
            dom.remove();
        }
    },
    created() {
        // console.log(process.env);
    }
};
</script>

