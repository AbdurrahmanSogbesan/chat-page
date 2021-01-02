import ChatHeader from "./ChatHeader.vue";

export default {
  title: "Chat/ChatHeader",
  component: ChatHeader,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ChatHeader },
  template: '<ChatHeader v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
