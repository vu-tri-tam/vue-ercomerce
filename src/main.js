import { createApp } from 'vue'
// import store from './components/store/state'
import App from './App.vue'
import router from "./components/routers"
import Notifications from '@kyvg/vue3-notification'
// Create a new store instance.
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });


// Create a new store instance.
const store = createStore({
    plugins: [createPersistedState({

        storage: {
            getItem: key => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: key => ls.remove(key)
        }

    })],
    state() {
        return {
            productList: [],
            quantity: 0,

        }
    },
    getters: {
        // lấy mảng product list
        getProduct: state => state.productList,
        // getQuantity: state => state.quantity
    },
    mutations: {
        addCart(actions, payload) {


            actions.productList.push(payload)
            console.log('có vào đây k', payload);
        }
    },
    actions: {
        addToCart({ commit }, product) {
            // state.productList.push(product)
            commit('addCart', product)
            // console.log(product, 'context');
        },
        // addQuantity({ commit }, quantity) {
        //     commit('handleQuantity', quantity)
        // }
    },

})

createApp(App).use(router).use(store).use(Notifications).mount('#app')

