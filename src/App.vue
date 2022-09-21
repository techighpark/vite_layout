<script setup>
</script>

<template>
  <layout>
    <div class="border border-red-400">
      <router-view/>
      <router-view name="rightBar"></router-view>
    </div>
  </layout>
</template>

