<template>
  <div class="Game">
    <header>
      <MainTitle title="Cluedo" size="40px" selector="h1" align="center"/>
    </header>
    <aside>
      <MainToolkit />
    </aside>
    <main class="Game__content">
      <MainCard>
        <MainTitle title="Kto" size="20px" selector="h2" align="center" />
        <MainChecker type='suspects' />
      </MainCard>
      <MainCard>
        <MainTitle title="Czym" size="20px" selector="h2" align="center" />
        <MainChecker type='weapons' />
      </MainCard>
      <MainCard>
        <MainTitle title="Gdzie" size="20px" selector="h2" align="center" />
        <MainChecker type='rooms' />
      </MainCard>
      <div style="flex-basis: 100%">
        <MainCard>
          <MainTitle title="Legenda" size="20px" selector="h2" align="center" />
          <InputLegend />
        </MainCard>
      </div>
    </main>
  </div>
</template>

<script>
import InputLegend from '@/components/InputLegend/index.vue';
import MainToolkit from '@/components/MainToolkit/index.vue';
import MainCard from '@/components/common/MainCard/index.vue';
import MainTitle from '@/components/common/MainTitle/index.vue';
import MainChecker from '@/components/common/MainChecker/index.vue';

export default {
  name: 'Game',
  components: {
    MainCard,
    MainTitle,
    MainToolkit,
    MainChecker,
    InputLegend,
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    const isInitialized = localStorage.getItem('isInitialized');
    if (isInitialized) {
      this.$store.dispatch('getStateFromLS');
    } else {
      this.$store.dispatch('setStateToLS');
      localStorage.setItem('isInitialized', true);
    }
  },
};
</script>
<style lang="sass">
  .Game
    margin: 0 auto
    padding: 0 50px
    max-width: 1098px
    &__content
      display: flex
      flex-wrap: wrap
      justify-content: space-between
</style>
