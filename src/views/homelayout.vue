<template>
    <div class="h01">
        <h5> 结论：支持路由的缓存、也支持多级子路由的缓存。如果重用某路由，最好的做法是用 addRoute 的方式去新增一个虚路由。因为 include 这个参数是对组件名称起作用。 </h5>
        <h5> 2024-5-23:经修改已支持同路由带参数 </h5>
        <div class="rv">
            <div class="nav">
                <p>
                    <button @click="routerGo('/sub01')">Sub01</button>
                </p>
                <p>
                    <button @click="routerGo('/sub02')">Sub02</button>
                </p>
                <p>
                    <button @click="routerGo('/sub02/sub0201')">Sub02/sub0201</button>
                </p>
                <p>
                    <button @click="routerGo('/sub02/sub0201?t=1')">Sub02/sub0201?t=1</button>
                </p>
                <p>
                    <button @click="routerGo('/sub02/sub0201?t=2')">Sub02/sub0201?t=2</button>
                </p>
                <p>
                    <button @click="routerGo('/sub02/sub0202')">Sub02/sub0202</button>
                </p>
                <p>
                    <button @click="routerGo('/sub03?a=1')">Sub03?a=1</button>
                </p>
                <p>
                    <button @click="routerGo('/sub03?a=2')">Sub03?a=2</button>
                </p>
                <p>
                    <button @click="routerGo('/demo')">demo</button>
                </p>
            </div>
            <router-view style="flex:1"></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useStore } from '../store/store'

const router = useRouter();
const routerGo = (url: string) => {
    // let x = url.replace(/\//gi, '').split('?')[0]
    // useStore().pushInclude(x);

    useStore().pushInclude(url);
    router.push(url);
}
</script>

<style lang="css">
.h01 {
    height: 100%;
    background-color: rgba(211, 210, 216, 0.8);
    display: flex;
    flex-direction: column;
}

.rv {
    padding: 20px;
    background-color: rgb(183, 196, 208);
    display: flex;
    flex: 1;
}

.nav {
    width: 180px;
    background-color: rgb(127, 168, 206);
}
</style>