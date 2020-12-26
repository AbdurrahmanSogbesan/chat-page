<template>
  <div id="app" class="d-flex">
    <SideBar />
    <div class="chat-section align-items-start"></div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<style lang="scss">
.chat-section {
  width: 100%;
}
</style>
