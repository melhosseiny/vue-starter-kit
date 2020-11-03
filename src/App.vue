<template>
  <div :class="$style.app">
    <nav>
      <router-link to="/">
        Hello
      </router-link>
    </nav>
    <main :class="$style.main">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style module>
/* Layout */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  padding: 1em;
}
</style>
