<script setup lang="ts">
import { TresCanvas, useRenderLoop } from '@tresjs/core'
import { useTweakPane } from '@tresjs/cientos';
import { shallowRef, watchEffect } from 'vue';


useTweakPane();

const { onLoop } = useRenderLoop();
const cubeRef = shallowRef();

onLoop(({ delta, elapsed }) => {
    if(cubeRef.value) {
        cubeRef.value.rotation.y += delta;
        cubeRef.value.rotation.z = elapsed;

        cubeRef.value.position.y = Math.sin(elapsed) * 2;

        cubeRef.value.scale.set(
            Math.sin(elapsed * 2),
            Math.sin(elapsed * 2),
            Math.sin(elapsed * 2)
        )
    }
})
watchEffect(() => {
    console.log('cubeRef', cubeRef.value)
})
</script>

<template>
    <TresCanvas clear-color="#82DBC5">
        <TresPerspectiveCamera />
        <TresMesh :position="[0, 0, 0]" ref="cubeRef" >
            <TresBoxGeometry />
            <TresMeshNormalMaterial />
        </TresMesh>
        <TresAxesHelper />
    </TresCanvas>
</template>

<style scoped></style>
