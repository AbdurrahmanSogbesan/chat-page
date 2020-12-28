import DropDown from "./DropDown.vue";

export default {
  title: "DropDown/DropDown",
  component: DropDown,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DropDown },
  template: '<DropDown v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  options: [{value:"Messages",text:"Messages"}]
};
