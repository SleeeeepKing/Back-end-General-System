<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive >
        <router-view style="flex: 8" :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>
<!--该组件是主体窗口，通过  <router-view :key="key" /> 来控制现实的内容-->
<script>
export default {
  name: 'AppMain',
  computed: {
  //   cachedViews() {
  //     return this.$store.state.tagsView.cachedViews
  //   },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
    //display: flex;
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>