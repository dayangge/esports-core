import { gameList } from '../services/api';
import { normalizeData } from '../utils/util';


export default {
  namespace: 'gameList',

  state: {
    gameList: {
      ids: [],
      list: {}
    },
  },

  effects: {
    *fetchGameList({payload}, { call, put, select }) {
      let data = yield call(gameList,payload);
      data = normalizeData(data, 'ID');
      yield put({
        type: 'saveGameList',
        payload: data,
      });
    },

  },

  reducers: {
    saveGameList(state, { payload }) {
      return {
        ...state,
        gameList: payload,
      };
    },
  },

  subscriptions: {
    setup({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname, search }) => {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};
