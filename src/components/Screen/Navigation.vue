<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!-- <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
    rel="stylesheet"
  /> -->
  <div class=" w-full ">
    <!--light mode - text and icons-->
    <div
      class="p-2 text-gray-900 bg-white rounded-lg shadow-lg font-medium capitalize"
    >
      <span class="px-2 mr-2 border-r border-gray-800">
        <img
          src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
          alt="alt placeholder"
          class="w-8 h-8 -mt-1 inline mx-auto"
        />
      </span>
      <router-link to="/">
        <span
          class="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded mb-5"
        >
          <i class="fas fa-home "> </i>
          <span class="mx-1"> Home</span>
        </span>
      </router-link>
      <router-link to="/about">
        <span
          class="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded mb-5"
        >
          <i class=" fas fa-th "> </i>
          <span class="mx-1">About </span>
        </span>
      </router-link>
      <!-- <span class="px-1 cursor-pointer hover:text-gray-700">
        <i class="fas fa-search"> </i>
      </span>
      <span class="px-1 cursor-pointer hover:text-gray-700">
        <i class="fas fa-calendar-alt"> </i>
      </span>
      <span class="px-1 w-8 relative cursor-pointer hover:text-gray-700">
        <i class="fas fa-bell"> </i>
        <span
          class="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full"
          >3</span
        >
      </span> -->
      <span
        class="w-10 relative float-right mr-3 cursor-pointer hover:text-gray-700"
      >
        <i class="fas fa-user"> </i>
        <span
          class="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full"
          >3</span
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fas {
  font-size: 16px;
}
</style>
