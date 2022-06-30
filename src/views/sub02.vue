<template>
    <div class="l01">
        SUB 02:
        <br />
        include = `{{ include }}`
        <br />

        exclude = `{{ exclude }}`
        <br />

        <input v-model="sub02" />
        <hr>

        <router-view v-slot="{ Component, route }">
            <transition>
                <keep-alive :include="include">
                    <component :is="Component" :key="route.fullPath" />
                </keep-alive>
            </transition>
        </router-view>

        <!-- <router-view v-slot="{ Component }">
            <transition>
                <keep-alive :exclude="exclude" :include="include">
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view> -->

        <!-- <router-view></router-view> -->

    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useStore } from '../store/store'

const sub02 = ref("")
const include = ref<Array<string>>([])
const exclude = ref<Array<string>>([])

const st = useStore();
include.value = st.getIncludes;
exclude.value = st.getExcludes;

watch(() => st.getIncludes, (newval) => {
    include.value = newval;
})
watch(() => st.getExcludes, (newval) => {
    exclude.value = newval;
})


</script>

<style lang="css">
.l01 {
    height: 200px;
    border: 1px solid #eee;
    padding: 2px;
}
</style>