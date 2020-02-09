<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{ hoge }}</div>
    <div>{{ jpyRate }}</div>
    <div>{{ btcRate }}</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <button @click="startRateInterval">start</button>
      <button @click="stopRateInterval">stop</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  // data() {
  //   return {
  //     jpy: this.jpyRate,
  //     btc: this.btcRate,
  //   };
  // },
  computed: {
    ...mapGetters("sampleHoge", {
      hoge: "getHoge"
    }),
    ...mapGetters("rate", {
      jpyRate: "getJpyRate",
      btcRate: "getBtcRate"
    })
  },
  methods: {
    ...mapActions("sampleHoge", {
      setHoge: "setHoge"
    }),
    ...mapActions("rate", {
      fetchRate: "fetchRate",
      infiniteRate: "infiniteRate",
      stopintervalTimer: "stopintervalTimer"
    }),
    startRateInterval() {
      this.infiniteRate({ vm: this });
    },
    stopRateInterval() {
      this.stopintervalTimer();
    }
  },
  created() {
    this.fetchRate({ vm: this });
  },
  mounted() {
    console.log("mounted");
    console.log(this);
    this.setHoge({ name: "that is Hoge" });
    this.startRateInterval();
  }
};
</script>
