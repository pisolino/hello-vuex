import Vue from "vue";
import Vuex from "vuex";
import sampleHoge from "./modules/sampleHoge";
import rate from "./modules/rate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sampleHoge,
    rate
  }
});
