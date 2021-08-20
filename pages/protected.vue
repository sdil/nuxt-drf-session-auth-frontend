<template>
  <div>
    <b-button @click="logout()">
    logout
    </b-button>
    {{ $auth.loggedIn }}
    {{ $auth.user }}
  </div>
</template>

<script>
export default {
  // middleware: 'auth',
  methods: {
    async logout() {
      try {
        // this.$axios.defaults.withCredentials = true;
        // let response = await this.$axios.post(
        //   "http://localhost:8000/dj-rest-auth/logout/",
        //   {},
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //       "X-CSRFToken": this.$cookies.get('csrftoken'),
        //     },
        //   }
        // );

        await this.$auth.logout()
        this.$router.push("/")
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>