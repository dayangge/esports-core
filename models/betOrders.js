import { fetchBetOrder } from '../services/api';

export default {
  namespace: 'betOrders',

  state: {
    betOrders: [],
  },

  effects: {
    *fetchBetOrder({ payload }, { call, put, select }) {
      let data = yield call(fetchBetOrder, payload);
      yield put({
        type: 'save',
        payload: data,
      })
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        betOrders: payload,
      };
    },
  },
};
