<template>
  <div class="pl-20">
    <div class="flex flex-col bg-white m-auto p-auto">
      <h1
          class="flex pt-10 pb-5 font-bold text-xl text-gray-800"
      >
        Artikels
      </h1>
      <div
          class="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
            class="flex flex-nowrap "
        >
          <div class="inline-block pr-6" v-for="article in articles">
            <div
                class="w-96 h-auto max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div :class="article.activated ? 'border-8 border-orange-400 relative' : 'relative'">
                <CheckCircleIcon
                    v-if="article.activated"
                    class="absolute top-2 right-2 h-10 w-10 text-white bg-orange-400 rounded-full"
                    aria-hidden="true"
                />
                <img src="/src/assets/images/holz.jpg" alt="holz">
              </div>
              <div class="text-center mt-6">
                <span class="text-gray-900 font-semibold text-lg">Terrassendiele Kiefer Grau</span>
                <div class="grid grid-cols-2 justify-items-stretch px-8 mt-4 text-gray-500">
                  <span class="text-md text-start">Verfügbarkeit:</span> <span class="text-start  text-green-500">{{article.availability}}</span>
                </div>
                <div class="grid grid-cols-2 justify-items-stretch px-8 mt-1 text-gray-500">
                  <span class="text-md text-start">Stärke (mm):</span> <span class="text-start">{{article.thickness}}</span>
                </div>
                <div class="grid grid-cols-2 justify-items-stretch px-8 mt-1 text-gray-500">
                  <span class="text-md text-start">Breite (mm):</span> <span class="text-start">{{article.width}}</span>
                </div>
                <div class="grid grid-cols-2 justify-items-stretch px-8 mt-1 text-gray-500">
                  <span class="text-md text-start">Länge (mm):</span> <span class="text-start">{{article.length}}</span>
                </div>
                <div class="text-center mt-4 text-lg font-bold">
                  <span>{{article.price}}</span>
                </div>
              </div>
              <div class="text-center mt-2 mb-3">
                <button class="btn btn-blue" @click="selectCard(article)">
                  Auswählen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  CheckCircleIcon,
} from '@heroicons/vue/24/outline'
import { reactive} from "vue";

const articles = reactive([
  {
    id: 1,
    name: 'Terrassendiele Kiefer Grau',
    availability: '55 Stk.',
    thickness: '200',
    width: '14',
    length: '214',
    price: '6€/ Stk.',
    activated: false,
  },
  {
    id: 2,
    name: 'Terrassendiele Kiefer Grau',
    availability: '55 Stk.',
    thickness: '200',
    width: '14',
    length: '214',
    price: '6€/ Stk.',
    activated: false,
  },
  {
    id: 3,
    name: 'Terrassendiele Kiefer Grau',
    availability: '55 Stk.',
    thickness: '200',
    width: '14',
    length: '214',
    price: '6€/ Stk.',
    activated: false,
  },
  {
    id: 4,
    name: 'Terrassendiele Kiefer Grau',
    availability: '55 Stk.',
    thickness: '200',
    width: '14',
    length: '214',
    price: '6€/ Stk.',
    activated: false,
  },
  {
    id: 5,
    name: 'Terrassendiele Kiefer Grau',
    availability: '55 Stk.',
    thickness: '200',
    width: '14',
    length: '214',
    price: '6€/ Stk.',
    activated: false,
  },
  {
    id: 6,
    name: 'Terrassendiele Kiefer Grau',
    availability: '55 Stk.',
    thickness: '200',
    width: '14',
    length: '214',
    price: '6€/ Stk.',
    activated: false,
  },
  {
    id: 7,
    name: 'Terrassendiele Kiefer Grau',
    availability: '55 Stk.',
    thickness: '200',
    width: '14',
    length: '214',
    price: '6€/ Stk.',
    activated: false,
  },
  {
    id: 8,
    name: 'Terrassendiele Kiefer Grau',
    availability: '55 Stk.',
    thickness: '200',
    width: '14',
    length: '214',
    price: '6€/ Stk.',
    activated: false,
  }
])


function selectCard(article) {
  console.log(article.id)
  articles.forEach((article) => {
    article.activated = false
  })
  article.activated = true
}
</script>

<style scoped>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}

.btn {
  @apply font-bold py-2 px-4 rounded w-3/4;
}
.btn-blue {
  @apply bg-orange-500 text-white;
}
.btn-blue:hover {
  @apply bg-orange-700;
}
</style>
