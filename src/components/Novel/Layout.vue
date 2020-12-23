<template>
  <div class="flex h-screen bg-gray-200 font-roboto ">
    <div class="flex-1 flex flex-col overflow-hidden">
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-green-50">
        <div class="container mx-auto px-6 py-8">
          <div
            class="rounded-lg h-screen p-6 bg-white border-opacity-25 border-2 shadow-2xl"
          >
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {}
});
</script>
