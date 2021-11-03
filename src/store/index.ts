import { createStore } from "vuex";

export const store =  createStore({
    state: {
        isLoading: false,
    },
    getters: {
    },
    mutations: {
        CHANGE_LOADING(state, data){
            state.isLoading = data;
        }
    },
    actions: {
    }
})