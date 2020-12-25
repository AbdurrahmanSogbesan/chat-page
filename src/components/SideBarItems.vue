<template>
  <div class="sidebar-items">
    <SideBarItem v-for="(link, index) in sideBarItems" :key="index" :link="link"/>
  </div>
</template>

<script>
import SideBarItem from "./SideBarItem.vue";
import ChatIcon from "./ChatIcon.vue";
import CalendarIcon from './CalendarIcon.vue';
import HomeIcon from './HomeIcon.vue';
import ContactIcon from './ContactIcon.vue';
import NotificationsIcon from './NotificationsIcon.vue';
import SettingsIcon from './SettingsIcon.vue';


export default {
    data() {
        return {
            sideBarItems: [
                { text: "Home", icon: HomeIcon, isActive: false },
                { text: "Chat", icon: ChatIcon, isActive: true },
                { text: "Contact", icon: ContactIcon, isActive: false },
                { text: "Notifications", icon: NotificationsIcon, isActive: false },
                { text: "Calendar", icon: CalendarIcon, isActive: false },
                { text: "Settings", icon: SettingsIcon, isActive: false },
                ]
        }
    },
  components: {
    SideBarItem,
  },
};
</script>

<style lang="scss" scoped>
.sidebar-items {
    width: 100%;
}
</style>