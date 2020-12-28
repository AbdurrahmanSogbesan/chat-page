<template>
  <div id="app" class="d-flex align-items-start">
    <div>
      <SideBar />
    </div>
    <div class="chat-section"></div>
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
</style>
