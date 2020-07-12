import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score :[]
  },
  mutations: {
    onSelected(state,paypload){
      state.score.push(paypload) 
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    score:state => {
      return state.score
    }
  }
})
