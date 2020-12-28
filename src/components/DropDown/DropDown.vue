<template>
  <div>
    <select name="Select" class="dropdown">
      <option
        :value="option.value"
        v-for="(option, index) in options"
        :key="index"
      >
        {{ option.text }}
      </option>
    </select>
    <ArrowIcon class="icon" />
  </div>
</template>

<script>
import ArrowIcon from "../ArrowIcon/ArrowIcon.vue";
export default {
  components: {
    ArrowIcon,
  },
  props: {
    options: {
      type: Array,
    },
  },
};
</script>

<style lang="css" scoped>
.dropdown {
  width: 179px;
  height: 70px;
  font-size: 18px;
  padding: 22px 36px;
  outline: none;
  border-radius: 6px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  color: #707C97;
}

.icon {
  position: relative;
  top: -47px;
  left: 124px;
}
</style>