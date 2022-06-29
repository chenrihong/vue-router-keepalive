<template>
    <div class="l01">
        LAYOUT 01:

        <router-view v-slot="{ Component }">
            <transition>
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="css">
.l01 {
    background-color: red;
}
</style>