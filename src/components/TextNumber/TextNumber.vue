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
span {
  border-radius: 29px;
  padding: 4px 9px;
  color: white;
  font-size: 13px;
  font-weight: bold;
  box-shadow: 4px 4px 15px rgba(198, 27, 74, 0.05), 2px 2px 10px rgba(198, 27, 74, 0.1), 1px 1px 50px rgba(198, 27, 74, 0.15);

}
</style>