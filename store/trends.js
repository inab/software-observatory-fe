//state
export const state = () => ({
    _licensesSunburst: [],
    _licensesOpenSource: {
        licenses_copyleft : [],
        counts_copyleft : [],
        licenses_permissive : [],
        counts_permissive : [],
        licenses_data : [],
        counts_data : []
    },
    _semanticVersioning: [],
    _versionControlCount: [],
    _versionControlRepositories: [],
    _currentCollection: 'tools',
    _unLoaded: {
        licensesSunburst: true,
        licensesOpenSource: true,
        semanticVersioning: true,
        versionControlCount: true,
        versionControlRepositories: true,
        FAIRscores: true
    }
})


//Getters 
export const getters = {
    CurrentCollection(state){
        return state._currentCollection
    },
    LicensesSunburst(state){
        return state._licensesSunburst
    },
    LicensesOpenSource(state){
        return state._licensesOpenSource
    },
    SemanticVersioning(state){
        return state._semanticVersioning
    },
    VersionControlCount(state){
        return state._versionControlCount
    },
    VersionControlRepositories(state){
        return state._versionControlRepositories
    },
    Loaded(state){
        return state._unLoaded
    }
}

//Actions
var BASE_URL = '/stats/tools/'

export const actions = {
    async getCurrentCollection({commit}, collection){
        commit('setCurrentCollection', collection)
    },
    
    async getLicensesSunburst({commit, state}){
        var URL = BASE_URL + 'licenses_summary_sunburst?collection=' + state._currentCollection;

        commit('setLoaded', {licensesSunburst: true});

        let result = await this.cache.dispatch('trends/GET_URL', URL);

        commit('setLicensesSunburst', result);
        commit('setLoaded', {licensesSunburst: false});
    },

    async GET_URL({commit, state}, URL){
        let result = await this.$axios.get(URL);
        return result.data.data
    },
    
    async getLicensesOpenSource({commit, state}){
        var URL = BASE_URL + 'licenses_open_source?collection=' + state._currentCollection;

        commit('setLoaded', {licensesOpenSource: true});

        let result = await this.cache.dispatch('trends/GET_URL', URL);

        commit('setLicensesOpenSource', result);
        commit('setLoaded', {licensesOpenSource: false});
    },

    async getSemanticVersioning({commit, state}){
        var URL = BASE_URL + 'semantic_versioning?collection=' + state._currentCollection;

        commit('setLoaded', {semanticVersioning: true});

        let result = await this.cache.dispatch('trends/GET_URL', URL);
        
        commit('setSemanticVersioning', result);
        commit('setLoaded', {semanticVersioning: false});

    }, 

    async getVersionControlCount({commit, state}){

        var URL = BASE_URL + 'version_control_count?collection=' + state._currentCollection;

        commit('setLoaded', {versionControlCount: true});

        let result = await this.cache.dispatch('trends/GET_URL', URL);

        commit('setVersionControlCount', result);
        commit('setLoaded', {versionControlCount: false});
    },


    async getVersionControlRepositories({commit, state}){

        var URL = BASE_URL + 'version_control_repositories?collection=' + state._currentCollection;

        commit('setLoaded', {versionControlRepositories: true});

        let result = await this.cache.dispatch('trends/GET_URL', URL);

        commit('setVersionControlRepositories', result);
        commit('setLoaded', {versionControlRepositories: false});
    },

}


// Mutaciones
export const mutations = {
    setLoaded(state, loading) {
        state._unLoaded[Object.keys(loading)[0]] = loading[Object.keys(loading)[0]];
    },
    setLicensesSunburst(state, sunburst) {
        state._licensesSunburst = sunburst;
    },
    setLicensesOpenSource(state, openSource) {
        state._licensesOpenSource = openSource;
    },
    setSemanticVersioning(state, semanticVersioning) {
        state._semanticVersioning = semanticVersioning;
    },
    setVersionControlCount(state, versionControlCount) {
        state._versionControlCount = versionControlCount;
    },
    setVersionControlRepositories(state, versionControlRepositories) {
        state._versionControlRepositories = versionControlRepositories;
    },
    setCurrentCollection(state, collection){
        state._currentCollection = collection;
    }   
}

