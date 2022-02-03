<template>
  <div class="transactions">
    <div class="transactions__header">
      <div>block_height</div>
      <div>tx_hash</div>
      <div>gas_offered</div>
      <div>gas_price</div>
      <div>gas_spent</div>
      <div>value</div>
    </div>

    <TransactionItem
      v-for="tx in transactionsList"
      :key="tx.tx_hash"
      :tx="tx"
    />
  </div>
</template>

<script>
import TransactionItem from "@/components/TransactionItem";

export default {
  name: "Transactions",
  components: {
    TransactionItem,
  },
  props: {
    transactionsList: Array,
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
