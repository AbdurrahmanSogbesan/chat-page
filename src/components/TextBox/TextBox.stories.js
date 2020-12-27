import TextBox from "./TextBox.vue";
import SearchIcon from "../SearchIcon.vue";

export default {
  title: "TextBox/TextBox",
  component: TextBox,
  argTypes: {
    placeholder: { control: "text" },
    icon: { control: "object" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextBox },
  template: '<TextBox v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search",
  icon: SearchIcon
};