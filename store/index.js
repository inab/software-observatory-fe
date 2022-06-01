
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "http://observatory.openebench.bsc.es/api/stats/";

// almacenamiento central de vuex
export const state = () => ({
    _tab : 'Trends',
    _sourcesCounts : {},
    _totalCount: null
});

// Accesores o getters
// accesores para coger datos desde los componentes
// Normalmente se llaman desde las popriedades computed de los componentes

export const getters = {
    getActiveTab(state){
        return state._tab
    },
    Counts(state){
        return state._sourcesCounts
    },
    Total(state){
        return state._totalCount
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
        await dispatch('cards/loadCards');
    },

    changeTab(vuexContext, payload){
        vuexContext.commit('mutateTab', payload)
    },

    getCounts({commit}) {
        var URL = 'tools/count_per_source'
        Vue.axios.get(URL).then(result => {
          commit('SAVE_COUNTS', result.data[0].data);
        }).catch(error => {
          throw new Error(`API ${error}`);
        });
      },

    getTotalCount({commit}){
        var URL = 'tools/count_total'
        Vue.axios.get(URL).then(result => {
          commit('SAVE_COUNT_TOTAL', result.data[0].data);
        }).catch(error => {
          throw new Error(`API ${error}`);
        });
    }

}
// Mutadores
// El 'unico fin de los mutadores es mutar o modificar state o almacenamiento
// No deben ser llamadas desde los componentes

export const mutations = {
    mutateTab(state, payload){
        state._tab=payload.key;
        console.log(state._tab)
    },
    SAVE_COUNTS(state, counts) {
        state._sourcesCounts = counts;
      },
    SAVE_COUNT_TOTAL(state, count) {
        console.log(count)
        state._totalCount = count;
      }
}