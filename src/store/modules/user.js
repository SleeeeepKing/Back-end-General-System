// import { login, logout, getInfo } from '@/api/user'
// import { getToken, setToken, removeToken } from '@/utils/auth'
// import router, { resetRouter } from '@/router'

const state = {
  token: 'Admin-Token',
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {

  },

  // get user info
  getInfo({ commit, state }) {

  },

  // user logout
  logout({ commit, state, dispatch }) {

  },

  // remove token
  resetToken({ commit }) {

  },

  // dynamically modify permissions

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
