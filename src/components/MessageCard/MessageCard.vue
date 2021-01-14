<template>
  <div>
    <div class="message-card" :class="[cardClass]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardClass: {
      type: String,
      default: "",
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
  background: linear-gradient(90.54deg, #60a9f6 0%, #2a8bf2 100%);
  border-top-left-radius: 0px;
  color: white;
  margin-bottom: 15px;
  line-height: 26px;
  max-width: 425px;
}

.white-card {
  background: white;
  color: #707c97;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 0px;
  float: right;
}
</style>