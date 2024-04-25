<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
import { SRGBColorSpace } from "three";
import { OrbitControls } from "@tresjs/cientos";
import Three3DText from "../components/Three3DText.vue";
import Leviosa from "../components/Leviosa.vue";
import ModelChangeColor from "../components/ModelChangeColor.vue";
</script>

<template>
  <TresCanvas
    window-size
    clear-color="#82DBC5"
    shadow
    :output-color-space="SRGBColorSpace"
    :antialias="true"
  >
    <TresPerspectiveCamera
      :args="[45, 1, 0.1, 1000]"
      :position="[0, 0, 10]"
      :look-at="[0, 0, 0]"
    />
    <OrbitControls make-default />

    <TresAmbientLight :intensity="0.3" />
    <TresDirectionalLight
      :intensity="0.4"
      :position="[0, 10, 0]"
      :shadow="true"
    />
    <ModelChangeColor />
    <TresGridHelper :args="[20, 20]" />
    <TresAxesHelper :args="[2, 2]" />
    <Three3DText text="binhbinh" />
    <Leviosa />
  </TresCanvas>
</template>

<style scoped></style>