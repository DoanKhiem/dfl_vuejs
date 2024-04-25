<script setup lang="ts">
import { TresObject3D, useRenderLoop } from "@tresjs/core";
import { Color } from "three";
import { ShallowRef, shallowRef, ref } from "vue";

const meshTorusRef: ShallowRef<TresObject3D | null> = shallowRef(null);
const color = ref<Color>(new Color(255, 0, 0));
const { onLoop } = useRenderLoop();

const onClickMesh = () => {
  const colorTemp = new Color(
    Math.random() * 1,
    Math.random() * 1,
    Math.random() * 1
  );

  color.value = colorTemp;
};

onLoop(({ delta }) => {
  if (meshTorusRef.value) {
    meshTorusRef.value.rotation.x += 1 * delta;
  }
});
</script>

<template>
  <TresMesh :position="[3, 0, 0]" @click="onClickMesh" ref="meshTorusRef">
    <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
    <TresMeshBasicMaterial :color="color" />
  </TresMesh>
</template>