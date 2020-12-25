<template>
  <div class="sidebar-container d-flex flex-column align-items-center">
    <div>
      <img src="@/assets/img/Mask Group (4).png" alt="" class="image mb-2" />
    </div>
    <div class="d-flex mb-5">
      <span>Henry Jabbawockiez</span><ArrowIcon />
    </div>
    <SideBarItems />
  </div>
</template>

<script>
import ArrowIcon from "./ArrowIcon.vue";
import SideBarItems from "./SideBarItems.vue";
export default {
  components: {
    ArrowIcon,
    SideBarItems,
  },
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 15%;
  background: #FFFFFF;

  span {
    font-size: 18px;
  }
}
.image {
  padding-top: 92px;
}
</style>