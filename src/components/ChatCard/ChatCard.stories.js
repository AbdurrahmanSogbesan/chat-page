import ChatCard from "./ChatCard.vue";
import MessagerInfo from "../MessagerInfo/MessagerInfo.vue";
import WritingIcon from "../WritingIcon.vue";


export default {
  title: "ChatCard/ChatCard",
  component: ChatCard,
  argTypes: {
    time: { control: "text" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      info: {
        icon: WritingIcon,
        src:
          "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
        name: "Luy Robin",
        action: "writes",
      },
    };
  },
  components: { ChatCard, MessagerInfo },
  template: `<div style="width: 380px;">
  <ChatCard v-bind="$props">
  <div slot="header"><MessagerInfo :info="info"/>
  </div>
  <div>
    <span style="font-size: 16px;
    line-height: 26px;
    color: #707C97;"
    >Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).
    </span>
  </div>
  </ChatCard>
  </div>`,
});

export const Default = Template.bind({});
Default.args = {
  time: "1 minute ago",
};
