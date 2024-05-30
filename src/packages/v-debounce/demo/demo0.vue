<script lang="ts">
export default {
  name: 'VDebounceDemo',
  title: '基本',
}
</script>
<script setup lang="ts">
import VDebounce from 'vue-dlib/v-debounce'
function alertMessage(message: string) {
  alert(message + 1)
}
</script>

<template>
    <button v-debounce="alertMessage">点击</button>
</template>