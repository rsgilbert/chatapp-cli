import Vuex from 'vuex'
export default new Vuex.Store({
    state: () => {c: 3},
    actions: {
        register (context, payload) {
            alert("hi")
        } 
    }
})