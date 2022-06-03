//state
export const state = () => ({
    _sourcesCounts : {},
    _totalCount: null
})


//Getters 
export const getters = {
    Counts(state){
        return state._sourcesCounts
    },
    Total(state){
        return state._totalCount
    }
}

//Actions
export const actions = {
    async getCounts({commit}) {
        var URL = 'https://observatory.openebench.bsc.es/api/stats/tools/count_per_source';
        let Counts = await this.$axios.get(URL);
        commit('SAVE_COUNTS', Counts.data[0].data);
      },

    async getTotalCount({commit}){
        var URL = 'https://observatory.openebench.bsc.es/api/stats/tools/count_total';
        let Total = await this.$axios.get(URL);
        commit('SAVE_COUNT_TOTAL', Total.data[0].data);      
        }
}


// Mutaciones
export const mutations = {
    SAVE_COUNTS(state, counts) {
        state._sourcesCounts = counts;
      },
    SAVE_COUNT_TOTAL(state, count) {
        state._totalCount = count;
      }
}