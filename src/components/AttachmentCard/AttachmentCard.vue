<template>
  <div>
    <div
      class="card-container mr-3"
      :style="{ background: background, color: color }"
    >
      <component :is="card.icon" class="mr-5px"></component>
      <span>{{ card.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
    },
    background: {
      type: String,
      default: "rgba(42, 139, 242, 0.25)",
    },
    color: {
      type: String,
      default: "#2a8bf2",
    },
  },
};
</script>

<style lang="css" scoped>
.card-container {
  padding: 10px 12px;
  border-radius: 25px;
  display: inline-flex;
  align-items: center;
  max-width: 110px;
}

.mr-5px {
    margin-right: 5px;
}

span {
  font-size: 14px;
}
</style>