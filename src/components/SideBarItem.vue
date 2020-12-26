<template>
  <div class="sidebar-item d-flex" :class="{ active: link.isActive }">
    <component :is="link.icon" class="mr-4"></component>
    {{ link.text }}
  </div>
</template>

<script>
  export default {
    props: {
      link: {
        type: Object,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .sidebar-item {
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #707c97;
    width: 100%;
    height: 35px;
    align-items: center;
    margin-bottom: 20px;
    padding-left: 21px;
  }

  .sidebar-item.active {
    color: #2a8bf2;
    border-left: 4px solid #2a8bf2;
    padding-left: 17px;
  }
</style>
