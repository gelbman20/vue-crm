<template>
  <div class="app-main-layout">
    <Navbar @navbar-toogle="navbarToggle" />

    <Sidebar :state="isOpen" v-bind:isOpen="isOpen" />

    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link to="/record" tag="a" class="btn-floating btn-large blue">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'

export default {
  name: 'MainLayout',
  data: () => ({
    isOpen: true
  }),
  components: { Navbar, Sidebar },
  methods: {
    navbarToggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
