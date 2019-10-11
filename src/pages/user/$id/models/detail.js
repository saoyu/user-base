import { queryUser } from '../../../../services/user/api';


const pathToRegexp = require('path-to-regexp');


export default {
  namespace: 'userDetail',

  state: {
    data: {},
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/user/:id').exec(pathname);
        if (match) {
          // console.log(pathname+"::::"+ JSON.stringify(match)+":::"+match[1]);
          dispatch({ type: 'query', payload: { id: match[1] } });
        }

      });
    },
  },

  effects: {
    * query({ payload: { id } }, { call, put }) {
      const resdata = yield call(queryUser, id);
      const { success, data } = resdata;
      if (success) {
        yield put({
          type: 'querySuccess',
          payload: {
            data: data,
          },
        });
      } else {
        throw data;
      }
    },
  },
  reducers: {
    querySuccess(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
