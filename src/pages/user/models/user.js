import { createUser, deleteUser, patchUser, queryUsers } from '../../../../services/api';

export default {
  namespace: 'user',
  state: {
    users: [],
  },
  //初始化页面
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/user') {
          dispatch({
            type: 'fetch',
            payload: query,
          });
        }
      });
    },
  },
  effects: {
    * fetch({ type, payload }, { put, call, select }) {
      const userlist = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: {
          // heros: data||localData,
          users: userlist,
        },
      });
    },
    * remove({ payload: id }, { call, put, select }) {
      yield call(deleteUser, id);
      yield put({ type: 'fetch' });
    },
    * patch({ payload: { id, value } }, { call, put, select }) {
      yield call(patchUser, id, value);
      yield put({ type: 'fetch' });
    },
    * create({ payload: {value} }, { call, put, select }) {
      console.log("model:"+value);
      console.log("model:"+JSON.stringify(value));
      yield call(createUser, value);
      yield put({ type: 'fetch' });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
