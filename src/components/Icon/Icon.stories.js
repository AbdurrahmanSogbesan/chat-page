import Icon from "./Icon.vue";
import AttachIcon from "../AttachIcon/AttachIcon.vue";

export default {
  title: "Icons/Icon",
  component: Icon,
  argTypes: {
    iconClass: { control: "text" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Icon, AttachIcon },
  template: `<Icon v-bind="$props">
    <AttachIcon />
  </Icon>`,
});

export const Default = Template.bind({});
Default.args = {
  iconClass: "",
};
