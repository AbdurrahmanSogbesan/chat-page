<template>
  <div class="text-number">
    <span :style="{ background: background }">{{ number }}</span>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 2,
    },
    background: {
      type: String,
      default: "#FF3366",
    },
  },
};
</script>

<style lang="css" scoped>
.text-number {
  padding: 5px 6px;
}

span {
  border-radius: 29px;
  padding: 5px 9px;
  color: white;
  font-size: 13px;
  font-weight: bold;
}
</style>