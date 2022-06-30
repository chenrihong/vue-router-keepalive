

// import { defineComponent } from "vue";
import { defineAsyncComponent } from 'vue'

export default function (componentName: string, pageId: string) {



    // 无配置项定义方式
    const asyncPage = defineAsyncComponent(() => import('../views/sub02sub0201.vue'))
    asyncPage.name = componentName;

    return asyncPage;



    // 配置项定义方式
    // const asyncPageWithOptions = defineAsyncComponent({
    //     loader: () => import('./NextPage.vue'), // component配置项重新命名为loader
    //     delay: 200,
    //     timeout: 3000,
    //     errorComponent: {},
    //     loadingComponent: {}
    // })





}