<template>
  <router-view>
    <Home />
  </router-view>
</template>

<script>
import Home from './views/home/Home'

export default {
  name: 'App',
  components: { Home }
}
</script>
