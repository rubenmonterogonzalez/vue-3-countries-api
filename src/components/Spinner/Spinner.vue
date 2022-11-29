<template>
  <div class="spin"></div>
</template>

<script setup></script>

<style scoped>
.spin {
  display: block;
  width: 60px;
  height: 60px;
  margin: 30px auto;
  border: 5px solid transparent;
  border-radius: 50%;
  border-top-color: #000;
  animation: spin-bc6d31ca 1s infinite ease;
}
@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
