<template>
  <div>
    <Row>
      <Col :span="20">
        <RadioSwitcher
          :radioItems="timeScales"
          :selected="scale"
          @changed="changed"
        ></RadioSwitcher>
      </Col>
      <Col :span="4">
        <div class="rate-wrapper">
          <span class="current-range">{{ scaleName }}比</span>
          <!-- <RateOfReturn :percent="30.5" /> -->
        </div>
      </Col>
    </Row>
    <Row class="line-chart-row">
      <div>{{ chartArray }}</div>
      <!-- <LineChart v-bind="chartOptions" :chartArray="chartArray" /> -->
    </Row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Row, Col } from 'element-ui';
// import LineChart from '../chart';
import RadioSwitcher from '@/components/radio-switcher';
// import RateOfReturn from '../rate-of-return';

//NOTE:
// 時間軸切り替え時に上位コンポーネントから本コンポーネントのchartArrayを切り替えるため
// RadioSwitcherの状態はprop/emitで受け渡しを行い、結果をVuexで上位コンポーネントと同期させる
// UIコンポーネントであるRadioSwitcherの粒度ではVuexへの直接アクセスは行わない

export default {
  name: 'FcAssetChart',
  components: {
    Row,
    Col,
    // LineChart,
    RadioSwitcher,
    // RateOfReturn,
  },
  props: {
    chartOptions: {
      type: Object,
    },
  },
  data() {
    return {
      timeScales: [
        { key: '1W', name: '1週' },
        { key: '1M', name: '1ヶ月' },
        { key: '3M', name: '3ヶ月' },
        { key: '6M', name: '半年' },
        { key: '1Y', name: '1年' },
      ],
    };
  },
  computed: {
    ...mapGetters('assetChart', {
      scale: 'getScale',
      chartArray: 'getChartData',
    }),
    scaleName() {
      const scale = this.timeScales.find(scales => {
        return scales.key === this.scale;
      });

      return scale ? scale.name : '';
    },
  },
  methods: {
    changed(scale) {
      this.$store.dispatch({
        type: 'assetChart/setScaleAndFetchChartData',
        scale,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.current-range {
  color: #1f263e;
  font-size: 12px;
  margin-right: 10px;
}

.line-chart-row {
  margin-top: 30px;
}

.rate-wrapper {
  text-align: right;
}
</style>
