<template>
    <div>
      <div class="p-2 bg-orange-900 rounded my-2 font-bold text-gray-200 " >🏅 Featured</div>
      <div class="scroll-container">
        <div class="scroll-content">
          <div>
            <img style="height: 140px;" class="rounded shadow border mr-2" src="/src/images/books/17547456.webp" alt="">
          </div>
          <div>
            <img style="height: 140px;" class="rounded shadow border mr-2" src="/src/images/books/17992621.webp" alt="">
          </div>
          <div>
            <img style="height: 140px;" class="rounded shadow border mr-2 mr-2" src="/src/images/books/17996938.webp" alt="">
          </div>
          <div>
            <img style="height: 140px;" class="rounded shadow border mr-2" src="/src/images/books/18091199.webp" alt="">
          </div>
          <div>
            <img style="height: 140px;" class="rounded shadow border mr-2" src="/src/images/movies/1.jpg" alt="">
          </div>
          <div>
            <img style="height: 140px;" class="rounded shadow border mr-2" src="/src/images/movies/2.jpg" alt="">
          </div>
          <div>
            <img style="height: 140px;" class="rounded shadow border mr-2" src="/src/images/movies/3.jpg" alt="">
          </div>
          <div>
            <img style="height: 140px;" class="rounded shadow border mr-2" src="/src/images/books/17547456.webp" alt="">
          </div>
          <div>
            <img style="height: 140px;" class="rounded shadow border mr-2" src="/src/images/books/17992621.webp" alt="">
          </div>
          <div>
            <img style="height: 140px;" class="rounded shadow border mr-2" src="/src/images/books/17996938.webp" alt="">
          </div>
          <div>
            <img style="height: 140px;" class="rounded shadow border mr-2" src="/src/images/books/18091199.webp" alt="">
          </div>
          <div>
            <img style="height: 140px;" class="rounded shadow border mr-2" src="/src/images/movies/1.jpg" alt="">
          </div>
          <div>
            <img style="height: 140px;" class="rounded shadow border mr-2" src="/src/images/movies/2.jpg" alt="">
          </div>
          <div>
            <img style="height: 140px;" class="rounded shadow border mr-2" src="/src/images/movies/3.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="p-2 bg-gray-700 rounded my-2">
        <p class=" text-sm text-white font-normal py-4 bg-gray-800 p-2 rounded">Discover your next favorite movie or book with StoryStream! Tailored recommendations based on your unique preferences.</p>
      </div>
    </div>
</template>
<style>

.scroll-container {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
}

.scroll-content {
  display: inline-block;
  white-space: nowrap;
  animation: scroll 20s linear infinite;
}

.scroll-content div {
  display: inline-block;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>