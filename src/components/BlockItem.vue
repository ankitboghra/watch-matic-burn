<template>
  <div class="transaction-item">
    <div>
      <a :href="linkToBlockExplorer" target="_blank"> {{ blockNumber }}</a>
    </div>
    <div>{{ baseFeePerGas }}</div>
    <div>{{ gasLimit }}</div>
    <div>{{ gasUsed }}</div>
    <div>{{ timestamp }}</div>
  </div>
</template>

<script>
import config from "@/config";

export default {
  name: "BlockItem",
  props: {
    tx: Object,
  },
  computed: {
    blockNumber() {
      return parseInt(this.tx.number, 16);
    },
    linkToBlockExplorer() {
      return `${config.network.polygon.explorerUrl}/block/${this.blockNumber}`;
    },
    baseFeePerGas() {
      return parseInt(this.tx.baseFeePerGas, 16);
    },
    gasLimit() {
      return parseInt(this.tx.gasLimit, 16);
    },
    gasUsed() {
      return parseInt(this.tx.gasUsed, 16);
    },
    timestamp() {
      return parseInt(this.tx.timestamp, 16);
    },
  },
};
</script>

<style scoped lang="scss">
.transaction-item {
  display: flex;
  border: 1px solid rgb(173, 173, 173);
  border-radius: 12px;
  margin: 4px;

  > * {
    padding: 2px;
    width: 15%;
    overflow: hidden;
    border-right: 1px dotted lightgray;
  }
}
</style>
