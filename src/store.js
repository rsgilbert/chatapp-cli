import Vuex from 'vuex'
import Vue from 'vue'

const api = "http://localhost:3000"
Vue.use(Vuex)
export default new Vuex.Store({
    actions: {
        register (_context, payload) {
            fetch(api + "/auth/register", { 
                method: 'POST',
                body: JSON.stringify(payload)
            })
            .then((res) => res)
            .then(jsonData => console.log(jsonData))
        },
        login(_context, payload) {
            fetch(api + "/auth/login", { 
                method: 'POST',
                body: JSON.stringify(payload)
            })
            .then((res) => res)
            .then(jsonData => console.log(jsonData))
        }
    },
})