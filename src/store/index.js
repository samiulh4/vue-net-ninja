import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false,
    auth_email: localStorage.getItem('auth_email') || null,
    authUser: null,
  },
  getters: {
    getAuthEmail() {
      localStorage.getItem('auth_email') || null;
    }
  },
  mutations: {
    setLoginStatus(state) {
      state.isLoggedIn = true;
    },
  },
  actions: {
    signInSuccess({ commit }) {
      commit('setLoginStatus');
    },
  },
  modules: {
  }
})
