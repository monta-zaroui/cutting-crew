<template>
  <Popover class="relative bg-white">
    <div class="mx-auto">
      <div class="flex md:px-20 px-8 items-center  border-b-2 border-gray-100 py-6">
        <div class="flex w-1/6 justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto sm:h-10" src="src/assets/images/Obi.svg.png" alt="logo" />
          </a>
        </div>
        <div class="hidden space-x-10 md:flex w-3/6">
          <SearchInput />
        </div>
        <div class="items-center justify-end md:flex w-2/6 space-x-6">
          <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500">
            <span class="sr-only">View notifications</span>
            <UserIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500">
            <span class="sr-only">View notifications</span>
            <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
    <Filter />
    <Products />
  </Popover>
</template>

<script setup>
import { Popover} from '@headlessui/vue'
import {
  BellIcon,
  UserIcon,
  ShoppingCartIcon,
} from '@heroicons/vue/24/outline'
import SearchInput from "./search-input.vue";
import Products from "../cut/products.vue";
import Filter from "../filters/filter.vue";

</script>
