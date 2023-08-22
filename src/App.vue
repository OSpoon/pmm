<script setup lang="ts">
import { onMounted } from 'vue'
import { loadGithubMarkdown, transform, setToolbar, parseQueryParams } from './tool/pmm'

onMounted(async () => {
  const { username, resp } = parseQueryParams(window.location.search)
  const markdownContent = await loadGithubMarkdown(username, resp)
  const mm = transform('#markmap', markdownContent, {
    initialExpandLevel: 2
  })
  setToolbar('app', mm)
})
</script>

<template>
  <svg id="markmap"></svg>
</template>

<style scoped>
#markmap {
  width: 100%;
  height: 100%;
}
</style>
