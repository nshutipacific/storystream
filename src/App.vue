<template>
  <div class="w-3/4 bg-gray-800 p-4 rounded-xl text-gray-200">
    <div class="px-12 py-6 flex justify-center">
      <img src="/src/images/StoryStreamLogo.webp" alt="">
    </div>
    <div class="px-8 py-2 flex justify-center">
      <p class="text-2xl italic">... For Books and Movies"</p>
    </div>
    <featured-items/>
    
    <div class="flex justify-between text-gray-800 bg-black rounded">
      <div class="flex py-4 items-center justify-center w-full hover:italic hover:cursor-pointer hover:border-b-4 border-orange-700 hover:bg-white">
        <img class="h-32 border rounded-lg" src="/src/images/ssb.webp" alt="">
      </div>
      <div class="flex py-4 items-center justify-center cursor-pointer w-full hover:border-b-4 border-orange-700 hover:bg-white">
        <img class="h-32 border rounded-lg" src="/src/images/ssm.webp" alt="">
      </div>
    </div>
  </div>
</template>


