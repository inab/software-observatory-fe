export const state = () => ({
    _FAIRscores: {
        'F': {
            'fair_scores': [],
            'id': 'F',
            'labels':[]
        },
        'A': {
            'fair_scores': [],
            'id': 'A',
            'labels':[]
        },
        'I': {
            'fair_scores': [],
            'id': 'I',
            'labels':[]
        },
        'R': {
            'fair_scores': [],
            'id': 'R',
            'labels':[]
        }
    },
    _currentCollection: 'tools',
    _unLoaded:{
        FAIRscores: true
    }
})

//Getters
export const getters = {
    FAIRscores(state){
        return state._FAIRscores
    },
    CurrentCollection(state){
        return state._currentCollection
    },
}

var BASE_URL = 'http://localhost:3500' + '/stats/tools/'

//Actions
var labels = {
        'F':  {
            'F3':'F3.<br> Searchability',
            'F2':'F2.<br> Existence <br> of Metadata',
            'F1':'F1.<br> Identity <br> uniqueness'
        },
        'A':{'A1':'A1.<br> Accessibility <br> of Metadata',
            'A2':'A2.<br> Accessibility <br> of Data',
            'A3':'A3.<br> Accessibility <br> of Software'
        },
        'I':{'I1':'I1.<br> Interoperability <br> of Metadata',
            'I2':'I2.<br> Interoperability <br> of Data',
            'I3':'I3.<br> Interoperability <br> of Software'
        },
        'R':{'R1':'R1.<br> Reusability <br> of Metadata',
            'R2':'R2.<br> Reusability <br> of Data',
            'R3':'R3.<br> Reusability <br> of Software',
            'R4':'R4.'
        }
    }
          

export const actions = {
    async getCurrentCollection({commit}, collection){
        commit('setCurrentCollection', collection)
    },
    async getFAIRscores({commit, state}){
        var URL = BASE_URL + 'fair_scores_summary?collection=' + state._currentCollection;

        commit('setLoaded', {FAIRscores:true})

        let FAIRscores = await this.cache.dispatch('trends/GET_FAIR_SCORES', URL);

        let results = {
            'F': {
                'fair_scores': FAIRscores.data.data['F'],
                'labels': labels['F'],
                'id':'F'
            },
            'A': {
                'fair_scores': FAIRscores.data.data['A'],
                'labels': labels['A'],
                'id':'A'
            },
            'I': {
                'fair_scores': FAIRscores.data.data['I'],
                'labels': labels['I'],
                'id':'I'
            },
            'R': {
                'fair_scores': FAIRscores.data.data['R'],
                'labels': labels['R'],
                'id':'R'
            }
        }

        commit('setFAIRscores', results);
        commit('setLoaded', {FAIRscores: false})
        },

    async GET_FAIR_SCORES({commit, state}, URL){
        let FAIRscores = await this.$axios.get(URL);
        return FAIRscores.data.data
        }
    }

//Mutations
export const mutations = {
    setFAIRscores(state, FAIRscores) {
        state._FAIRscores = FAIRscores;
    },
    setCurrentCollection(state, collection){
        state._currentCollection = collection;
    },
    setLoaded(state, loading) {
        state._unLoaded[Object.keys(loading)[0]] = loading[Object.keys(loading)[0]];
    },
}

