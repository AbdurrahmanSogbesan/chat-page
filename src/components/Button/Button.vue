<template>
  <button class="d-flex align-items-center">
    <component :is="icon" class="mr-2"></component>
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    icon: {
      type: Object,
    },
  },
};
</script>

<style lang="css" scoped>
button {
  width: 240px;
  height: 60px;
  background: linear-gradient(92.68deg, #7cb8f7 0%, #2a8bf2 100%);
  box-shadow: 6px 6px 25px rgba(42, 139, 242, 0.15),
    4px 4px 25px rgba(42, 139, 242, 0.05),
    10px 6px 25px rgba(42, 139, 242, 0.15);
  border-radius: 6px;
  outline: none;
  border: none;
  color: #ffff;
  font-size: 20px;
  line-height: 24px;
  padding: 18px 25px;
}
</style>