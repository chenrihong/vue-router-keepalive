import { defineStore } from "pinia"
import { RouteLocationNormalizedLoaded } from "vue-router";

export const useStore = defineStore('main', {
    state: () => ({
        includeComps: [] as Array<string>,
        excludeComps: [] as Array<string>,
        openedPages: [] as Array<string>,
    }),
    actions: {
        pushInclude(str: string) {
            let set01 = new Set<string>(this.includeComps);
            set01.add(str);
            this.includeComps = Array.from(set01);
        },
        removeInclude(str: string) {
            let set01 = new Set<string>(this.includeComps);
            set01.delete(str);
            this.includeComps = Array.from(set01);
        },
        pushExclude(str: string) {
            let set01 = new Set<string>(this.excludeComps);
            set01.add(str);
            this.excludeComps = Array.from(set01);
        },
        removeExclude(str: string) {
            let set01 = new Set<string>(this.excludeComps);
            set01.delete(str);
            this.excludeComps = Array.from(set01);
        },
        pushOpenedPage(str: string) {
            let set01 = new Set<string>(this.openedPages);
            set01.add(str);
            this.openedPages = Array.from(set01);
        },
        removeOpenedPage(str: string) {
            let set01 = new Set<string>(this.openedPages);
            set01.delete(str);
            this.openedPages = Array.from(set01);
        }
    },
    getters: {
        getIncludes(state) {
            return state.includeComps;
        },
        getExcludes(state) {
            return state.excludeComps;
        },
        getOpenedPages(state) {
            return state.openedPages;
        }
    },
})