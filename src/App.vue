<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout'
import MainLayout from './layouts/MainLayout'

export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty-layout')
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
  @import "assets/index.css";
  .toast.error {
    background: #f44336;
  }

  .auth-card {
    max-width: 500px;
    width: 100%;
  }
</style>
