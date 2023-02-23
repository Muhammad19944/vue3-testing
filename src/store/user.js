import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: {
      name: null,
      phone: null
    }
  }),
  /*
  *
  * */
  getters: {
    getUserInfo: (state) => state.userInfo
  },
  /*
  *
  * */
  actions: {
    setInfoUser(payload) {
      this.userInfo = payload
    }
  }
})
