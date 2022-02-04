<template>
  <div class="burn-transactions">
    <h1>Polygon Burn Transactions</h1>
    <h5>From Covalent</h5>
    <Transactions :transactionsList="polygonBurnTxs" />
  </div>
</template>

<script>
// import Vue from "vue";
import { mapState, mapGetters } from "vuex";

import Transactions from "@/components/Transactions";

export default {
  name: "BurnTransactions",
  components: {
    Transactions,
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("fetchPolygonContractData");
    // this.$store.dispatch("getEthereumContractData");
    this.$store.dispatch("getPolygonBlockData");
  },
  methods: {},
  computed: {
    ...mapState({
      polygonBlockData: "polygonBlockData",
    }),
    ...mapGetters({
      polygonBurnTxs: "polygonBurnTxs",
      ethereumBurnTxs: "ethereumBurnTxs",
    }),
  },
};
</script>

<style scoped>
</style>
