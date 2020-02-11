<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-buttonだよ</el-button>
      <el-button>el-buttonだよ</el-button>
    </div>
    <div>{{ hoge }}</div>
    <div>{{ jpyRate }}</div>
    <div>{{ btcRate }}</div>
    <AssetChart />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <button @click="startRateInterval">start</button>
      <button @click="stopRateInterval">stop</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';
// import { RadioGroup, RadioButton } from 'element-ui';
import AssetChart from '@/components/asset-chart/';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    AssetChart,
    // RadioGroup,
    // RadioButton,
  },
  data() {
    return {
      radio0: '',
      radio1: '1W',
      radio2: '1M',
    };
  },
  computed: {
    ...mapGetters('sampleHoge', {
      hoge: 'getHoge',
    }),
    ...mapGetters('rate', {
      jpyRate: 'getJpyRate',
      btcRate: 'getBtcRate',
    }),
  },
  methods: {
    ...mapActions('sampleHoge', {
      setHoge: 'setHoge',
    }),
    ...mapActions('rate', {
      fetchRate: 'fetchRate',
      infiniteRate: 'infiniteRate',
      stopintervalTimer: 'stopintervalTimer',
    }),
    startRateInterval() {
      this.infiniteRate({ vm: this });
    },
    stopRateInterval() {
      this.stopintervalTimer();
    },
  },
  created() {
    this.fetchRate({ vm: this });
  },
  mounted() {
    this.setHoge({ name: 'that is Hoge' });
    this.startRateInterval();
  },
};
</script>
