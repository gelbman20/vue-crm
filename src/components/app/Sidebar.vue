<template>
  <ul class="sidenav app-sidenav" :class="{open: isOpen}">
    <router-link
      v-for="link in links"
      tag="li"
      active-class="active"
      :to="link.url"
      :key="link.url"
      :exact="link.exact">
      <a href="#">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['isOpen'],
  data: () => {
    return {
      links: [
        { title: 'Пользователи', url: '/', exact: true },
        { title: 'Водители', url: '/drivers' }
      ]
    }
  }
}
</script>
