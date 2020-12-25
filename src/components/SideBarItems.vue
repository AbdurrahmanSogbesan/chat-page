<template>
  <div>
    <SideBarItem />
    <HomeIcon />
  </div>
</template>

<script>
import HomeIcon from "./HomeIcon.vue";
import SideBarItem from "./SideBarItem.vue";

export default {
  components: {
    SideBarItem,
    HomeIcon,
  },
};
</script>

<style lang="scss" scoped>
</style>