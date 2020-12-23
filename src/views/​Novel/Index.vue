<template>
  Choose Your Path
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    function login() {
      router.push("/dashboard");
    }
    return {
      login
    };
  }
});
</script>
