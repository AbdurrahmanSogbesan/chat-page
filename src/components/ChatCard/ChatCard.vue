<template>
  <div class="chat-card" :class="[className]">
    <div class="header">
      <slot name="header"></slot>
      <span class="time">{{ time }}</span>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
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

.bg-blue {
  background: linear-gradient(96.78deg, #7cb8f7 0%, #2a8bf2 100%);
  color: white !important;
}

.bg-blue .time {
  color: rgba(255, 255, 255, 0.75);
}

.bg-blue .action {
  color: rgba(255, 255, 255, 1) !important;
}
</style>