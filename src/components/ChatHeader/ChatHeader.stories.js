import ChatHeader from "./ChatHeader.vue";
import AttachIcon from '../AttachIcon/AttachIcon.vue';
import Icon from "../Icon/Icon.vue";
import MoreIcon from '../MoreIcon.vue';

export default {
  title: "Chat/ChatHeader",
  component: ChatHeader,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ChatHeader, Icon, AttachIcon, MoreIcon },
  template: '<ChatHeader v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
