
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import createCache from "vuex-cache";

Vue.use(Vuex);
Vue.use(VueAxios, axios);


export const plugins = [
    createCache()
]

// almacenamiento central de vuex
export const state = () => ({
    _tab : 'Trends',
    _window : {
            width: 0,
    }
   
});

// Accesores o getters
// accesores para coger datos desde los componentes
// Normalmente se llaman desde las popriedades computed de los componentes

export const getters = {
    getActiveTab(state){
        return state._tab
    },
    getWindow(state){
        return state._window
    }
   
}

// Acciones - Metodos publicos
// Estas funciones sirven para llamar a las mutaciones desde los componentes
// A diferencia de las mutaciones, pueden ser asincronas (llamadas APIs)
// Pueden tener algo de business logic y pueden llamar a varias mutaciones
export const actions = {
    /**
     * Esta funci'on se ejecuta al inicializarse la app
     * @param {*} vuexContext commit, dispatch, state
     * @param {*} context es el mismo de asyncData y aqui tenemos acceso a toda la app: app. $axios, env, ...
     */
    async nuxtServerInit({ dispatch }, context) {
      
      },

    changeTab(vuexContext, payload){
        vuexContext.commit('mutateTab', payload)
    },

    changeWindowWidth(vuexContext, payload){
        vuexContext.commit('setWindowWidth', payload)
    }

    

}
// Mutadores
// El 'unico fin de los mutadores es mutar o modificar state o almacenamiento
// No deben ser llamadas desde los componentes

export const mutations = {
    mutateTab(state, payload){
        state._tab=payload.key;
    },

    setWindowWidth(state, payload){
        state._window.width = payload
    }
}