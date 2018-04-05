<template>
    <div>
      <p>You are logged in {{user.username}}!!!</p>
      <button @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout').then(data => {
        if (data.status == true) {
          this.$router.push({ name: "home"});
        }
      })
  	}
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    }
  }
}
</script>