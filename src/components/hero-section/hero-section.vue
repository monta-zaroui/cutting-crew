<template>
  <ShoppingCart />
  <Filter />
  <Products />
  <div class="px-20">
    <h1 class="flex font-bold text-xl text-gray-800">
      Maße & Menge
    </h1>
  </div>
</template>

<script setup>
import Products from "../cut/products.vue";
import Filter from "../filters/filter.vue";
import ShoppingCart from "../shopping-cart/shopping-cart.vue";

</script>
