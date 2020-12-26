import Button from "./Button.vue";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {
    text: { control: "text" },
    icon: { control: "object" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  text: "Create New Chat",
  icon: {},
};
