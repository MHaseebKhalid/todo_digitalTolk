<template>
  <div class="Logout">
    <div class="tabs" @click="logout">
      <font-awesome-icon icon="fa-arrow-right-from-bracket" />
      <span class="text-capitalize">Logout</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "LogOut",
  methods: {
    logout() {
      localStorage.removeItem("isAuth");
      this.$router.push("/login");
    },
  },
};
</script>
