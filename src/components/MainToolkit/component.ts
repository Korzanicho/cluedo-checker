import { Component, Vue } from 'vue-property-decorator';
import {
  ITools,
} from '@/support/interfaces';

@Component
export default class MainToolkit extends Vue {
  /**
   * @var ITools
   */
  tools: ITools = {
    kitYellow: '#a7991d',
    colorGreen: '#22a71d',
    colorRed: '#a71d1d',
    colorPurple: '#6A0DAD',
    colorBlue: '#1d1fa7',
    colorWhite: '#f3eded',
    colorBlack: '#000',
    colorPink: '#FFC0CB',
  }

  /**
  * @var String
  */
  activeTool = 'kitYellow';

  /**
  * @param String
  * Method to set active tool in store
  */
  setActiveTool(toolName: string): void {
    this.$store.commit('setActiveTool', toolName === this.getActiveTool ? 'transparent' : toolName);
    this.activeTool = toolName === this.getActiveTool ? 'transparent' : toolName;
    this.$store.dispatch('setStateToLS');
  }

  /**
  * @return string
  * Computed method to get active tool from store
  */
  get getActiveTool(): string {
    return this.$store.getters.activeTool;
  }
}
