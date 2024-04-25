<script setup lang="ts">
import { Text3D } from "@tresjs/cientos";
const props = defineProps<{
  text: string;
}>();

console.log(props.text);
</script>

<template>
  <Suspense>
    <Text3D
      :text="props.text"
      font="/Roboto_Regular.json"
      :height="0.2"
      center
      need-updates
      :size="0.2"
    >
      <TresMeshNormalMaterial />
    </Text3D>
  </Suspense>
</template>

<style scoped></style>