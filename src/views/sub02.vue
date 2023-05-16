<template>
    <div class="l01">
        SUB 02:
        <br />
        include = `{{ include }}`
        <br />

        exclude = `{{ exclude }}`
        <br />

        <input v-model="sub02" />
        <hr />

        {{ fnComps }}
        <hr />

        <!-- <router-view v-slot="{ Component, route }">
            <transition>
                <keep-alive :include="include">
                    <component :is="Component" :key="fnNewKey(route)" />
                </keep-alive>
            </transition>
        </router-view> -->


        <router-view v-slot="{ Component, route }">
            <transition>
                <keep-alive :exclude="exclude" :include="include">
                    <component :is="Component" :key="route.fullPath" />
                </keep-alive>
            </transition>
        </router-view>

        <!-- <router-view></router-view> -->

    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { useStore } from '../store/store'

const sub02 = ref("")
const include = ref<Array<string>>([])
const exclude = ref<Array<string>>([])
const routeKey = ref("")

const st = useStore();
include.value = st.getIncludes;
exclude.value = st.getExcludes;


watch(() => st.getIncludes, (newval) => {
    include.value = newval;
})
watch(() => st.getExcludes, (newval) => {
    exclude.value = newval;
})

/*
 使用 include 和 exclude 同时加上 key 
 打开相同组件（参数不一样的）后，通过 key 可以实现全缓存
 如 a: /sub02sy0201?t=1 和 b: /sub02sy0201?t=2
 但是 关闭 a 后, 如果去把include 更新，会使 b 页面缓存失效！

 处理办法：
 1)检测是否有同名组件被打开，如果有，不去更新 include
 2)再次打开a页面时，为了能够使a全新打开（不带缓存），我们将key 更新。
 */

// Record<组件名, Set<fullPath>
const fnComps = ref<Record<string, Set<string>>>({} as Record<string, Set<string>>)
const fnNewKey = (route: any): string => {
    console.log(route);

    let currentRouteName = route.name as string;
    let currentFullPath = route.fullPath as string;
    let newFullPath = currentFullPath;

    let keys = Object.keys(fnComps.value);
    let vals = fnComps.value[currentRouteName] || new Set<string>();

    if (keys.includes(currentRouteName)) {
        if (vals.has(currentFullPath)) {
            newFullPath = currentFullPath + "&_t=" + new Date().getTime();
        }
    }
    vals.add(newFullPath);
    fnComps.value[currentRouteName] = vals;

    return newFullPath;
}

</script>

<style lang="css">
.l01 {
    height: 200px;
    border: 1px solid #eee;
    padding: 2px;
}
</style>