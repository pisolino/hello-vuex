<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ jpyRate }}</div>
    <div>{{ btcRate }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'About',
  components: {},
  computed: {
    ...mapGetters('rate', {
      jpyRate: 'getJpyRate',
      btcRate: 'getBtcRate',
    }),
  },
  methods: {
    ...mapActions('rate', {
      infiniteRate: 'infiniteRate',
      stopIntervalHandler: 'stopIntervalHandler',
    }),
    startRateInterval() {
      this.infiniteRate({ vm: this });
    },
  },
  created() {
    console.log('created');
    // this.startRateInterval();
  },
};
</script>
