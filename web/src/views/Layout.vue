<template>
  <div class="Layout">
    <div class="row">
      <div class="col-md-2">
        <SideBar></SideBar>
      </div>
      <div class="col-md-10">
        <div class="content">
          <router-view />
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import SideBar from "../components/SideBar";
export default {
  name: "LayoutView",
  components: { SideBar },
  mounted() {
    let auth = localStorage.getItem("isAuth");
    if (!auth) {
      this.$router.push("/login");
    }
  },
};
</script>
<style lang="scss" scoped>
.Layout {
  margin-top: 2rem;
  .content {
    margin: 0rem 4rem;
  }
}
</style>
