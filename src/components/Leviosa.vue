<script setup lang="ts">
import { Levioso, TorusKnot } from "@tresjs/cientos";
import { TresObject3D } from "@tresjs/core";
import { shallowRef } from "vue";
import { ShallowRef } from "vue";

const groupRef: ShallowRef<TresObject3D | null> = shallowRef(null);
</script>

<template>
  <Levioso ref="groupRef">
    <TorusKnot :position="[0, 2, 0]">
      <TresMeshNormalMaterial />
    </TorusKnot>
  </Levioso>
</template>