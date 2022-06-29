<template>
    <div class="l01">
        SUB 01:
        <input v-model="sub01" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const sub01 = ref("")
</script>

<style lang="css">
.l01 {
    height: 200px;
    border: 1px solid #eee;
    padding: 2px;
}
</style>