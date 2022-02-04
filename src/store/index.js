import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {
  getPolygonContractData,
  getEthereumContractData,
  fetchPolygonBlockData,
  fetchCurrentBlockHeight,
} from '../utils'

export default new Vuex.Store({
  state: {
    ethContractData: null,
    polygonContractData: null,
    polygonBlockData: null,
  },
  mutations: {
    SET_ETH_CONTRACT_DATA(state, data) {
      Vue.set(state, 'ethContractData', data)
    },
    SET_POLYGON_CONTRACT_DATA(state, data) {
      Vue.set(state, 'polygonContractData', data)
    },
    SET_BLOCK_DATA(state, data) {
      if (!state.polygonBlockData)
        Vue.set(state, 'polygonBlockData', [data])
      else
        Vue.set(state, 'polygonBlockData', [...state.polygonBlockData, data])

    },
  },
  actions: {
    async fetchPolygonContractData({ commit }) {

      const response = await getPolygonContractData();
      const result = response.data;

      commit('SET_POLYGON_CONTRACT_DATA', result)
    },
    async getEthereumContractData({ commit }) {

      const response = await getEthereumContractData();
      const result = response.data;

      commit('SET_ETH_CONTRACT_DATA', result)
    },
    async getPolygonBlockData({ commit }) {

      const currentBlockHeightResponse = await fetchCurrentBlockHeight()
      const currentBlockHeight = currentBlockHeightResponse.data.result

      for (let i = 0; i < 5; i++) {
        const blockNumber = currentBlockHeight - i
        const hexBlockNumber = `0x${blockNumber.toString(16)}`
        const response = await fetchPolygonBlockData(hexBlockNumber);
        const result = response.data.result;

        commit('SET_BLOCK_DATA', result)
      }

    },
  },
  modules: {
  },
  getters: {
    polygonBurnTxs: (state) => {
      console.log(state.polygonContractData);
      if (!state.polygonContractData) {
        return [];
      }

      return state.polygonContractData.data.items;
    },
    ethereumBurnTxs: (state) => {
      console.log(state.ethContractData);
      if (!state.ethContractData) {
        return [];
      }

      return state.ethContractData.data.items;
    },
  }
})
