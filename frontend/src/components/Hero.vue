<template>
  <section
    id="profil"
    class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center"
    style="background-color: #1e1e2f;"
  >
    <div class="md:w-1/2 mb-10 md:mb-0">
      <h1
        class="text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg animate-slide-in-left"
        style="animation-delay: 200ms"
      >
        Halo, Saya <span class="text-emerald-400">Andre Aditia</span>
      </h1>
      <p class="text-xl text-gray-300 mb-8 animate-slide-in-left" style="animation-delay: 400ms">
        Mahasiswa Teknik Informatika yang fokus pada pengembangan web, desain antarmuka, dan teknologi terkini.
      </p>
      <a
        href="#kontak"
        class="bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-600 transition-colors duration-300 inline-block animate-slide-in-left"
        style="animation-delay: 600ms"
      >
        Hubungi Saya
      </a>
    </div>
    <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      <img
        src="/images/potoprofil.jpeg"
        alt="Foto Profil"
        class="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-emerald-500"
      />
    </div>
  </section>
</template>
