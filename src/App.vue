<template>
  <div id="app" class="d-flex">
    <div class="sidebar">
      <SideBar />
    </div>
    <div class="chat-section align-items-start row">
      <div class="col-5 chat-previews">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column mb-4">
            <span class="chat-title">Chats</span>
            <span class="d-flex align-items-center recent-chats"
              >Recent Chats <ArrowIcon class="ml-1"
            /></span>
          </div>
          <Button text="Create New Chat" :icon="PlusIcon" />
        </div>
        <div class="d-flex mb-2">
          <TextBox placeholder="Search" :icon="SearchIcon" width="300px" />
          <DropDown :options="options" />
        </div>
        <div class="d-flex flex-column">
          <ChatCard
            v-for="(chat, index) in chats"
            :key="index"
            :time="chat.time"
            :className="chat.className"
          >
            <div slot="header">
              <MessagerInfo
                :info="{
                  src: chat.sender.picture,
                  name: chat.sender.name,
                  action: 'writes',
                }"
              />
            </div>
            <div v-if="chat.message" class="d-flex justify-content-between">
              <span class="w-75">{{ chat.message }}</span>
              <TextNumber :number="index + 1" />
            </div>
            <div v-else>
              <div v-if="chat.voiceNote" class="mb-3 w-75">
                Voice message (01:15)
              </div>
              <div v-if="chat.attachments" class="d-flex">
                <AttachmentCard
                  v-for="(attachment, index) in chat.attachments"
                  :key="index"
                  :card="{
                    text: attachment.text,
                    icon:
                      attachment.type === 'file'
                        ? AttachmentFileIcon
                        : AttachmentImageIcon,
                  }"
                  :background="
                    attachment.type === 'file'
                      ? 'rgba(42, 139, 242, 0.25)'
                      : 'rgba(255, 51, 102, 0.25)'
                  "
                  :color="attachment.type === 'file' ? '#2a8bf2' : '#FF3366'"
                />
              </div>
            </div>
          </ChatCard>
        </div>
      </div>
      <div class="col-7"></div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import PlusIcon from "./components/PlusIcon.vue";
import AttachmentFileIcon from "./components/AttachmentFileIcon.vue";
import AttachmentImageIcon from "./components/AttachmentImageIcon.vue";
import SearchIcon from "./components/SearchIcon.vue";
import ArrowIcon from "./components/ArrowIcon/ArrowIcon.vue";
import Button from "./components/Button/Button.vue";
import TextBox from "./components/TextBox/TextBox.vue";
import DropDown from "./components/DropDown/DropDown.vue";
import ChatCard from "./components/ChatCard/ChatCard.vue";
import MessagerInfo from "./components/MessagerInfo/MessagerInfo.vue";
import AttachmentCard from "./components/AttachmentCard/AttachmentCard.vue";
import TextNumber from "./components/TextNumber/TextNumber.vue";

export default {
  name: "App",
  data() {
    return {
      PlusIcon,
      SearchIcon,
      AttachmentFileIcon,
      AttachmentImageIcon,
      options: [{ value: "Messages", text: "Messages" }],
      chats: [
        {
          message:
            "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).",
          sender: {
            name: "Luy Robin",
            picture:
              "https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg",
          },
          time: "1 minute ago",
        },
        {
          voiceNote: true,
          sender: {
            name: "Jared Sunn",
            picture:
              "https://i.pinimg.com/originals/6e/40/e5/6e40e540d9d5b84790a53f8382ceac69.jpg",
          },
          time: "1 minute ago",
          attachments: [
            { type: "file", text: "Files (x2)" },
            { type: "photo", text: "Photo" },
          ],
        },
        {
          message:
            "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
          sender: {
            name: "Nika Jerrardo",
            picture:
              "https://thumbnails.kpopmap.com/2020/02/LOONA-Profile-OliviaHye-200x200.png",
          },
          time: "3 days ago",
          className: "bg-blue",
        },
      ],
    };
  },
  components: {
    SideBar,
    ArrowIcon,
    Button,
    TextBox,
    DropDown,
    ChatCard,
    MessagerInfo,
    AttachmentCard,
    TextNumber,
  },
};
</script>

<style lang="scss">
.sidebar {
  height: 100vh;
  width: 16%;
  background: #fff;
}

.chat-section {
  width: 85%;
  background: linear-gradient(180deg, #f3f3fb 0%, #fdfbfd 100%);
  padding: 80px 40px 0 40px;
}

// .chat-previews {
//   overflow-y: scroll;
// }

.chat-title {
  font-size: 36px;
  line-height: 26px;
  color: #0d1c2e;
  margin-bottom: 15px;
}

.recent-chats {
  line-height: 26px;
  color: #707c97;
}

.w-75 {
  max-width: 80%;
  color: #707c97;
}

.bg-blue .w-75 {
  color: white;
}
</style>
