const state = {
  chartData: [],
  scale: '6M',
};

const getters = {
  getChartData(assetChart) {
    return assetChart.chartData;
  },
  getScale(assetChart) {
    return assetChart.scale;
  },
};

const mutations = {
  chartData(state, payload) {
    state.chartData = payload;
  },
  scale(state, payload) {
    state.scale = payload;
  },
};

const actions = {
  setChartData(context, { chartData }) {
    context.commit('chartData', chartData);
  },
  // setScale(context, { scale }) {
  //   context.commit('scale', scale);
  // },
  setScaleAndFetchChartData(context, { scale }) {
    console.log('setScaleAndFetchChartData');
    context.commit('scale', scale);
    // this.dispatch({ type: 'assetChart/setScale', scale });
    this.dispatch({ type: 'assetChart/fetchChartData', scale });
  },
  async fetchChartData(context, { scale }) {
    console.log('fetchChartData');
    const data = await getChart(scale);
    console.log(data);
    if (!data) return;
    this.dispatch({ type: 'assetChart/setChartData', chartData: data });
  },
};

const getChart = scale => {
  console.log(scale);

  const chartData = {
    '1W': [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    '1M': [
      [5, 2],
      [2, 1],
      [6, 8],
    ],
    '3M': [
      [1, 4],
      [3, 3],
      [1, 4],
    ],
    '6M': [
      [1, 2],
      [1, 3],
      [3, 4],
    ],
    '1Y': [
      [4, 2],
      [2, 1],
      [2, 5],
    ],
  };

  return new Promise(resolve => {
    resolve(chartData[scale]);
  });
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
