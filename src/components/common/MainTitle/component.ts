import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MainTitle extends Vue {
  /**
  * @var string
  */
  @Prop({ type: [String], default: 'domyślny tytuł' })
  private title!: string

  /**
  * @var string
  */
  @Prop({ type: [String], default: '50px' })
  private size!: string

  /**
  * @var string
  */
  @Prop({ type: [String], default: 'h2' })
  private selector!: string

  /**
  * @var string
  */
  @Prop({ type: [String], default: 'left' })
  private align!: string
}
