import ArrowIcon from "./ArrowIcon.vue";

export default {
  title: "Icons/Arrow",
  component: ArrowIcon,
  argTypes: {
    stroke: { control: "color" },
    width: { control: "number" },
    height: { control: "number" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArrowIcon },
  template: '<ArrowIcon v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  stroke: "#000",
  width: 19,
  height: 19,
};
