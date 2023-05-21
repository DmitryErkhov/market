import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, product) => total + product.price, '');
    },
  },
});