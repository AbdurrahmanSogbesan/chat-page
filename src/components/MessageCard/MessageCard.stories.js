import MessageCard from "./MessageCard.vue";

export default {
  title: "MessageCard/MessageCard",
  component: MessageCard,
  argTypes: {
    background: { control: "color" },
    topLeftRadius: { control: "text" },
    bottomRightRadius: { control: "text" },
    color: { control: "color" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MessageCard },
  template: `<MessageCard v-bind="$props">
    <div style="
    font-size: 16px;
    line-height: 26px;">
        Hello! Finally found the time to write to you) I need your help in <br> creating interactive animations for my mobile application.
    </div>
  </MessageCard>`,
});

export const Default = Template.bind({});
Default.args = {
  background: "linear-gradient(90.54deg, #60A9F6 0%, #2A8BF2 100%)",
  topLeftRadius: "0px",
  bottomRightRadius: "10px",
  color: "white"
};
