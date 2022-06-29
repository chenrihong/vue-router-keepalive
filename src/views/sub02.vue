<template>
    <div class="l01">
        SUB 02:
        <input v-model="sub01" />

        <hr>


        <router-view v-slot="{ Component }">
            <transition>
                <keep-alive exclude="sub0201">
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>

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