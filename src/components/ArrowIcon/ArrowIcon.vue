<template>
  <div class="mt-1">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.75 7.125L9.5 11.875L14.25 7.125"
        :stroke="stroke"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
  export default {
    props: {
      stroke: {
        type: String,
        default: "#000",
      },
      height: {
        type: Number,
        default: 19,
      },
      width: {
        type: Number,
        default: 19,
      },
    },
  };
</script>

<style lang="scss" scoped></style>
