<template>
  <div>
    <input type="text" :placeholder="placeholder" class="input" :style="{ width:
    width }" :class="[className]" />
    <component :is="icon" class="icon"></component>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    icon: Object,
    width: {
      type: String,
      default: "399px",
    },
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="css" scoped>
.input {
  height: 70px;
  line-height: 26px;
  font-size: 18px;
  outline: none;
  border-radius: 6px;
  padding-left: 66px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: none;
  border-right: 2px solid #f5f4fb;
}

input::placeholder {
  color: #707c97;
  font-size: 18px;
}

.icon {
  position: relative;
  top: -48px;
  left: 35px;
}
</style>