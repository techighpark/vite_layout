<template>
  <div :class="clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', props.className)">
    <slot></slot>
  </div>
</template>

<script setup>
import clsx from "clsx"

const props = defineProps({className: String})
</script>

<style scoped>

</style>