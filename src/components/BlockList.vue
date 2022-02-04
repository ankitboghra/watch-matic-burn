<template>
  <div class="transactions">
    <div class="transactions__header">
      <div>number</div>
      <div>baseFeePerGas</div>
      <div>gasLimit</div>
      <div>gasUsed</div>
      <div>timestamp</div>
    </div>

    <BlockItem v-for="tx in blockList" :key="tx.tx_hash" :tx="tx" />
  </div>
</template>

<script>
import BlockItem from "@/components/BlockItem";

export default {
  name: "BlockList",
  components: {
    BlockItem,
  },
  props: {
    blockList: Array,
  },
};
</script>

<style scoped lang="scss">
.transactions {
  &__header {
    display: flex;
    border: 1px solid rgb(173, 173, 173);
    border-radius: 12px;
    margin: 4px;

    > * {
      padding: 2px;
      width: 15%;
      border-right: 1px dotted lightgray;
    }
  }
}
</style>
