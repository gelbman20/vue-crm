<template>
  <div class="search-wrapper">
    <input v-model="value" @input="searchTerm" id="search" :placeholder="searchPlaceholder">
    <i class="material-icons">search</i>
    <div class="search-results"></div>
  </div>
</template>

<script>
export default {
  name: 'SearchPanel',
  data: () => ({
    value: ''
  }),
  props: ['searchPlaceholder'],
  methods: {
    searchTerm () {
      this.$emit('search-term', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-wrapper {
  position: relative;
}

.material-icons {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

input {
  box-sizing: border-box;
  padding-right: 50px;
}
</style>
