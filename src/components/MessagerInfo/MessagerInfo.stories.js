import MessagerInfo from "./MessagerInfo.vue";
import WritingIcon from "../WritingIcon.vue";

export default {
  title: "MessagerInfo/MessagerInfo",
  component: MessagerInfo,
  argTypes: {
      color: { control: "color" }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MessagerInfo },
  template: '<MessagerInfo v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  info:
    {
        src:"https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",      
        name: "Luy Robin",
        icon: WritingIcon,
        action: "writes",
    },
  color: "#2a8bf2"
};
