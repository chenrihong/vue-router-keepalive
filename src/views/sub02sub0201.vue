<template>
    <div class="l01">
        SUB 0201:
        <input v-model="sub01" />


        <br />
        <button @click="closePage('sub02sub0201')"> Close </button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from '../store/store'
const sub01 = ref("")

const closePage = (page: string) => {
    useStore().pushExclude(page)
    useStore().removeInclude(page)
}
</script>

<style lang="css">
.l01 {
    height: 200px;
    border: 1px solid #eee;
    padding: 2px;
}
</style>