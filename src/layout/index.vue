<template>
  <div>
    <div>This is layout</div>
    <sidebar class = "sidebar-container"></sidebar> <!-- 侧边栏 -->
    <div class="main-container"><!-- 主体窗口 -->
<!--      <div><navbar /></div>-->
      <app-main/>   <!-- 主体窗口 -->
<!--      <right-panel></right-panel>-->
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar } from './components'
import Sidebar from "@/layout/components/Sidebar";

export default {
  name: "index",
  components: {AppMain, Navbar, Sidebar}
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px)
}

.mobile .fixed-header {
  width: 100%;
}
</style>