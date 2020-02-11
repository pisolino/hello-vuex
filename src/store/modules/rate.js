const state = {
  jpy: {},
  btc: {},
  timeStamp: null,
  intervalTimer: null,
};

const getters = {
  getJpyRate(rate) {
    return rate.jpy;
  },
  getBtcRate(rate) {
    return rate.btc;
  },
  getIntervalStatus(rate) {
    return !!rate.intervalTimer;
  },
  getAllRate({ jpy, btc, timeStamp }) {
    return {
      jpy,
      btc,
      timeStamp,
    };
  },
};

const mutations = {
  jpy(state, payload) {
    state.jpy = payload;
  },
  btc(state, payload) {
    state.btc = payload;
  },
  timeStamp(state, payload) {
    state.timeStamp = payload;
  },
  intervalTimer(state, payload) {
    state.intervalTimer = payload;
  },
};

const actions = {
  setJpyRate(context, { jpy, timeStamp }) {
    context.commit('jpy', jpy);
    context.commit('timeStamp', timeStamp);
  },
  setBtcRate(context, { btc, timeStamp }) {
    context.commit('btc', btc);
    context.commit('timeStamp', timeStamp);
  },
  stopintervalTimer(context, { state }) {
    console.log('stopintervalTimer');
    clearInterval(state.intervalTimer);
    context.commit('intervalTimer', null);
  },
  infiniteRate(context, { vm }) {
    console.log(vm);

    console.log('this.getters.getIntervalStatus');
    console.log(this.getters['rate/getIntervalStatus']);
    if (this.getters['rate/getIntervalStatus']) {
      return;
    }
    const timer = setInterval(() => {
      console.log('infiniteRate');
      this.dispatch({ type: 'rate/fetchRate', vm });
    }, 10000);
    context.commit('intervalTimer', timer);
  },
  async fetchRate(context, { vm }) {
    console.log('fetchRate');
    const { data } = await getRate(vm.axios);
    if (!data) return;
    const timeStamp = String(new Date());
    this.dispatch({ type: 'rate/setJpyRate', jpy: data.jpy, timeStamp });
    this.dispatch({ type: 'rate/setBtcRate', btc: data.btc, timeStamp });
  },
};

const getRate = axios => {
  return axios.get('/api/rate/all');
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
