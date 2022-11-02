<template>
  <div>
    <img src="src/assets/images/jumbotron.png" class="rounded-lg mx-auto " alt="jumbotron">
  </div>
  <div class="text-center pt-20 mx-auto lg:w-3/4 w-full ">
    <h1 class="mb-16 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Wie funktioniert's ?</h1>
    <div class="grid grid-cols-3 gap-3 content-center mb-8">
      <div>
        <MagnifyingGlassIcon class="h-14 w-14 mx-auto text-orange-500 mb-8" />
        <div class="w-3/4 mx-auto hidden md:block">
          Stöber online durch eine große Auswahl an Holzplatten & Bauholz
        </div>
      </div>
      <div>
        <AdjustmentsHorizontalIcon class="h-14 w-14 mx-auto text-orange-500 mb-8" />
        <div class="w-3/4 mx-auto hidden md:block">
          Gib deine individuellen Maße für die Werkstücke an
        </div>
      </div>
      <div>
        <BuildingStorefrontIcon class="h-14 w-14 mx-auto text-orange-500 mb-8" />
        <div class="w-3/4 mx-auto hidden md:block">
          Hol deine Zuschnitte innerhalb von 48 Stunden im Markt ab
        </div>
      </div>
    </div>
  </div>
  <div class="py-8 text-center">
    <button class="bg-orange-500 hover:bg-orange-700 shadow-xl text-white font-bold py-4 px-4 border border-orange-500 rounded" style="width: 300px" >
      Zuschnitt-Konfigurator starten
    </button>
  </div>
</template>

<script setup>
import {
  MagnifyingGlassIcon,
  BuildingStorefrontIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/vue/24/outline'
</script>
