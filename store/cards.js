//state
export const state = () => ({
    _cards: []
})

//Getters 
export const getters = {
    getCards(state) {
        return state._cards
    }
}

//Actions
export const actions = {
    async loadCards({ commit }) {
        let cards = await this.$axios.get('https://jsonplaceholder.typicode.com/posts');

        console.log(cards.data);

        // Realizar un commit
        commit('setCards', cards.data);
    }
}

// Mutaciones
export const mutations = {
    setCards(state, cards){
        state._cards= cards
    }
}