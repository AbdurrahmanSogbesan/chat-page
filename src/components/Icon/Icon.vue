<template>
  <div class="icon" :class="[iconClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="css" scoped>
.icon {
  width: 52px;
  height: 52px;
  background: #ffffff;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.03),
    0px 7px 25px rgba(42, 139, 242, 0.03), 0px 5px 25px rgba(42, 139, 242, 0.07);
  padding: 14px;
  border-radius: 30px;
}

.blue-background {
  width: 40px;
  height: 40px;
  background: #2a8bf2;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.03),
    0px 7px 25px rgba(42, 139, 242, 0.03), 0px 5px 25px rgba(42, 139, 242, 0.07);
  padding: 8px;
}
</style>