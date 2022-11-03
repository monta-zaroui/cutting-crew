<template>
  <!-- Vue Router -->
  <div class="mt-16 pl-20">
    <h1 class="text-xl font-bold">Konfiguriere hier deinen Holzzuschnitt</h1>
    <div class="flex items-center gap-20 mt-10">
      <h1 class="flex-none text-md font-bold">Dein Markt: </h1>
      <Dropdown class="flex-none" />
    </div>
    <div class="flex items-center gap-8 mt-8">
      <h1 class="flex-none text-md font-bold">Material auswählen: </h1>
      <div
          class="flex overflow-x-scroll hide-scroll-bar"
      >
        <div
            class="flex flex-nowrap"
        >
        </div>
        <div class="inline-block  px-2" v-for="material in materials">
          <button class="text-sm font-bold py-2 px-4 border rounded"
                  :class="material.activated ? 'bg-orange-500 text-white' : 'text-orange-400 hover:bg-orange-100 border-orange-400 bg-white'"
                  @click="selectMaterial(material)" >
            {{ material.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Dropdown from "../dropdown.vue";
import {reactive} from "vue";


const materials = reactive(
    [
      { id: 1, name: 'Brick', activated: false },
      { id: 2, name: 'Beton', activated: false },
      { id: 3, name: 'Holz', activated: true },
      { id: 4, name: 'Stahl', activated: false },
      { id: 5, name: 'Kunststoff', activated: false },
      { id: 6, name: 'Glas', activated: false },
      { id: 7, name: 'Keramik', activated: false },
      { id: 8, name: 'Metall', activated: false },
      { id: 9, name: 'Stein', activated: false },
      { id: 10, name: 'Kunststoff', activated: false },
      { id: 11, name: 'Glas', activated: false },
      { id: 12, name: 'Keramik', activated: false },
      { id: 13, name: 'Metall', activated: false },
      { id: 14, name: 'Stein', activated: false },
      { id: 15, name: 'Kunststoff', activated: false },
      { id: 16, name: 'Glas', activated: false },
      { id: 17, name: 'Keramik', activated: false },
      { id: 18, name: 'Metall', activated: false },
      { id: 19, name: 'Stein', activated: false },
      { id: 20, name: 'Kunststoff', activated: false },
      { id: 21, name: 'Glas', activated: false },
      { id: 22, name: 'Keramik', activated: false },
      { id: 23, name: 'Metall', activated: false },
      { id: 24, name: 'Stein', activated: false },
      { id: 25, name: 'Kunststoff', activated: false },
      { id: 26, name: 'Glas', activated: false },
      { id: 27, name: 'Keramik', activated: false },
      { id: 28, name: 'Metall', activated: false },
      { id: 29, name: 'Stein', activated: false }
    ]
)

const selectMaterial = (material) => {
  materials.forEach((m) => {
    m.activated = false
  })
  material.activated = true
}
</script>
