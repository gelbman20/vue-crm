import firebase from 'firebase/app'

export default {
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        console.log(e)
        commit('setError', e)
        throw e
      }
    },
    async register ({ dispatch, commit }, { email, password, username, lastName, phone, role }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUserId')
        await firebase.database().ref(`/users/${uid}/info`).set({ email, username, lastName, phone, role })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    getUserId () {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    async logOut () {
      await firebase.auth().signOut()
    }
  }
}
