<template>
  <div>
    <div class="page-title">
      <h3>Пользователи</h3>
    </div>
    <div class="history-chart">
      <canvas></canvas>
    </div>
    <section>
      <SearchPanel
        @search-term="searchTerm"
        :searchPlaceholder="searchPlaceholder"
      />
      <table v-if="people.length">
        <thead>
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Фмилия</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(person, index) of people" :key="person.email">
          <td>{{index}}</td>
          <td>{{person.username}}</td>
          <td>{{person.lastName}}</td>
          <td>{{person.email}}</td>
        </tr>
        </tbody>
      </table>
      <p v-else-if="!this.loading">
        <Spinner />
        Загрузка данных
      </p>
      <p v-else>Мы ничего не нашли</p>
    </section>
  </div>
</template>

<script>
import SearchPanel from '../components/app/SearchPanel'
import firebase from 'firebase/app'
import Spinner from '../components/app/Spinner'

export default {
  data: () => ({
    data: [],
    term: '',
    loading: false,
    searchPlaceholder: 'Поиск по email'
  }),
  name: 'Users',
  components: {
    Spinner,
    SearchPanel
  },
  computed: {
    people () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      let data = this.data
      if (!this.term) return data

      data = data.filter(({ email }) => {
        return email.indexOf(this.term) > -1
      })
      return data
    }
  },
  mounted () {
    firebase.database().ref('users').once('value', (span) => {
      span.forEach((child) => {
        const childData = child.val()

        if (childData.info.role === 'user') {
          this.data.unshift(childData.info)
        }
      })
      this.loading = true
    })
  },
  methods: {
    searchTerm (value) {
      this.term = value
    }
  }
}
</script>
