// almacenamiento central de vuex
export const state = () => ({
    _counter :0
});

// Accesores o getters
// accesores para coger datos desde los componentes
// Normalmente se llaman desde las popriedades computed de los componentes

export const getters = {
    getCounter(state){
        return state. _counter
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

    sumarDos(vuexContext) {
        vuexContext.commit('increment');
        vuexContext.commit('increment');
    }
}
// Mutadores
// El 'unico fin de los mutadores es mutar o modificar state o almacenamiento
// No deben ser llamadas desde los componentes

export const mutations = {
    increment(state){
        state._counter++;
    }
}