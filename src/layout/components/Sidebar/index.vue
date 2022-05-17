<template>
  <div >
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
          :default-active="activeMenu"
          :background-color="variables.menuBg"
          :text-color="variables.menuText"
          :unique-opened="false"
          :active-text-color="variables.menuActiveText"
          :collapse-transition="false"
          mode="vertical"
      >
        <!-- 侧边栏内容↓ -->
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
        <!-- 侧边栏内容↑ -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Logo from '../Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import {constantRoutes} from "@/router";

export default {
  data: function () {
    return { constantRoutes }
  },
  components: {SidebarItem, Logo},
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    routes() {
      //TODO
      // return this.$router.options.routes
      return this.$store.state.permission.currentRoutes.children
    },
    activeMenu() {
      const route = this.$route
      const {meta, path} = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    // showLogo() {
    //   return this.$store.state.settings.sidebarLogo
    // },
    variables() {
      return variables
    },

  }
}
</script>
