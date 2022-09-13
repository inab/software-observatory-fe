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
//var BASE_URL =  'http://observatory.openebench.bsc.es/dev-api' + '/stats/tools/'
var BASE_URL = 'http://localhost:3500' + '/stats/tools/'

export const actions = {
    async getCurrentCollection({commit}, collection){
        commit('setCurrentCollection', collection)
    },
    async getLicensesSunburst({commit, state}){
        var URL = BASE_URL + 'licenses_summary_sunburst?collection=' + state._currentCollection;

        commit('setLoaded', {licensesSunburst: true});

        let LicensesSunburst = await this.$axios.get(URL);
        console.log(LicensesSunburst.data.data)

        commit('setLicensesSunburst', LicensesSunburst.data.data);
        commit('setLoaded', {licensesSunburst: false});
    },

    async getLicensesOpenSource({commit, state}){
        var URL = BASE_URL + 'licenses_open_source?collection=' + state._currentCollection;

        commit('setLoaded', {licensesOpenSource: true});

        let LicensesOpenSource = await this.$axios.get(URL);

        commit('setLicensesOpenSource', LicensesOpenSource.data.data);
        commit('setLoaded', {licensesOpenSource: false});
    },

    async getSemanticVersioning({commit, state}){
        var URL = BASE_URL + 'semantic_versioning?collection=' + state._currentCollection;

        commit('setLoaded', {semanticVersioning: true});

        let SemanticVersioning = await this.$axios.get(URL);
        
        commit('setSemanticVersioning', SemanticVersioning.data.data);
        commit('setLoaded', {semanticVersioning: false});
    },

    async getVersionControlCount({commit, state}){
        var URL = BASE_URL + 'version_control_count?collection=' + state._currentCollection;

        commit('setLoaded', {versionControlCount: true});

        let VersionControlCount = await this.$axios.get(URL);
        
        commit('setVersionControlCount', VersionControlCount.data.data);
        commit('setLoaded', {versionControlCount: false});
    },

    async getVersionControlRepositories({commit, state}){
        var URL = BASE_URL + 'version_control_repositories?collection=' + state._currentCollection;

        commit('setLoaded', {versionControlRepositories: true});

        let VersionControlRepositories = await this.$axios.get(URL);

        commit('setVersionControlRepositories', VersionControlRepositories.data.data);
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

