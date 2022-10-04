<template>
  <div id="app">
    <button @mouseover="show = !show" @mouseleave="show = !show">Toggle Slide + Fade</button>
    <Transition name="slide-fade">
      <p v-if="show">hello</p>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // active: false,
      show: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

 .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} 

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
