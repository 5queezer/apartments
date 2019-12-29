<template>
  <div>
    <div class="PojoniLogo">
      <span class="text-primary">pojoni</span>
      <span class="text-secondary">code challenge</span>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Exo+2:800&display=swap');

.PojoniLogo {
  animation: 1s appear;
  font-family: 'Exo 2', sans-serif;
  font-size: 3em;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
