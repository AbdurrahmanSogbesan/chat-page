<template>
  <div>
    <input type="text" :placeholder="placeholder" class="input" />
    <component :is="icon" class="icon"></component>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    icon: Object,
  },
};
</script>

<style lang="css" scoped>
.input {
  width: 399px;
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