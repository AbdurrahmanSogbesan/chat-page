import AttachIcon from "./AttachIcon.vue";

export default {
  title: "Icons/Attach",
  component: AttachIcon,
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    fill: { control: "color" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AttachIcon },
  template: '<AttachIcon v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  fill: "#231F20",
  width: 24,
  height: 24,
};
