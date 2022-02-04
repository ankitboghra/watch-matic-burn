<template>
  <div class="home">
    <Transactions :transactionsList="polygonBurnTxs" />
    <BlockList :blockList="polygonBlockData" />
  </div>
</template>

<script>
// import Vue from "vue";
import { mapState, mapGetters } from "vuex";

import Transactions from "@/components/Transactions";
import BlockList from "@/components/BlockList";

export default {
  name: "Home",
  components: {
    Transactions,
    BlockList,
  },
  data() {
    return {};
  },
  mounted() {
    // this.$store.dispatch("fetchPolygonContractData");
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
