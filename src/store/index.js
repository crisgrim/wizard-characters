import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
 state: {
     favouriteWizards: []
 },
 mutations: {
     addFavouriteWizards({favouriteWizards}, wizard) {
        favouriteWizards.push(wizard)
     }
 },
 actions: {
     addFavouriteWizards({commit, state}, wizard) {
         const hasWizardInState = state.favouriteWizards.find(item => item.name === wizard.name);
         if (!hasWizardInState) {
            commit('addFavouriteWizards', wizard)
         }
     }
 },
 modules: {}
})
