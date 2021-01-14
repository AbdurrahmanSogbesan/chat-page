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
              <div v-if="chat.voiceNote" class="mb-3 w-75 d-flex">
                <VoiceMessageIcon class="mr-2" />
                <span>Voice message (01:15)</span>
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
      <div class="col-7 d-flex flex-column">
        <ChatHeader />
        <div class="chat-page d-flex flex-column">
          <div class="d-flex">
            <img
              src="https://thumbnails.kpopmap.com/2020/02/LOONA-Profile-OliviaHye-200x200.png"
              alt=""
              class="mr-4 chat-image"
            />
            <div class="d-flex align-items-center">
              <MessageCard class="mr-3">
                <span
                  >Hello! Finally found the time to write to you) I need your
                  help in creating interactive animations for my mobile
                  application.
                </span>
              </MessageCard>
              <MoreHorizontalIcon />
            </div>
          </div>

          <div>
            <div class="d-flex align-items-center">
              <div class="mr-4 chat-image"></div>
              <MessageCard class="mr-3">
                <span>Can I send you files? </span>
              </MessageCard>
            </div>
            <span class="text-time" style="padding-left: 182px"
              >4 days ago</span
            >
          </div>

          <div>
            <div class="d-flex align-items-center justify-content-end">
              <MoreHorizontalIcon class="mr-3" />
              <MessageCard cardClass="white-card" class="mr-3">
                <span>Can I send you files? </span>
              </MessageCard>
              <ReadIcon />
            </div>
            <span
              class="text-time d-flex justify-content-end mb-2"
              style="padding-right: 32px"
              >4 days ago</span
            >
          </div>

          <div>
            <div class="d-flex">
              <img
                src="https://thumbnails.kpopmap.com/2020/02/LOONA-Profile-OliviaHye-200x200.png"
                alt=""
                class="mr-4 chat-image"
              />
              <div class="d-flex align-items-center">
                <MessageCard class="mr-3">
                  <div class="d-flex align-items-center">
                    <div class="mr-3 file-icon">
                      <FileIcon />
                    </div>
                    <div class="d-flex flex-column">
                      <span class="mb-2">Style.zip</span>
                      <span class="file-size">41.36 Mb</span>
                    </div>
                  </div>
                </MessageCard>
              </div>
            </div>
            <span class="text-time" style="padding-left: 155px"
              >4 days ago</span
            >
          </div>

          <div class="line"><span>3 days ago</span></div>

          <div>
            <div class="d-flex align-items-center justify-content-end">
              <MoreHorizontalIcon class="mr-3" />
              <MessageCard cardClass="white-card" class="mr-3">
                <div class="d-flex flex-column">
                  <span class="mb-2"
                    >Hello! I tweaked everything you asked. I am sending the
                    finished file.</span
                  >

                  <span class="zip-file d-flex"
                    >(52.05 Mb) New_Style.zip <AttachmentFileIcon class=""
                  /></span>
                </div>
              </MessageCard>
              <UnreadIcon />
            </div>
            <span
              class="text-time d-flex justify-content-end mb-2"
              style="padding-right: 32px"
              >3 days ago</span
            >
          </div>
        </div>
      </div>
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
import VoiceMessageIcon from "./components/VoiceMessageIcon.vue";
import ChatHeader from "./components/ChatHeader/ChatHeader.vue";
import MessageCard from "./components/MessageCard/MessageCard.vue";
import FileIcon from "./components/FileIcon.vue";
import MoreHorizontalIcon from "./components/MoreHorizontalIcon.vue";
import ReadIcon from "./components/ReadIcon.vue";
import UnreadIcon from "./components/UnreadIcon.vue";

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
      // texts: [
      //   {
      //     message:
      //       "Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.",
      //     picture:
      //       "https://thumbnails.kpopmap.com/2020/02/LOONA-Profile-OliviaHye-200x200.png",
      //   },
      //   {
      //     message: "Can I send you files?",
      //   },
      //   {
      //     picture:
      //       "https://thumbnails.kpopmap.com/2020/02/LOONA-Profile-OliviaHye-200x200.png",
      //     file: "",
      //   },
      // ],
      // lateTexts: [
      //   {
      //     message:
      //       "Hello! I tweaked everything you asked. I am sending the finished file.",
      //   },
      // ],
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
    VoiceMessageIcon,
    ChatHeader,
    MessageCard,
    FileIcon,
    AttachmentFileIcon,
    MoreHorizontalIcon,
    ReadIcon,
    UnreadIcon,
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
  line-height: 26px;
}

.bg-blue .w-75 {
  color: white;
}

.chat-page {
  background: white;
  padding: 30px 40px;
}

.file-icon {
  padding: 8px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 6px;
}

.file-size {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}

.line {
  width: 100%;
  color: rgba(112, 124, 151, 0.7);
  text-align: center;
  border-bottom: 1px solid rgba(112, 124, 151, 0.15);
  line-height: 0.1em;
  margin: 15px 0 26px;

  span {
    background: #fff;
    padding: 0 10px;
    font-size: 14px;
  }
}

.zip-file {
  color: #2a8bf2;
}

.chat-image {
  border-radius: 30px;
  width: 36px;
  height: 36px;
}

.text-time {
  font-size: 14px;
  color: rgba(112, 124, 151, 0.7);
}
</style>
