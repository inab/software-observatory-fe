//state
export const state = () => ({
    _countsPerSource : {},
    _totalCount: null,
    _unLoaded: {
        countsPerSource: true,
        FAIRscores: true,
        totalCount: true
    }
})


//Getters 
export const getters = {
    CountsPerSource(state){
        return state._countsPerSource
    },
    TotalCount(state){
        return state._totalCount
    }
}

//Actions
export const actions = {
    async getCountsPerSource({commit}) {
        var URL = 'https://observatory.openebench.bsc.es/api/stats/tools/count_per_source';

        commit('setLoaded', {countsPerSource: true});

        let Counts = await this.$axios.get(URL);

        commit('setCountsPerSource', Counts.data[0].data);
        commit('setLoaded', {countsPerSource: false});
    
    },

    async getTotalCount({commit}){
        var URL = 'https://observatory.openebench.bsc.es/api/stats/tools/count_total';

        commit('setLoaded', {totalCount: true});

        let Total = await this.$axios.get(URL);
        
        commit('setTotalCount', Total.data[0].data);
        commit('setLoaded', {totalCount: false});
        
    }

}


// Mutaciones
export const mutations = {
    setCountsPerSource(state, counts) {
        state._countsPerSource = counts;
    },
    setTotalCount(state, count) {
        state._totalCount = count;
    },
    setLoaded(state, loading) {
        state._unLoaded[Object.keys(loading)[0]] = loading[Object.keys(loading)[0]];
    }
}