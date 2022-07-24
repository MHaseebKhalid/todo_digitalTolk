import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabs: [
      { icon: "fa-clipboard-list", name: "task" },
      { icon: "fa-location-dot", name: "location" },
    ],
    acess_token:null,
    selectedtab: "task",
    tasks: [],
    checke_ins:[]
  },
  getters: {
    getTabs: (state) => state.tabs,
    getSelectedTab: (state) => state.selectedtab,
    getTask: (state) => state.tasks,
    getAccessTokan:(state)=>state.acess_token,
    getCheckins:(state)=>state.checke_ins
  },
  mutations: {
    SET_TAB(state, payload) {
      state.selectedtab = payload;
    },
    SET_TASK(state, payload) {
      state.Tasks = payload;
      localStorage.setItem("task", JSON.stringify(state.Tasks));
    },
    APPEND_TASK(state, payload) {
      state.Tasks.push(payload);
      // localStorage.setItem("task", JSON.stringify(state.Tasks));
    },
    SET_ACCESS_TOKEN(state,payload){
      state.acess_token = payload
    },
    SET_CHECK_INS(state,payload){
      state.checke_ins = payload;
    },
    SET_TASKS(state,payload){
      state.tasks = payload;
    }
  },
  actions: {
    set_tab({ commit }, payload) {
      commit("SET_TAB", payload);
    },
    set_task({ commit }, payload) {
      commit("SET_TASK", payload);
    },
    append_task({ commit }, payload) {
      commit("APPEND_TASK", payload);
    },
    set_access_token({commit},payload){
      commit('SET_ACCESS_TOKEN',payload);
    },
    async set_checke_ins({commit}){
      const res = await axios.get('https://todo-test.digitaltolk.com/api/checkins',{
        headers:{
          "Accept": "application/json",
          "Authorization": "Bearer Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK"
        }
      });
      commit('SET_CHECK_INS',res.data.checkins);
    },
    async set_tasks({commit}){
      const res = await axios.get('https://todo-test.digitaltolk.com/api/tasks',{
        headers:{
          "Accept": "application/json",
          "Authorization": "Bearer Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK"
        }
      });
      commit("SET_TASKS",res.data.tasks);
    }
  },
  modules: {},
});
