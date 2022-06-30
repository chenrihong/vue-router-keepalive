<template>
    <div class="l01">
        sub02sub0201:
        <input v-model="sub01" />


        <br />
        <button @click="closePage('sub02sub0201')"> Close </button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from '../store/store'
const sub01 = ref("")
const route = useRoute();

const closePage = (page: string) => {
    console.log(route.fullPath);
    // useStore().pushExclude(page)
    useStore().removeInclude(page)
    useStore().removeOpenedPage(route.fullPath)
}
</script>

<style lang="css">
.l01 {
    height: 200px;
    border: 1px solid #eee;
    padding: 2px;
}
</style>