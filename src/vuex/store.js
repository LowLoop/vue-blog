/**
 * Created by j.frank on 2017/7/31 0031.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import common from '../common/common.js';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    indexData:{
      pageObj:{},
      novelList:{}
    }
  },
  actions: {
    LOAD_INDEX_DATA: function ({ commit }) {
      axios.post(common.getHost("reqHost")+'/vueIndex').then((response) => {
        commit('SET_INDEX_DATA', { indexData: response.data });
      }, (err) => {
        console.log(err)
      })
    }
  },
  mutations: {
    SET_INDEX_DATA: (state, { indexData }) => {
      state.indexData = indexData
    }
  },
  getters: {
    openIndexData: state => {
      return state.indexData.filter(project => !project.completed)
    }
  }
});
export default store
