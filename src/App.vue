<template>
  <div id="app">
    <t-header />
    <router-view/>
  </div>
</template>

<script>
import { THeader } from 'components/index.js'
export default {
  name: 'App',
  components: {
    't-header': THeader
  }
}
</script>

<style>
</style>
