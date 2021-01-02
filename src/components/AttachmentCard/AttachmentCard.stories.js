import AttachmentCard from "./AttachmentCard.vue";
import AttachmentFileIcon from "../AttachmentFileIcon.vue";

export default {
  title: "AttachmentCard/AttachmentCard",
  component: AttachmentCard,
  argTypes: {
    background: { control: "color" },
    color: { control: "color" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AttachmentCard },
  template: '<AttachmentCard v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  card: { icon: AttachmentFileIcon, text: "Files (X2)" },
  background: "rgba(42, 139, 242, 0.25)",
  color: "#2a8bf2",
};
