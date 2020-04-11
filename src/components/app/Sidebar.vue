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
        { title: 'Счет', url: '/', exact: true },
        { title: 'История', url: '/history' },
        { title: 'Планирование', url: '/planing' },
        { title: 'Новая запись', url: '/record' },
        { title: 'Категории', url: '/categories' }
      ]
    }
  }
}
</script>
