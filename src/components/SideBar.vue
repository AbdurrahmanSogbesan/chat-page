<template>
  <div class="sidebar-container d-flex flex-column align-items-center">
    <div>
      <img src="@/assets/img/Mask Group (4).png" alt="" class="image mb-2" />
    </div>
    <div class="d-flex mb-5"><span>Henry Jabbawockiez</span><ArrowIcon /></div>
    <SideBarItems />
    <div class="log-out">
      <LogoutIcon />
      Log Out
    </div>
  </div>
</template>

<script>
import ArrowIcon from "./ArrowIcon/ArrowIcon.vue";
import LogoutIcon from "./LogoutIcon.vue";
import SideBarItems from "./SideBarItems.vue";
export default {
  components: {
    ArrowIcon,
    SideBarItems,
    LogoutIcon,
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
  background: #dbafaf;

  span {
    font-size: 18px;
  }
}
.image {
  padding-top: 80px;
}

.log-out {
  color: #707c97;
  height: 90px;
  align-items: center;
  display: flex;
  padding: 0px 23px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>