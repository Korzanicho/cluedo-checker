<template>
  <div class="InputLegend">
    <label v-for="(element, key) in getLegendData" :key="key">
      <input
        :ref="key"
        type="text"
        placeholder="..."
        :value="element"
        :style="`--background-color: ${colors[key]}`"
        @input="updateInput(key)"
      />
    </label>
  </div>
</template>

<style src="./style.sass" lang="sass"></style>
<script src="./component.ts" lang="ts" />
