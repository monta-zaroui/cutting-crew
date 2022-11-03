<template>
  <Popover class="relative bg-white">
    <div class="mx-auto">
      <div class="flex md:px-20 px-8 items-center  border-b-2 border-gray-100 py-6">
        <div class="flex w-1/6 justify-start lg:w-0 lg:flex-1">
          <router-link  to="/">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto sm:h-10" src="/src/assets/images/Obi.svg.png" alt="logo" />
          </router-link>
        </div>
        <div class="hidden space-x-10 md:flex w-3/6">
          <SearchInput/>
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
          <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
            @click="open = true">
            <span class="sr-only">View notifications</span>
            <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </Popover>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" @click="open = false">
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <li v-for="product in products" :key="product.id" class="flex py-6">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a :href="product.href">{{ product.name }}</a>
                                  </h3>
                                  <p class="ml-4">{{ product.price }}</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                              </div>
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty {{ product.quantity }}</p>

                                <div class="flex">
                                  <button type="button" class="font-medium text-orange-400 hover:text-orange-500">Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>$262.00</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div class="mt-6">
                      <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-600">Checkout</a>
                    </div>
                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <button type="button" class="font-medium text-orange-400 hover:text-indigo-500" @click="open = false">
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { Popover} from '@headlessui/vue'
import {
  BellIcon,
  UserIcon,
  ShoppingCartIcon,
} from '@heroicons/vue/24/outline'
import SearchInput from "../hero-section/search-input.vue";
import {ref} from "vue";

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Länge: 200mm Breite: 100mm',
    price: '$90.00',
    quantity: 2,
    imageSrc: '/src/assets/images/holz.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Länge: 200mm, Breite: 100mm',
    price: '$45.00',
    quantity: 1,
    imageSrc: '/src/assets/images/holz.jpg',
    imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
]

const open = ref(false);
</script>
