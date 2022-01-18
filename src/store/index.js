import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [],
    loading: true,
  },
  actions: {
    loadData({commit}) {
      axios.get('https://api.in.dev-team.club/people').then((response) => {
        commit('updatePeople', response.data)
        commit('changeLoadingState', false)
      })
      .catch(err => console.log(err));
    }
  },
  mutations: {
    updatePeople(state, people) {
      state.people = people
    },
    changeLoadingState(state, loading) {
      state.loading = loading
    }
  },
})