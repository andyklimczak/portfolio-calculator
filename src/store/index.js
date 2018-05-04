import Vue from 'vue'
import Vuex from 'vuex'
import { getAPIData } from '../utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    amount: 1000,
    selectedPortfolioType: 'moderate',
    selectedPeriod: 'year1',
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
    },
    setPortfolios (state, { period, portfolio }) {
      Vue.set(state.portfolios, period, portfolio)
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
  },
  actions: {
    getData ({ commit, state }) {
      commit('setState', {key: 'loaded', value: false})
      getAPIData().then((data) => {
        commit('setState', {key: 'portfolios', value: data})
        commit('setState', {key: 'loaded', value: true})
      }).catch(err => console.log('err', err))
    }
  }
})
