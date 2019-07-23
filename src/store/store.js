import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// 首先声明一个状态 state
const state = {
  checkboxes: [],
  condition: 'ALL',
}
// 然后给 actions 注册事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
const actions = {
  addList: ({commit}) =>{
    axios
    .get('http://localhost:3001/todos')
    .then(response => {
        commit('addList',response.data)
        })
    .catch(function (error) { // 请求失败处理
      console.log(error)
    })
  },

  add:({commit,state},item) =>{
    axios.post('http://localhost:3001/todos',item)
        .then(function (response) {
          commit('addList',[response.data])
        })
        .catch(function (error) {
        console.log(error);
        })
  },
  updateItem:({commit,state},item) =>{
    axios.put('http://localhost:3001/todos'+item.id,item)
        .then(function (response) {
          commit('updateItem',[response.data])
        })
        .catch(function (error) {
        console.log(error);
        })
  },
}
// 更新状态
const mutations = {
  add (state,item) {
    state.checkboxes.push(item);
},
addList (state,items) {
  state.checkboxes.push(...items);
},
updateItem (state,item) {
  const index= state.checkboxes.map(i=>i.id).indexOf(item.id);
  state.checkboxes[index]=item;
},
show (state, condition) {
  state.condition = condition;
}
}
// 获取状态信息
const getters = {
}

// 下面这个相当关键了，所有模块，注册才能使用
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})