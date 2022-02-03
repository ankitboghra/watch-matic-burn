<template>
  <div class="home">
    <Transactions :transactionsList="polygonBurnTxs" />
    <Transactions :transactionsList="ethereumBurnTxs" />
  </div>
</template>

<script>
// import Vue from "vue";
import { mapGetters } from "vuex";

import Transactions from "@/components/Transactions";

export default {
  name: "Home",
  components: {
    Transactions,
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("fetchPolygonContractData");
    this.$store.dispatch("getEthereumContractData");
  },
  methods: {},
  computed: {
    // ...mapState({
    //   polygonBurnData: "polygonContractData",
    //   ethContractData: "ethContractData",
    // }),
    ...mapGetters({
      polygonBurnTxs: "polygonBurnTxs",
      ethereumBurnTxs: "ethereumBurnTxs",
    }),
  },
};
</script>

<style scoped>
</style>
