//state
export const state = () => ({
    _countsPerSource : {},
    _totalCount: null,
    _features: {},
    _coverageSources: {
        counts : {},
        counts_cummulative : {},
    },
    _completeness: {
        cummulative_features: {},
        distribution_features: {}
    },
    _types: {},
    _unLoaded: {
        countsPerSource: true,
        totalCount: true,
        features: true,
        coverageSources: true,
        completeness: true,
        types: true,
    }
})


//Getters 
export const getters = {
    CountsPerSource(state){
        return state._countsPerSource
    },
    TotalCount(state){
        return state._totalCount
    },
    Features(state){
        return state._features
    },
    CoverageSources(state){
        return state._coverageSources
    },
    Completeness(state){
        return state._completeness
    },
    Types(state){
        return state._types
    }

}


var base_URL = '/stats/tools/'
//Actions
export const actions = {
    async getCountsPerSource({commit}) {
        var URL = base_URL + 'count_per_source';

        commit('setLoaded', {countsPerSource: true});

        let result = await this.cache.dispatch('trends/GET_URL', URL);

        commit('setCountsPerSource', result);
        commit('setLoaded', {countsPerSource: false});
    
    },

    async GET_URL({commit}, URL){
        let result = await this.$axios.get(URL);
        return result.data.data
    },

    async getTotalCount({commit}){
        var URL = base_URL + 'count_total';

        commit('setLoaded', {totalCount: true});

        let result = await this.cache.dispatch('trends/GET_URL', URL);

        commit('setTotalCount', result);
        commit('setLoaded', {totalCount: false});
        
    },

    async getFeatures({commit}){
        var URL = base_URL + 'features';

        commit('setLoaded', {features: true});

        let result = await this.cache.dispatch('trends/GET_URL', URL);

        commit('setFeatures', result);
        commit('setLoaded', {features: false});
        
    },

    async getCoverageSources({commit}){
        var URL = base_URL + 'coverage_sources';

        commit('setLoaded', {coverageSources: true});

        let result = await this.cache.dispatch('trends/GET_URL', URL);

        commit('setCoverageSources', result);
        commit('setLoaded', {coverageSources: false});
        
    },

    async getCompleteness({commit}){
        // This plot uses two serires of data, one for the histogram and one for the line (cummulative distribution)
        var URL_cummulative_features = base_URL + 'features_cummulative';
        var URL_distribution_features = base_URL + 'distribution_features';

        commit('setLoaded', {completeness: true});

        let result_cummulative_features = await this.cache.dispatch('trends/GET_URL', URL_cummulative_features);
        let result_distribution_features = await this.cache.dispatch('trends/GET_URL', URL_distribution_features);

        commit('setCompleteness', {
            cummulative_features: result_cummulative_features, 
            distribution_features: result_distribution_features
        });
 
        
        commit('setLoaded', {completeness: false});
        
    },

    async getTypes({commit}){
        var URL = base_URL + 'types_count';

        commit('setLoaded', {types: true});

        let result = await this.cache.dispatch('trends/GET_URL', URL);

        commit('setTypes', result);
        commit('setLoaded', {types: false});
        
    },

}


// Mutaciones
export const mutations = {
    setCountsPerSource(state, counts) {
        state._countsPerSource = counts;
    },
    setTotalCount(state, count) {
        state._totalCount = count;
    },
    setFeatures(state, features) {
        state._features = features;
    },
    setCoverageSources(state, sources) {
        state._coverageSources = sources;
    },
    setCompleteness(state, completeness) {
        state._completeness = completeness;
    },
    setTypes(state, types) {
        state._types = types;
    },
        
    setLoaded(state, loading) {
        state._unLoaded[Object.keys(loading)[0]] = loading[Object.keys(loading)[0]];
    }
}