<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">CRM система</span>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model="username"
          :class="{ invalid: ($v.username.$dirty && !$v.username.required)}"
        >
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="$v.username.$dirty && !$v.username.required"
        >Поле Имя не должно быть пустым</small>
      </div>
      <div class="input-field">
        <input
          id="last-name"
          type="text"
          v-model="lastName"
          :class="{ invalid: ($v.lastName.$dirty && !$v.lastName.required)}"
        >
        <label for="name">Фамилия</label>
        <small
          class="helper-text invalid"
          v-if="$v.lastName.$dirty && !$v.lastName.required"
        >Поле Фамилия не должно быть пустым</small>
      </div>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >Поле Email не должно быть пустым</small>
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >Введите коректный Email</small>
      </div>
      <div class="input-field">
        <input
          id="phone"
          type="text"
          v-model="phone"
          :class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.phone.$dirty && !$v.phone.numeric)}"
        >
        <label for="phone">Номер телефона</label>
        <small
          class="helper-text invalid"
          v-if="($v.phone.$dirty && !$v.phone.numeric)"
        >Не валидный номер телефона</small>
        <small
          class="helper-text invalid"
          v-if="($v.email.$dirty && !$v.email.required) "
        >Нужно ввести номер телефона</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model="password"
          :class="{ invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.password.required"
        >Поле Password не должно быть пустым</small>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.password.minLength"
        >Пароль должен быть больше {{$v.password.$params.minLength.min}} символов, сейчас {{this.password.length}}</small>
      </div>
      <div class="input-field">
        <select ref="select" v-model="role"  >
          <option value="" disabled selected>Choose your option</option>
          <option value="user">Пользователь</option>
          <option value="driver">Водитель</option>
        </select>
        <label>Выберите свою роль</label>
        <small
          class="helper-text invalid"
          v-if="$v.role.$dirty && !$v.role.required"
        >Роль должна быть выбрана</small>
      </div>
      <p>
        <label>
          <input
            v-model="checkbox"
            :class="{ invalid: ($v.checkbox.$dirty && !$v.checkbox.checked)}"
            type="checkbox"/>
          <span>С правилами согласен</span>
        </label>
      </p>
      <small
        class="helper-text invalid"
        v-if="$v.checkbox.$dirty && !$v.checkbox.checked"
      >Нужно согласится с правилами</small>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>
      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'Register',
  data: () => ({
    username: '',
    phone: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    checkbox: false
  }),
  validations: {
    username: { required },
    lastName: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    role: { required },
    checkbox: { checked: (v) => v },
    phone: { numeric }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    M.FormSelect.init(this.$refs.select, {})
  },
  methods: {
    async onSubmit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return true
      }

      const formData = {
        username: this.username,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email,
        role: this.role,
        password: this.password
      }

      try {
        await this.$store.dispatch('register', formData)
        await this.$router.push('/')
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}
</script>
