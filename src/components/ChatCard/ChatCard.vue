<template>
  <div class="chat-card" :class="[className]">
    <div class="header">
      <slot name="header"></slot>
      <span class="time">{{ time }}</span>
    </div>
    <div class="body">
      <slot></slot>
      <TextNumber />
    </div>
  </div>
</template>

<script>
import TextNumber from "../TextNumber/TextNumber.vue";
export default {
  components: { TextNumber },
  props: {
    className: {
      type: String,
    },
    time: {
      type: String,
    },
  },
};
</script>

<style lang="css" scoped>
.chat-card {
  width: 100%;
  background: #ffffff;
  border-radius: 6px;
  padding: 33px 40px 40px 40px;
  margin-bottom: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
}

.time {
  font-size: 16px;
  line-height: 19px;
  text-transform: lowercase;
  color: #707c97;
}

.body {
  display: flex;
  justify-content: space-between;
}
</style>