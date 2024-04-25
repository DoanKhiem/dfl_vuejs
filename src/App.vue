<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { BoxGeometry, Mesh, MeshBasicMaterial, Scene } from 'three';

const scene = new Scene()
const geometry = new BoxGeometry()
const material = new MeshBasicMaterial() 
const box = new Mesh(geometry, material)
scene.add(box)
</script>

<template>
  <TresCanvas clear-color="#82DBC5">
      <TresPerspectiveCamera/>
      <TresMesh>
        <TresBoxGeometry/>
        <TresMeshBasicMaterial color="#FF0000"/>
      </TresMesh>
  </TresCanvas>
</template>

<style scoped>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
