<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'


</script>

<template>
  <TresCanvas clear-color="#82DBC5">
      <TresPerspectiveCamera :position="[0, 4, 4]" :look-at="[0, 0, 0]"/>
      <TresMesh :position="[0, 1, 0]">
        <TresBoxGeometry/>
        <TresMeshNormalMaterial />
      </TresMesh>
      <TresAxesHelper/>
  </TresCanvas>
</template>

<style scoped>

</style>
