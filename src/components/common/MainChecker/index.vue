<template>
  <div class="MainChecker">
    <table>
      <tr v-for="suspect in getCheckerData" :key="suspect.slug">
        <th>{{ suspect.name }}</th>

        <td
          v-for="(value, index) in suspect.values"
          :key="index"
        >
          <button
            class="MainChecker__square"
            @click="draw({ slug: suspect.slug, index: index })"
            :style="`--tool-color: ${value}; --tool-shadow: ${getActiveTool}`"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<style src="./style.sass" lang="sass"></style>
<script src="./component.ts" lang="ts" />
