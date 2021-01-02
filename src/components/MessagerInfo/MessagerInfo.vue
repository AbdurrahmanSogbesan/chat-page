<template>
  <div>
    <div
      class="d-flex align-items-center"
    >
      <div class="mr-20px">
        <img :src="info.src" alt="" width="54px" height="54px" />
      </div>
      <div class="d-flex flex-column">
        <span class="name">{{ info.name }}</span>
        <div class="d-flex">
          <component :is="info.icon" class="mr-5px"></component>
          <span class="action" :style="{ color: color }">{{
            info.action
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
    },
    color: {
      type: String,
      default: "#2a8bf2",
    },
  },
};
</script>

<style lang="css" scoped>
.name {
  font-size: 18px;
  line-height: 21px;
  text-transform: capitalize;
  color: #0d1c2e;
  font-weight: bold;
}

.action {
  font-size: 16px;
  line-height: 19px;
  text-transform: lowercase;
}

.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.align-items-center {
  align-items: center;
}

.mr-20px {
  margin-right: 10px;
}

.mr-5px {
  margin-right: 5px;
}
</style>