<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { BoxGeometry, Mesh, MeshBasicMaterial, Scene } from 'three';

const scene = new Scene()
const geometry = new BoxGeometry(2,1,2)
const material = new MeshBasicMaterial() 
const box = new Mesh(geometry, material)
scene.add(box)
</script>

<template>
  <TresCanvas clear-color="#82DBC5">
      <TresPerspectiveCamera/>
      <TresMesh>
        <TresBoxGeometry :args="[2, 1, 2]"/>
        <TresMeshBasicMaterial color="#FF0000"/>
      </TresMesh>
  </TresCanvas>
</template>

<style scoped>

</style>
