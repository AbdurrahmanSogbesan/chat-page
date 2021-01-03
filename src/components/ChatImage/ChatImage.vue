<template>
  <div>
    <img
      src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
      alt=""
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "36px",
    },
    height: {
      type: String,
      default: "36px",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>