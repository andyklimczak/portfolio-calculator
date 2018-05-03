import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    amount: 1000,
    selectedPortfolioType: 'moderate',
    loaded: false,
    portfolios: {},
    changedValues: {}
  },
  mutations: {
    setState (state, { key, value }) {
      state[key] = value
    },
    setChangedValues (state, { key, value }) {
      Vue.set(state.changedValues, key, value)
    }
  },
  getters: {
    totalChanged (state) {
      return Object.keys(state.changedValues).reduce((sum, key) => {
        return sum + state.changedValues[key]
      }, 0)
    },
    totalChangedPercent (state, getters) {
      return (getters.totalChanged - state.amount) / state.amount
    }
  }
})
