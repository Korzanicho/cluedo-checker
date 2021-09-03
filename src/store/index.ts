import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeTool: 'transparent',
    suspects: [
      {
        name: 'Green',
        slug: 'green',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Mustard',
        slug: 'mustard',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Orchid',
        slug: 'orchid',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Peacock',
        slug: 'peacock',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Plum',
        slug: 'plum',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Scarlett',
        slug: 'scarlett',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
    ],
    weapons: [
      {
        name: 'Świecznik',
        slug: 'swiecznik',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Sztylet',
        slug: 'sztylet',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Metalowa rurka',
        slug: 'rurka',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Reworwer',
        slug: 'reworwer',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Lina',
        slug: 'lina',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Klucz francuski',
        slug: 'klucz-francuski',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
    ],
    rooms: [
      {
        name: 'Salon',
        slug: 'salon',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Sala Bilardowa',
        slug: 'sala-bilardowa',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Ogród zimowy',
        slug: 'ogrod-zimowy',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Jadalnia',
        slug: 'jadalnia',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Hol',
        slug: 'hol',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Kuchnia',
        slug: 'kuchnia',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Biblioteka',
        slug: 'biblioteka',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Weranda',
        slug: 'weranda',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
      {
        name: 'Gabinet',
        slug: 'gabinet',
        values: [
          'transparent',
          'transparent',
          'transparent',
        ],
      },
    ],
    legendData: {
      kitYellow: '',
      colorGreen: '',
      colorRed: '',
      colorPurple: '',
      colorBlue: '',
      colorWhite: '',
      colorBlack: '',
      colorPink: '',
    },
  },
  mutations: {
    setActiveTool(state, toolName) {
      state.activeTool = toolName;
    },
    updateChecker(state, payload) {
      // eslint-disable-next-line
      // @ts-ignore
      state[payload.type] = payload.checker;
    },
    updateState(state, payload) {
      state.legendData = payload.legendData;
      state.activeTool = payload.activeTool;
      state.rooms = payload.rooms;
      state.suspects = payload.suspects;
      state.weapons = payload.weapons;
    },
    updateLegendData(state, legendData) {
      state.legendData = legendData;
    },
    setCheckerData(state, payload) {
      // eslint-disable-next-line
      // @ts-ignore
      state[payload.type] = payload.checker;
    },
  },
  getters: {
    rooms: (state) => state.rooms,
    weapons: (state) => state.weapons,
    suspects: (state) => state.suspects,
    activeTool: (state) => state.activeTool,
    legendData: (state) => state.legendData,
  },
  actions: {
    setStateToLS({ state }) {
      localStorage.setItem('game', JSON.stringify(state));
    },
    getStateFromLS({ commit }) {
      let data = localStorage.getItem('game') ?? '';
      if (data) data = JSON.parse(data);
      commit('updateState', data);
    },
  },
});
