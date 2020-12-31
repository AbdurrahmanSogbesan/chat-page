<template>
  <div>
    <div
      class="message-card"
      :style="{
        background: background,
        'border-top-left-radius': topLeftRadius,
        'border-bottom-right-radius': bottomRightRadius,
        color: color,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: "linear-gradient(90.54deg, #60A9F6 0%, #2A8BF2 100%)",
    },
    topLeftRadius: {
      type: String,
      default: "0px",
    },
    bottomRightRadius: {
      type: String,
      default: "10px",
    },
    color: {
      type: String,
      default: "white",
    },
  },
};
</script>

<style lang="css" scoped>
.message-card {
  padding: 14px 22px;
  box-shadow: 10px 10px 25px rgba(42, 139, 242, 0.1),
    15px 15px 35px rgba(42, 139, 242, 0.05),
    10px 10px 50px rgba(42, 139, 242, 0.1);
  border-radius: 0px 10px 10px 10px;
  width: fit-content;
}
</style>