import SideBarItem from "./SideBarItem";

export default {
  title: "SideBar/SideBarItem",
  component: SideBarItem,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SideBarItem },
  template: '<SideBarItem v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  link: {text: "Haha", isActive: false},
};
