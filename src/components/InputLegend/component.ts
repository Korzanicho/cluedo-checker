import { Component, Vue } from 'vue-property-decorator';
import {
  ITools,
} from '@/support/interfaces';
import HDeepCopy from '@/support/utils';

@Component
export default class InputLegend extends Vue {
  /**
   * @var colors
   */
  colors: ITools = {
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
  * @param String
  * Method to set active tool in store
  */
  // eslint-disable-next-line
  updateInput(key: string): void {
    if (this.$refs[key] !== undefined) {
      const newLegendData = HDeepCopy(this.getLegendData);
      // eslint-disable-next-line
      // @ts-ignore
      newLegendData[key] = this.$refs[key][0].value;

      this.$store.commit('updateLegendData', newLegendData);
      this.$store.dispatch('setStateToLS');
    }
  }

  /**
  * @return string
  * Computed method to get active tool from store
  */
  get getLegendData(): string {
    return this.$store.getters.legendData;
  }
}
