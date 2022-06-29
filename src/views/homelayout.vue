<template>
    <div class="h01">
        <h1> HomeLayout:</h1>
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
                    <button @click="routerGo('/sub02/sub0202')">Sub02/sub0202</button>
                </p>
                <p>
                    <button @click="routerGo('/sub03')">Sub03</button>
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
    let x = url.replace(/\//gi, '')
    useStore().pushInclude(x);
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