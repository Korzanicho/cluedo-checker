import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  IChecker,
  IDrawPayload,
} from '@/support/interfaces';
import HDeepCopy from '@/support/utils';

@Component
export default class MainChecker extends Vue {
  /**
  * @var string
  */
  @Prop({ type: [String], default: 'suspects' })
  private type!: string

  /**
  * @return string
  * Computed method to get checker object
  */
  get getCheckerData(): IChecker {
    return this.$store.getters[this.type];
  }

  /**
  * @return string
  * Computed method to get active tool from store
  */
  get getActiveTool(): string {
    return this.$store.getters.activeTool;
  }

  /**
  * @return string
  * Check
  */
  draw(payload: IDrawPayload): void {
    const newCheckerObject = HDeepCopy(this.$store.getters[this.type]);
    const index = newCheckerObject.findIndex(
      (checkerElement: IChecker) => checkerElement.slug === payload.slug,
    );
    newCheckerObject[index].values[payload.index] = this.getActiveTool;
    this.$store.commit('updateChecker', { type: this.type, checker: newCheckerObject });
    this.$store.dispatch('setStateToLS');
  }
}
