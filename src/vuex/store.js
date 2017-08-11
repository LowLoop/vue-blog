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

const store2 = new Vuex.Store({}) // 这里你可能已经有其他 module

store2.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})
export default store2
