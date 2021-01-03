import ChatImage from "./ChatImage.vue";

export default {
  title: "Chat/ChatImage",
  component: ChatImage,
  argtypes: {
    width: { control: "text" },
    height: { control: "text" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ChatImage },
  template: '<ChatImage v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  width: "36px",
  height: "36px",
};
