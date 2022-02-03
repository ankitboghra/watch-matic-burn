<template>
  <div class="transaction-item">
    <div>{{ tx.block_height }}</div>
    <div>{{ tx.tx_hash }}</div>
    <div>{{ tx.gas_offered }}</div>
    <div>{{ tx.gas_price }}</div>
    <div>{{ tx.gas_spent }}</div>
    <div>{{ tx.value }}</div>
  </div>
</template>

<script>
export default {
  name: "TransactionItem",
  props: {
    tx: Object,
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
