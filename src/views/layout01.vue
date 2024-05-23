<template>
    <div class="l01">
        TOP LAYOUT: include `{{ include }}`! fullpath: {{ $route.fullPath }}

        <router-view v-slot="{ Component }">
            <transition>
                <keep-alive :include="include">
                    <component :is="wrap($route.fullPath, Component)" />
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, h } from 'vue';
import { useStore } from '../store/store'

const include = ref<Array<string>>([])
include.value = useStore().getIncludes;

watch(() => useStore().getIncludes, (newval) => {
    include.value = newval;
})

/////////////////////////
// 自定义name的壳的集合
const cachedWrapperComponents = new Map()

// 为keep-alive里的component接收的组件包上一层自定义name的壳
const wrap = (fullPath: string, component: any) => {
    let wrapper

    if (cachedWrapperComponents.has(fullPath)) {
        wrapper = cachedWrapperComponents.get(fullPath)
    } else {
        wrapper = {
            name: fullPath,
            render() {
                return h('div', null, component)
            },
        }
        cachedWrapperComponents.set(fullPath, wrapper)
    }
    return h(wrapper)
}

// 监听cachedViews的变化，当清除标签页缓存时移除相应的 wapper components
// watch(cachedViews, (fullPaths) => {
//     cachedWrapperComponents.forEach((value, key) => {
//         if (!fullPaths.includes(key)) {
//             cachedWrapperComponents.delete(key)
//         }
//     })
// })

// 作者：TothingWay
// 链接：https://juejin.cn/post/7138342643268288549
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
/////////////////////////

</script>

<style lang="css">
.l01 {
    background-color: rgb(116, 170, 199);
}
</style>