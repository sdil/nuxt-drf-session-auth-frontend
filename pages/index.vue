<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: "piukul@yahoo.com.my",
        password: "This password is too common.",
      },
    };
  },
  methods: {
    async userLogin() {

      await this.$auth.loginWith('cookie', {
        data: this.login,
      })

      this.$router.push("/protected")

      // try {
      //   this.$axios.defaults.withCredentials = true;
      //   // let response = await this.$auth.loginWith(
      //   //   "local",
      //   //   { data: this.login },
      //   // );
      //   let csrf = await this.$axios.get(
      //     "http://localhost:8000/dj-rest-auth/csrf/"
      //   );
      //   let response = await this.$axios.post(
      //     "http://localhost:8000/dj-rest-auth/login/",
      //     this.login,
      //     {
      //       headers: {
      //         "Content-Type": "application/json",
      //         "X-CSRFToken": this.$cookies.get("csrftoken"),
      //       },
      //     }
      //   );
      //   let user = await this.$axios.get(
      //     "http://localhost:8000/dj-rest-auth/user/"
      //   );
      //   console.log(user.data);
      //   this.$auth.setUser(user.data);
      // } catch (err) {
      //   console.log(err);
      // }
    },
  },
};
</script>