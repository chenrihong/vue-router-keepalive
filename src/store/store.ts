import { defineStore } from "pinia"

export const useStore = defineStore('main', {
    state: () => ({
        includeComps: [] as Array<string>
    }),
    actions: {
        pushInclude(str: string) {
            let set01 = new Set<string>(this.includeComps);
            set01.add(str);
            this.includeComps = Array.from(set01);
        },
    },
    getters: {
        getIncludes(state) {
            return state.includeComps;
        },
    },
})