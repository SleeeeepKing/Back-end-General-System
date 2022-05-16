<template>
  <div>
    <div style="background-color: #30B08F">
      <h1>HEADER</h1>
      <Topbar/>
    </div>
    <div  style="display: flex"><!-- 主体窗口 -->
    <sidebar style="flex: 1.5;background-color: #3A71A8"></sidebar> <!-- 侧边栏 -->

<!--      <div><navbar /></div>-->
      <app-main style="flex: 8.5;background-color: #C03639"/>   <!-- 主体窗口 -->
<!--      <right-panel></right-panel>-->
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar} from './components'
import Sidebar from "@/layout/components/Sidebar";
import Topbar from "@/layout/components/Topbar";

export default {
  name: "index",
  components: {AppMain, Navbar, Sidebar, Topbar}
}
</script>
<style>
html , body,h1{
  margin: 0;
  padding: 0;
}
</style>
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
