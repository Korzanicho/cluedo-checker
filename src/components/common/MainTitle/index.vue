<template>
  <div class="MainTitle" :style="`--title-size: ${size}; --title-align: ${align}`">
    <component :is="selector">
      {{ title }}
    </component>
  </div>
</template>

<style src="./style.sass" lang="sass"></style>
<script src="./component.ts" lang="ts" />
