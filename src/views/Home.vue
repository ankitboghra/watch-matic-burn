<template>
  <div class="home">
    <h1>Polygon Burn Stats</h1>
    <h5>From Alchemy</h5>
    <BlockList :blockList="polygonBlockData" />
  </div>
</template>

<script>
// import Vue from "vue";
import { mapState, mapGetters } from "vuex";

import BlockList from "@/components/BlockList";

export default {
  name: "Home",
  components: {
    BlockList,
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
