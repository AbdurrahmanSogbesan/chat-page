<template>
  <div class="chat-header">
    <div class="user-details">
      <div>
        <img
        src="https://thumbnails.kpopmap.com/2020/02/LOONA-Profile-OliviaHye-200x200.png"
        alt="" width="54px" height="54px" class="image"/>
      </div>
      <div class="text">
        <span class="name">Nika Jerrardo</span>
        <span class="last-seen">last online 5 hours ago</span>
      </div>
    </div>
    <div class="icons">
      <Icon class="mr-20px"><AttachIcon /></Icon>
      <Icon><MoreIcon /></Icon>
    </div>
  </div>
</template>

<script>
import AttachIcon from "../AttachIcon/AttachIcon.vue";
import Icon from "../Icon/Icon.vue";
import MoreIcon from "../MoreIcon.vue";
export default {
  components: {
    Icon,
    AttachIcon,
    MoreIcon,
  },
};
</script>

<style lang="css" scoped>
.chat-header {
  background: #fafbff;
  border-radius: 6px 6px 0px 0px;
  width: 100%;
  padding: 28px 38px 28px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name {
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  color: #0d1c2e;
  margin-bottom: 6px;
}

.last-seen {
  font-size: 16px;
  line-height: 19px;
  color: #2a8bf2;
}

.user-details {
  display: flex;
  align-items: center;
}

.text {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.icons {
  display: flex;
}

.mr-20px {
  margin-right: 20px;
}

.image {
  border-radius: 30px;
}
</style>