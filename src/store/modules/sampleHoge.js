const state = {
  name: "this is hoge."
};

const getters = {
  getHoge(hoge) {
    return hoge.name;
  }
};

const mutations = {
  hoge(state, payload) {
    state.name = payload;
  }
};

const actions = {
  setHoge(context, { name }) {
    context.commit("hoge", name);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
