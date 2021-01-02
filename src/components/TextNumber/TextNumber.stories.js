import TextNumber from "./TextNumber.vue";

export default {
  title: "Chat Preview/TextNumber",
  component: TextNumber,
  argTypes: {
    text: { control: "number" },
    background: { control: "color" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextNumber },
  template: '<TextNumber v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  background: "#FF3366",
  number: 2,
};
