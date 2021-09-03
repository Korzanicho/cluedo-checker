<template>
  <div class="MainToolkit">
    <div
      class="square"
      v-for="(toolColor, i) in tools"
      :key="i"
    >
      <button
        :style="`--tool-color: ${toolColor}`"
        @click="setActiveTool(toolColor)"
        class="square__button"
      />
    </div>
    <div class="square square--active">
      <div :style="`--tool-color: ${getActiveTool}`" class="square__button">
        <i class="fa fa-paint-brush"></i>
      </div>
    </div>
  </div>
</template>

<style src="./style.sass" lang="sass"></style>
<script src="./component.ts" lang="ts" />
