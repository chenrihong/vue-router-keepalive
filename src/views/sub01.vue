<template>
    <div class="l01">
        SUB 01:
        <input v-model="sub01" />

        <button @click="closePage('sub01')"> Close (remove include item)</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useStore } from '../store/store'
const sub01 = ref("")

const closePage = (page: string) => {
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