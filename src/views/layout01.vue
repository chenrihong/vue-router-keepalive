<template>
    <div class="l01">
        TOP LAYOUT: include `{{ include }}`

        <router-view v-slot="{ Component }">
            <transition>
                <keep-alive :include="include">
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useStore } from '../store/store'

const include = ref<Array<string>>([])
include.value = useStore().getIncludes;

watch(() => useStore().getIncludes, (newval) => {
    include.value = newval;
})

</script>

<style lang="css">
.l01 {
    background-color: rgb(116, 170, 199);
}
</style>