<template>
  <div>
    <Nav />
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/Screen/Navigation.vue"; // @ is an alias to /src

export default defineComponent({
  components: {
    Nav
  }
});
</script>

<style></style>
