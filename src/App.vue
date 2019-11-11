<template>
  <div id="app" class="container-fluid bg">
    <Auth></Auth>
   </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    Auth: () => import('./components/Auth'),
  }
}
</script>

<style>


.bg {
  width: 100%;
  height: 100vh;
}

</style>
